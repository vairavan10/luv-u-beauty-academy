import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Rendered once at build time and cached — see
// node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md
export const alt =
  "Luv U Beauty Academy — Professional beautician courses in Tanjore, Thanjavur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0D0D0D 0%, #1a0614 55%, #2d0a1e 100%)",
        }}
      >
        {/* Pink glow, top-right */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(233,30,140,0.30), rgba(233,30,140,0))",
            display: "flex",
          }}
        />

        {/* Logo on a white card, matching the site header treatment */}
        <div
          style={{
            display: "flex",
            background: "#ffffff",
            borderRadius: 20,
            padding: "14px 28px",
            marginBottom: 40,
            alignSelf: "flex-start",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={240} height={120} alt="" style={{ objectFit: "contain" }} />
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          Luv U Beauty Academy
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#ff77c0",
            fontWeight: 600,
            marginBottom: 28,
          }}
        >
          Beautician Training in Tanjore, Thanjavur
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "rgba(255,255,255,0.62)",
            lineHeight: 1.45,
          }}
        >
          Bridal Makeup · Hair Styling · Skin Care · Nail Art
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 12,
            display: "flex",
            background: "linear-gradient(90deg, #C2185B 0%, #E91E8C 50%, #C9A96E 100%)",
          }}
        />
      </div>
    ),
    size
  );
}
