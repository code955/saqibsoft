import type { Metadata } from "next";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { site } from "@/data/site";
import { ContactForm } from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Saqib Soft to discuss a remote full-stack or AI product engagement.",
};

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="section-kicker reveal">Contact</p>
        <AnimatedHeading as="h1" className="page-title" text="Let's talk about the build" />
        <p className="lede reveal" style={{ transitionDelay: "0.1s" }}>
          {site.availability}. {site.responseTime}.
        </p>

        <div className={styles.layout}>
          <div className={`${styles.panel} reveal`}>
            <p className={styles.intro}>
              Share a short brief — what you&apos;re building, who it&apos;s for, and when you want
              to launch. I&apos;ll reply with honest fit and next steps.
            </p>
            <div className={styles.channels}>
              <div className={styles.channel}>
                <span>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              {site.linkedin ? (
                <div className={styles.channel}>
                  <span>LinkedIn</span>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                    View profile
                  </a>
                </div>
              ) : null}
              {site.github ? (
                <div className={styles.channel}>
                  <span>GitHub</span>
                  <a href={site.github} target="_blank" rel="noopener noreferrer">
                    View repositories
                  </a>
                </div>
              ) : null}
              <div className={styles.channel}>
                <span>Based in</span>
                <strong>
                  {site.location} · {site.remote}
                </strong>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.12s" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
