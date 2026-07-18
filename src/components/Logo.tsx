import Link from "next/link";
import { site } from "@/data/site";
import styles from "./Logo.module.css";

type LogoProps = {
  href?: string;
  className?: string;
};

export function Logo({ href = "/", className }: LogoProps) {
  return (
    <Link
      href={href}
      className={`${styles.logo} ${className ?? ""}`}
      aria-label={`${site.brand} home`}
    >
      <span className={styles.mark} aria-hidden="true">
        S
      </span>
      <span className={styles.text}>
        <span className={styles.name}>Saqib</span>
        <span className={styles.soft}>Soft</span>
      </span>
    </Link>
  );
}
