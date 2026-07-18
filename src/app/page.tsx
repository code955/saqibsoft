import Image from "next/image";
import Link from "next/link";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { CaseStudy } from "@/components/CaseStudy";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import styles from "./page.module.css";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 1);

  return (
    <>
      <section className={`container ${styles.hero}`} aria-label="Introduction">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={`${styles.kicker} reveal`}>{site.role}</p>
            <AnimatedHeading
              as="h1"
              className={styles.brand}
              parts={[{ text: "Saqib" }, { text: "Soft", className: styles.brandAccent }]}
              delayStep={0.09}
            />
            <p className={`${styles.headline} reveal`} style={{ transitionDelay: "0.32s" }}>
              {site.headline}
            </p>
            <p className={`${styles.tagline} reveal`} style={{ transitionDelay: "0.4s" }}>
              {site.tagline}
            </p>
            <div className={`${styles.meta} reveal`} style={{ transitionDelay: "0.46s" }}>
              <span className={styles.metaItem}>
                <span className={styles.metaDot} aria-hidden="true" />
                {site.location}
              </span>
              <span className={styles.metaItem}>
                <span className={styles.metaDot} aria-hidden="true" />
                {site.remote}
              </span>
            </div>
            <div className={`${styles.actions} reveal`} style={{ transitionDelay: "0.52s" }}>
              <Link href="/work" className="btn btn-primary">
                View selected work
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Start a conversation
              </Link>
            </div>
          </div>

          <div className={`${styles.visual} reveal`} style={{ transitionDelay: "0.2s" }}>
            <div className={styles.portrait}>
              <div className={styles.portraitFrame}>
                <Image
                  src="/profile.png"
                  alt="Saqib Soft — professional portrait"
                  width={480}
                  height={480}
                  priority
                  sizes="(max-width: 720px) 220px, (max-width: 1024px) 280px, 300px"
                />
              </div>
              <div className={styles.portraitCaption}>
                <strong>{site.availability}</strong>
                <span>{site.responseTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.work}`}>
        <div className={`container ${styles.workInner}`}>
          <div className={styles.workTop}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="section-kicker reveal">Selected work</p>
              <AnimatedHeading as="h2" text="AI automation in action" />
              <p className="reveal" style={{ transitionDelay: "0.1s" }}>
                One case study up close — plus web applications and business platforms across
                Pakistan, the USA, Germany, and the UK on the full Work page.
              </p>
            </div>
            <Link href="/work" className="btn btn-secondary">
              Full case study
            </Link>
          </div>
          {featured.map((project, index) => (
            <CaseStudy key={project.id} project={project} index={index} compact />
          ))}
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.principles}`}>
          <div className="section-head">
            <p className="section-kicker reveal">How engagement works</p>
            <AnimatedHeading as="h2" text="A process clients can trust" />
            <p className="reveal" style={{ transitionDelay: "0.1s" }}>
              Clear scope, visible progress, and software you can put in front of real users.
            </p>
          </div>
          <ol className={styles.principleList}>
            {site.principles.map((item, index) => (
              <li key={item.title} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={`${styles.ctaBand} reveal`}>
            <div>
              <AnimatedHeading as="h2" text="Ready to build something serious?" delayStep={0.04} />
              <p>
                Tell me about the product, timeline, and outcome you need. If it&apos;s a fit,
                we&apos;ll define a clear path to launch.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Discuss a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
