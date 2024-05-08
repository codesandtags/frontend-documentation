import { generateUniqueId } from "@/app/lib/utils";
import { Resource } from "@/app/model/types";

export const getResources = (): Resource[] => {
  const resources: Resource[] = [
    {
      id: generateUniqueId(),
      title: "JavaScript Info",
      description: "The Modern JavaScript Tutorial",
      url: "https://javascript.info/",
      tags: ["javascript"],
      category: "documentation",
      image: "/resources/javascript-info.png",
      isNew: false,
      createdAt: "2021-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Web.dev",
      description:
        "Get the web's modern capabilities on your own sites and apps with useful guidance and analysis from web.dev.",
      url: "https://web.dev/",
      tags: ["javascript", "css", "performance"],
      category: "documentation",
      image: "/resources/web.dev.png",
      isNew: false,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "MDN Web Docs",
      description:
        "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
      url: "https://developer.mozilla.org/en-US/",
      tags: ["javascript", "css", "html"],
      category: "documentation",
      image: "/resources/mdn-web-docs.png",
      isNew: false,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "GreatFrontend",
      description:
        "A curated list of awesome useful resources for Front-End Developers.",
      url: "https://www.greatfrontend.com/",
      tags: ["system design", "challenges", "mocks"],
      category: "interview",
      image: "/resources/greatfrontend.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
  ];

  return resources;
};
