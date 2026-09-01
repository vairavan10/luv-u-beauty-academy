import { NextResponse } from "next/server";

/**
 * Lead capture backstop for the contact form.
 *
 * The primary path is the WhatsApp handoff in ContactForm.tsx. This route
 * exists so that a lead is still recorded when that handoff is blocked by a
 * popup blocker, or when the visitor never actually sends the pre-filled
 * WhatsApp message.
 *
 * Set LEAD_WEBHOOK_URL to forward enquiries somewhere durable — a Google
 * Apps Script web app writing to a Sheet, a Zapier/Make catch hook, or your
 * own inbox relay. With no webhook configured the enquiry is still written to
 * the server log, which is recoverable but not a substitute for real storage.
 */

interface Enquiry {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const raw = body as Partial<Enquiry>;
  const enquiry: Enquiry = {
    name: clean(raw.name, 100),
    phone: clean(raw.phone, 20),
    email: clean(raw.email, 150),
    course: clean(raw.course, 100),
    message: clean(raw.message, 1000),
  };

  // A name and phone are the minimum needed to follow a lead up.
  if (!enquiry.name || !/^\d{10}$/.test(enquiry.phone.replace(/\s/g, ""))) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const receivedAt = new Date().toISOString();

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...enquiry, receivedAt, source: "website-contact-form" }),
      });
    } catch (error) {
      // Never fail the request because the webhook is down — the visitor has
      // already been handed off to WhatsApp and must not see an error.
      console.error("[enquiry] webhook delivery failed", error);
    }
  }

  console.info("[enquiry]", JSON.stringify({ ...enquiry, receivedAt }));

  return NextResponse.json({ ok: true });
}
