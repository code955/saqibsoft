import type { CSSProperties } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./CaseStudy.module.css";

type CaseStudyProps = {
  project: Project;
  index?: number;
  compact?: boolean;
};

export function CaseStudy({ project, index = 0, compact = false }: CaseStudyProps) {
  const hasLink = Boolean(project.url);

  return (
    <article
      className={`${styles.study} ${compact ? styles.compact : ""} reveal`}
      style={
        {
          transitionDelay: `${0.06 * index}s`,
          "--study-accent": project.accent,
        } as CSSProperties
      }
    >
      <div className={styles.visual} aria-hidden="true">
        {project.image ? (
          <div className={styles.imageFrame}>
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(max-width: 719px) 0px, (max-width: 1023px) 50vw, 40vw"
              className={styles.image}
            />
          </div>
        ) : (
          <div className={styles.mock}>
            <div className={styles.mockBar}>
              <span />
              <span />
              <span />
              <span className={styles.mockUrl} />
            </div>
            <div className={styles.mockBody}>
              <div className={styles.mockAside} />
              <div className={styles.mockChat}>
                <div className={styles.bubbleA} />
                <div className={styles.bubbleB} />
                <div className={styles.bubbleA} />
                <div className={styles.input} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.number}>{project.number}</span>
          <div className={styles.badges}>
            <span className={styles.badge}>{project.category}</span>
            {project.location ? <span className={styles.badgeMuted}>{project.location}</span> : null}
          </div>
        </div>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.summary}>{project.summary}</p>

        {!compact && project.problem ? (
          <dl className={styles.details}>
            <div>
              <dt>Challenge</dt>
              <dd>{project.problem}</dd>
            </div>
            <div>
              <dt>Contribution</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Result</dt>
              <dd>{project.outcome}</dd>
            </div>
          </dl>
        ) : null}

        <ul className={styles.stack} aria-label="Technologies used">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          {hasLink ? (
            <a
              className="btn btn-primary"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open live project
            </a>
          ) : (
            <a className="btn btn-secondary" href="/contact">
              Request a walkthrough
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
