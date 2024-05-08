const CATEGORIES: { [key: string]: string } = {
  book: "ri-book-open-line",
  video: "ri-video-line",
  article: "ri-newspaper-line",
  podcast: "ri-mic-line",
  course: "ri-video-line",
  tool: "ri-tools-line",
  event: "ri-calendar-event-line",
  interview: "ri-briefcase-line",
  project: "ri-clipboard-line",
  community: "ri-group-line",
  person: "ri-user-line",
};

export default function CategoryIcon({ category }: { category: string }) {
  const categoryClass: string = CATEGORIES[category] || "ri-book-open-line";

  return <i className={categoryClass}></i>;
}
