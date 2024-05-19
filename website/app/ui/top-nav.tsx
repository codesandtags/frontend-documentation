"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "All documentation",
    href: "/",
    icon: <i className="ri-home-heart-line"></i>,
  },
  // TODO: Add more nav items here
  //   {
  //     title: "Roadmap",
  //     href: "/roadmap",
  //     icon: <i className="ri-road-map-line"></i>,
  //   },
  //   {
  //     title: "Newsletters",
  //     href: "/newsletters",
  //     icon: <i className="ri-news-line"></i>,
  //   },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <div className="isolate w-full overflow-x-auto overflow-y-hidden">
      <div className="flex items-center border-b border-neutral-300 dark:border-neutral-700">
        <nav aria-label="Select project category" className="flex grow gap-x-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={[
                  "py-1.5 px-3 transition-colors flex items-center whitespace-nowrap -mb-px z-10 rounded-t border",
                  ,
                  isActive
                    ? "border-t-neutral-300 border-x-neutral-300 border-b-white dark:border-t-neutral-700 dark:border-x-neutral-700 dark:border-b-neutral-900"
                    : "bg-neutral-100 hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-800/40 border border-t-transparent border-x-transparent border-b-neutral-300 dark:border-b-neutral-700",
                ].join(" ")}
              >
                <span
                  className={[
                    "text-sm flex items-center transition-all gap-x-1.5",
                    isActive
                      ? "text-brand-dark dark:text-neutral-200 font-medium"
                      : "font-normal",
                  ].join(" ")}
                >
                  {item.icon}
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
