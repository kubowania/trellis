import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trellis",
  description: "Plan projects with your whole team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <header className="site-header">
          <Link href="/" className="logo">
            <span className="logo-mark" aria-hidden="true" />
            Trellis
          </Link>
          <nav className="site-nav">
            <Link href="/projects">Projects</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/onboarding" className="btn btn-small">
              Sign up
            </Link>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <p>Trellis. Small projects, shared by the whole team.</p>
        </footer>
      </body>
    </html>
  );
}
