import css from "styled-jsx/css";
import { types } from "util";

const TAG_CLASSES: { [key: string]: string } = {
  javascript: "bg-yellow-500 text-black dark:text-yellow-500",
  css: "bg-blue-500 text-white dark:text-blue-500",
  performance: "bg-purple-500 text-white dark:text-purple-500",
  html: "bg-red-500 text-white dark:text-red-500",
  react: "bg-blue-300 text-black dark:text-blue-300",
  typescript: "bg-blue-700 text-white dark:text-blue-700",
};

const TAGS: { [key: string]: string } = {
  html: "HTML",
  css: "CSS",
  javascript: "JS",
  react: "React",
  typescript: "TS",
};

export default function TagIcon({ tag }: { tag: string }) {
  const tagClass = TAG_CLASSES[tag] || "";

  return (
    <span
      className={`text-xs font-semibold inline-flex items-center rounded px-2 py-0.5 dark:bg-neutral-800 ${tagClass}`}
    >
      {TAGS[tag] || tag}
    </span>
  );
}
