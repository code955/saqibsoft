"use client";

import { useTheme } from "./ThemeProvider";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme, ready } = useTheme();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to night mode"}
      title={theme === "dark" ? "Light mode" : "Night mode"}
    >
      <span className={styles.icon} aria-hidden="true">
        {!ready || theme === "light" ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="4.2" />
            <path
              strokeLinecap="round"
              d="M12 3v1.4M12 19.6V21M4.4 12H3M21 12h-1.4M6.2 6.2l1 1M16.8 16.8l1 1M6.2 17.8l1-1M16.8 7.2l1-1"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
