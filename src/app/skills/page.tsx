import type { Metadata } from "next";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { skills } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical capabilities and delivery practices from Saqib Soft.",
};

const groups = [
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
  { title: "AI Automation", items: skills.automation },
  { title: "Delivery", items: skills.delivery },
];

export default function SkillsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="section-kicker reveal">Capabilities</p>
        <AnimatedHeading as="h1" className="page-title" text="Skills used on real projects" />
        <p className="lede reveal" style={{ transitionDelay: "0.1s" }}>
          A practical stack — chosen for shipping reliable interfaces, APIs, and AI-assisted
          workflows.
        </p>

        <div className={styles.grid}>
          {groups.map((group, index) => (
            <div
              key={group.title}
              className={`${styles.group} reveal`}
              style={{ transitionDelay: `${0.08 * (index + 1)}s` }}
            >
              <h2>{group.title}</h2>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={`${styles.note} reveal`}>
          Tools are only as useful as the judgment behind them. I pick what fits the product —
          not what looks trendy on a résumé.
        </p>
      </div>
    </section>
  );
}
