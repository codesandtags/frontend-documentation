import { generateUniqueId } from "@/app/lib/utils";
import { Resource } from "@/app/model/types";

const ITEMS_PER_PAGE = 5;
type Props = {
  page: number;
  limit: number;
  query?: string;
};

/* Get resources paginated with the information of the total pages, current page, and if there are more pages */
export const getResourcesPaginated = ({
  page,
  limit,
  query,
}: Props): {
  resources: Resource[];
  totalPages: number;
  totalResults: number;
  currentPage: number;
  hasMore: boolean;
} => {
  const resources = getResources();
  const filteredResources = applyFilters(resources, query || "");

  const totalPages = Math.ceil(filteredResources.length / limit);
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const offset = (currentPage - 1) * limit;
  const hasMore = currentPage < totalPages;

  return {
    resources: filteredResources.slice(offset, offset + limit),
    totalPages,
    totalResults: resources.length,
    currentPage,
    hasMore,
  };
};

export const applyFilters = (
  resources: Resource[],
  query: string
): Resource[] => {
  if (query === "") return resources;

  return resources.filter((resource) => {
    return (
      resource.title.toLowerCase().includes(query.toLowerCase()) ||
      resource.description.toLowerCase().includes(query.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(query.toLowerCase())
      )
    );
  });
};

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
      highlight: true,
    },
    {
      id: generateUniqueId(),
      title: "ChromeVox Extension",
      description: "ChromeVox Extension",
      url: "http://www.chromevox.com/",
      tags: ["accessibility"],
      category: "Accessibility - A11Y",
      image: "/resources/chromevox-extension.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Web Content Accessibility Guidelines 2.0",
      description: "Web Content Accessibility Guidelines 2.0",
      url: "https://www.w3.org/TR/WCAG20/",
      tags: ["accessibility"],
      category: "Accessibility - A11Y",
      image: "/resources/wcag-20.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Web Accessibility in mind",
      description: "Web Accessibility in mind",
      url: "http://webaim.org/standards/wcag/checklist",
      tags: ["accessibility"],
      category: "Accessibility - A11Y",
      image: "/resources/webaim.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "WAVE: Web Accessibility Evaluation Tool",
      description: "Great tool which tell you how accessible is your webpage",
      url: "http://wave.webaim.org/",
      tags: ["accessibility"],
      category: "Accessibility - A11Y",
      image: "/resources/wave.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "WAI-ARIA Practices",
      description: "WAI - ARIA Patterns",
      url: "https://www.w3.org/TR/wai-aria-practices/",
      tags: ["accessibility"],
      category: "Accessibility - A11Y",
      image: "/resources/wai-aria-practices.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Accessibility Article by Adrian Roselli",
      description: "Accessibility article",
      url: "http://adrianroselli.com/2016/03/be-wary-of-accessibility-guarantees-from-vendors.html",
      tags: ["accessibility"],
      category: "Accessibility - A11Y",
      image: "/resources/accessibility-article.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Made with Angular",
      description: "Projects made using Angular",
      url: "https://www.madewithangular.com/#/",
      tags: ["angular"],
      category: "Angular in general & Angular 5+",
      image: "/resources/made-with-angular.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Angular Universal",
      description: "Server-side Rendering with Angular",
      url: "https://universal.angular.io/",
      tags: ["angular", "server-side-rendering"],
      category: "Angular in general & Angular 5+",
      image: "/resources/angular-universal.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Animation with SVG",
      description: "Guide to SVG Animations with SMIL",
      url: "https://css-tricks.com/smil-is-dead-long-live-smil-a-guide-to-alternatives-to-smil-features/",
      tags: ["animation", "svg", "css"],
      category: "Animation on HTML + CSS + SVG",
      image: "/resources/animation-with-svg.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Free 404 illustrations",
      description: "A list of free 404 illustrations for your website",
      url: "https://www.kapwing.com/404-illustrations",
      tags: ["images", "error-handling"],
      category: "Animation on HTML + CSS + SVG",
      image: "/resources/free-404-illustrations.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "An open-source software library for Machine Intelligence",
      description: "An open-source software library for Machine Intelligence",
      url: "https://www.tensorflow.org/",
      tags: ["AI", "Machine Learning"],
      category: "Artificial Intelligence / AGI",
      image: "/resources/tensorflow.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Artificial Intelligence Experiments with Google",
      description: "Artificial Intelligence Experiments with Google",
      url: "https://aiexperiments.withgoogle.com/",
      tags: ["AI", "Google"],
      category: "Artificial Intelligence / AGI",
      image: "/resources/ai-experiments-google.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Micro Front Ends",
      description: "Micro Front Ends",
      url: "https://micro-frontends.org/",
      tags: ["javascript", "micro-frontends"],
      category: "Awesome and mad projects on JavaScript / CSS 😱",
      image: "/resources/micro-front-ends.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Picture with CSS and multiple layers",
      description: "Picture with CSS and multiple layers",
      url: "http://diana-adrianne.com/purecss-francine/",
      tags: ["projects", "css"],
      category: "Awesome and mad projects on JavaScript / CSS 😱",
      image: "/resources/purecss-francine.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Mario Kart only with CSS",
      description: "Mario Kart only with CSS",
      url: "https://codeburst.io/mario-kart-css-7572bd2ce608",
      tags: ["projects", "css"],
      category: "Awesome and mad projects on JavaScript / CSS 😱",
      image: "/resources/mario-kart-css.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Resilient Web Design",
      description: "Resilient Web Design",
      url: "https://resilientwebdesign.com/",
      tags: ["books", "web-design"],
      category: "Books",
      image: "/resources/resilient-web-design.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Next-generation ES6 module bundler",
      description: "Next-generation ES6 module bundler",
      url: "https://rollupjs.org/",
      tags: ["bundlers", "javascript"],
      category: "Bundlers (Webpack)",
      image: "/resources/rollupjs.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
    {
      id: generateUniqueId(),
      title: "Angular bundler analyzer",
      description:
        "How To Analyze Angular App Bundle Sizes with webpack Bundle Analyzer or source-map-explorer",
      url: "https://alligator.io/angular/bundle-size/",
      tags: ["webpack", "bundlers"],
      category: "Bundlers (Webpack)",
      image: "/resources/angular-bundler-analyzer.png",
      isNew: true,
      createdAt: "2024-06-01",
    },
  ];

  // Sort by highlight and createdAt
  resources.sort((a, b) => {
    if (a.highlight && !b.highlight) {
      return -1;
    }

    if (!a.highlight && b.highlight) {
      return 1;
    }

    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return resources;
};
