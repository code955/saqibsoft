import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { site } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Saqib Soft — a full-stack developer based in Pakistan, trusted for remote delivery with UK and US teams.",
};

export default function AboutPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="section-kicker reveal">About</p>
        <AnimatedHeading as="h1" className="page-title" text="A partner for serious builds" />

        <div className={`${styles.layout}`}>
          <div className={`${styles.photoWrap} reveal`}>
            <div className={styles.photo}>
              <Image
                src="/profile.png"
                alt="Professional portrait for Saqib Soft"
                width={480}
                height={480}
                priority
              />
            </div>
            <p className={styles.caption}>
              {site.location} · {site.remote}
            </p>
          </div>

          <div className={`${styles.copy} reveal`} style={{ transitionDelay: "0.1s" }}>
            <p className={styles.lead}>{site.aboutLead}</p>
            {site.about.map((para) => (
              <p key={para}>{para}</p>
            ))}

            <div className={styles.facts}>
              <div>
                <span>Role</span>
                <strong>{site.role}</strong>
              </div>
              <div>
                <span>Availability</span>
                <strong>{site.availability}</strong>
              </div>
              <div>
                <span>Response time</span>
                <strong>{site.responseTime}</strong>
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/work" className="btn btn-primary">
                Review work
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
