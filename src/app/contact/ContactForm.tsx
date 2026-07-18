"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import styles from "./page.module.css";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Project inquiry — ${name || "New client"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany / project: ${company || "—"}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
      </label>
      <label>
        Work email
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
        />
      </label>
      <label>
        Company or project
        <input name="company" type="text" placeholder="Optional" />
      </label>
      <label>
        How can I help?
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Share the product goal, timeline, and any links that help."
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Send inquiry
      </button>
      <p className={styles.note}>
        This opens your email client with a ready message to {site.email}.
        {status === "opened"
          ? " If nothing opened, copy the address and email directly."
          : ""}
      </p>
    </form>
  );
}
