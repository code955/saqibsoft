import type { ElementType } from "react";
import styles from "./AnimatedHeading.module.css";

type Part = {
  text: string;
  className?: string;
};

type AnimatedHeadingProps = {
  text?: string;
  parts?: Part[];
  as?: ElementType;
  className?: string;
  delayStep?: number;
  startDelay?: number;
};

export function AnimatedHeading({
  text,
  parts,
  as: Tag = "h2",
  className,
  delayStep = 0.05,
  startDelay = 0,
}: AnimatedHeadingProps) {
  const words: Part[] = parts ?? (text ?? "").split(" ").map((word) => ({ text: word }));

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <span key={`${word.text}-${index}`} className={`${styles.word} split-word`}>
          <span
            className={`${styles.inner} ${word.className ?? ""}`}
            style={{ transitionDelay: `${startDelay + index * delayStep}s` }}
          >
            {word.text}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
