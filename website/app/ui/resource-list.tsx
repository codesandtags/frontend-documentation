"use client";

import { getResources } from "@/data/resources";
import { useEffect, useState } from "react";
import { Resource } from "../model/types";
import CategoryIcon from "./category-icon";
import TagIcon from "./tag-icon";

export default function ResourceList() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    setResources(getResources());
  }, []);

  return (
    <ul className="isolate rounded-lg divide-y divide-neutral-200 dark:divide-neutral-800 border border-neutral-200 dark:border-neutral-800">
      {resources &&
        resources.map((resource) => {
          return (
            <li className="group relative flex gap-x-4 px-6 py-4 focus-within:ring-brand focus-within:ring-2 focus-within:ring-inset bg-white dark:bg-neutral-800/40 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-t-lg">
              <div className="grow line-clamp-3">
                <span className="text-neutral-900 dark:text-neutral-100 text-sm font-medium flex items-center gap-x-2">
                  <a
                    className="transition-colors focus:outline-none"
                    href={resource.url}
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {resource.title}
                  </a>
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 block">
                  {resource.description}
                </span>
                <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-2 relative z-10">
                  <span className="inline-flex">
                    <button data-state="closed" className="" type="button">
                      <span className="sr-only">Category</span>
                      <div
                        aria-labelledby=""
                        className="flex items-center gap-x-1.5"
                      >
                        <CategoryIcon category={resource.category} />
                        <span className="text-xs text-green">
                          {resource.category}
                        </span>
                      </div>
                    </button>
                  </span>
                  <div className="flex items-center gap-x-1.5">
                    <span className="sr-only" id="">
                      Tags
                    </span>
                    <div
                      aria-labelledby=""
                      className="flex items-center gap-x-2"
                    >
                      {resource.tags.map((tag, index) => (
                        <TagIcon tag={tag} key={`${tag}-${index}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <i className="ri-arrow-right-line text-2xl"></i>
              </div>
            </li>
          );
        })}
    </ul>
  );
}
