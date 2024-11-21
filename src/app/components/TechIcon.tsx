import { Code, Book, Gauge, Accessibility } from "lucide-react";
import Image from "next/image";

interface TechIconProps {
  name: string;
  className?: string;
}

const defaultIcons = {
  code: <Code className="code" />,
  book: <Book className="book" />,
  accessibility: <Accessibility className="accessibility" />,
  performance: <Gauge className="gauge" />,
};

export function TechIcon({ name, className = "h-6 w-6" }: TechIconProps) {
  // Convert name to simple-icons format (lowercase, remove spaces)
  const iconName = name.toLowerCase().replace(/\s+/g, "");

  if (defaultIcons[name as keyof typeof defaultIcons]) {
    return defaultIcons[name as keyof typeof defaultIcons];
  }

  return (
    <Image
      src={`https://cdn.simpleicons.org/${iconName}`}
      alt={`${name} icon`}
      className={className}
      width={24}
      height={24}
    />
  );
}
