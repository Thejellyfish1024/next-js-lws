import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href='/about/me'>Me</Link></li>
            <li><Link href='/about/her'>Her</Link></li>
          </ul>
          {children}
        </nav>
      </body>
    </html>
  );
}
