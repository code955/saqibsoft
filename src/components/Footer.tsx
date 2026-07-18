import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/data/site";
import styles from "./Footer.module.css";

const YEAR = 2026;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo />
          <p>
            {site.role} · {site.remote}
          </p>
        </div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
          {site.github ? (
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : null}
          {site.linkedin ? (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          ) : null}
        </div>
        <p className={styles.copy}>
          © {YEAR} {site.brand}. Crafted for clients who value clear communication and shipped
          software.
        </p>
      </div>
    </footer>
  );
}
