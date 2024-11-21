export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: Category;
  tags: string[];
  likes: number;
  dateAdded: string;
  iconName: string;
}

export type Category =
  | "Framework"
  | "UI Library"
  | "Tool"
  | "Learning"
  | "Performance"
  | "Testing"
  | "State Management"
  | "CSS"
  | "TypeScript";
