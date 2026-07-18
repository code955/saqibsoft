import type { Project } from "@/data/projects";
import styles from "./ProjectTile.module.css";

type ProjectTileProps = {
  project: Project;
  index?: number;
};

export function ProjectTile({ project, index = 0 }: ProjectTileProps) {
  const hasLink = Boolean(project.url);

  return (
    <article className={`${styles.tile} reveal`} style={{ transitionDelay: `${0.05 * index}s` }}>
      <div className={styles.top}>
        <span className={styles.number}>{project.number}</span>
        <div className={styles.badges}>
          <span className={styles.badge}>{project.category}</span>
          {project.location ? <span className={styles.badgeMuted}>{project.location}</span> : null}
        </div>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.actions}>
        {hasLink ? (
          <a className="btn btn-secondary" href={project.url} target="_blank" rel="noopener noreferrer">
            Visit project
          </a>
        ) : (
          <a className="btn btn-secondary" href="/contact">
            Contact for details
          </a>
        )}
      </div>
    </article>
  );
}
