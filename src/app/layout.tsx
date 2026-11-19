import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'JSNetworkCorp Portfolio',
  description: 'Backend business systems, practical AI automation, internal tools, and verification-focused engineering portfolio.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preload" href="/fonts/pyeojin-gothic/files/PyeojinGothic-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="stylesheet" href="/fonts/pyeojin-gothic/pyeojin-gothic.css" />
      </head>
      <body>
        <header className="siteHeader">
          <Link href="/">JSNetworkCorp</Link>
          <nav>
            <Link href="/projects/">Projects</Link>
            <Link href="/ax/">AX Cases</Link>
            <Link href="/ai-agents/">AI Agents</Link>
            <Link href="/screens/">Screens</Link>
            <Link href="/resume/">Resume</Link>
            <Link href="/releases/">Releases</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="siteFooter">Public portfolio surface. Keep private wiki, raw logs, credentials, and customer data out.</footer>
      </body>
    </html>
  );
}
