import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { CaseStudy } from "@/components/CaseStudy";
import { ProjectTile } from "@/components/ProjectTile";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies by Saqib Soft — AI automation, web applications, and business platforms for clients across Pakistan, the USA, Germany, and the UK.",
};

export default function WorkPage() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section className="page-hero">
      <div className="container">
        <p className="section-kicker reveal">Portfolio</p>
        <AnimatedHeading as="h1" className="page-title" text="Work that stands on its own" />
        <p className="lede reveal" style={{ transitionDelay: "0.1s" }}>
          AI automation, web applications, and business platforms delivered for clients across
          Pakistan, the USA, Germany, and the UK.
        </p>

        <div style={{ marginTop: "1.5rem" }}>
          {featured.map((project, index) => (
            <CaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className={styles.gridSection}>
          <div className="section-head">
            <p className="section-kicker reveal">More work</p>
            <AnimatedHeading as="h2" text="Across industries, one standard of craft" />
          </div>
          <div className={styles.grid}>
            {rest.map((project, index) => (
              <ProjectTile key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        <div className={`${styles.note} reveal`}>
          <div>
            <h2>Want the full walkthrough on any project?</h2>
            <p>
              Screens, architecture notes, and outcomes are available on request — get in touch
              and I&apos;ll share the details relevant to your industry.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
