"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { ScrollProgress } from "./ScrollProgress";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <Logo />
          <div className={styles.right}>
            <ThemeToggle />
            <button
              type="button"
              className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
            <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Primary">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.link} ${active ? styles.active : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className={`btn btn-primary ${styles.cta}`}
                onClick={() => setOpen(false)}
              >
                Discuss a project
              </Link>
            </nav>
          </div>
        </div>
        <ScrollProgress />
      </header>
    </>
  );
}
