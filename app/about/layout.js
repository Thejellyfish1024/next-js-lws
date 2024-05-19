import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <nav>
      <ul>
        <li><Link href='/about/me'>Me</Link></li>
        <li><Link href='/about/her'>Her</Link></li>
      </ul>
      {children}
    </nav>
  );
}
