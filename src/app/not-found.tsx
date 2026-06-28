import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FDF6F0, #F9E8E8)" }}>
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🌸</div>
        <h1 className="font-display font-bold text-charcoal text-5xl mb-4">404</h1>
        <h2 className="font-display font-semibold text-charcoal text-2xl mb-4">Page Not Found</h2>
        <p className="font-body text-gray-500 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. Maybe it was moved or the URL is incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/courses" className="btn-secondary">View Courses</Link>
        </div>
      </div>
    </main>
  );
}
