import Image from "next/image";

export default function ResourceList() {
  return (
    <ul className="isolate rounded-lg divide-y divide-neutral-200 dark:divide-neutral-800 border border-neutral-200 dark:border-neutral-800">
      <li className="group relative flex gap-x-4 px-6 py-4 focus-within:ring-brand focus-within:ring-2 focus-within:ring-inset bg-white dark:bg-neutral-800/40 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-t-lg">
        <>
          {/* <Image alt="logo" width={80} height={80} src="/img/js-logo.webp" /> */}
        </>
        <div className="grow">
          <span className="text-neutral-900 dark:text-neutral-100 text-sm font-medium flex items-center gap-x-2">
            <a
              className="transition-colors focus:outline-none"
              href="/questions/javascript/selection-sort"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Selection Sort
            </a>
          </span>
          <span className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 block">
            Implement a function that performs a selection sort
          </span>
          <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-2 relative z-10">
            <span className="inline-flex">
              <button data-state="closed" className="" type="button">
                <span className="sr-only" id=":r2us:">
                  Difficulty
                </span>
                <div
                  aria-labelledby=":r2us:"
                  className="flex items-center gap-x-1.5"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5 shrink-0 text-neutral-400 dark:text-neutral-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z" />
                  </svg>
                  <span className="text-xs text-green">Easy</span>
                </div>
              </button>
            </span>
            <div className="flex items-center gap-x-1.5">
              <span className="sr-only" id=":r2uu:">
                Languages
              </span>
              <div
                aria-labelledby=":r2uu:"
                className="flex items-center gap-x-2"
              >
                <span className="text-xs font-semibold inline-flex items-center rounded px-2 py-0.5 bg-yellow-500 text-black dark:bg-neutral-800 dark:text-yellow-500">
                  JS
                </span>
                <span className="text-xs font-semibold inline-flex items-center rounded px-2 py-0.5 bg-[#3178c6] text-white dark:bg-neutral-800 dark:text-[#3178c6]">
                  TS
                </span>
              </div>
            </div>
            <button data-state="closed" className="" type="button">
              <span className="sr-only" id=":r2uv:">
                Users liked
              </span>
              <div
                aria-labelledby=":r2uv:"
                className="flex items-center gap-x-1.5"
              >
                <i className="ri-heart-fill"></i>
                <span className="text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
                  413
                </span>
              </div>
            </button>
            <button data-state="closed" className="" type="button">
              <span className="sr-only" id=":r2uv:">
                Users liked
              </span>
              <div
                aria-labelledby=":r2uv:"
                className="flex items-center gap-x-1.5"
              >
                <i className="ri-eye-fill"></i>
                <span className="text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
                  2,312
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-6 shrink-0 text-neutral-400 dark:text-neutral-600 group-hover:text-brand-dark dark:group-hover:text-brand"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </div>
      </li>
      <li className="group relative flex gap-x-4 px-6 py-4 focus-within:ring-brand focus-within:ring-2 focus-within:ring-inset bg-white dark:bg-neutral-800/40 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900">
        <>{/* <Image alt="logo" width={80} height={80} src="/logo.png" /> */}</>
        <div className="grow">
          <span className="text-neutral-900 dark:text-neutral-100 text-sm font-medium flex items-center gap-x-2">
            <a
              className="transition-colors focus:outline-none"
              href="/questions/javascript/stack"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Stack
            </a>
          </span>
          <span className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 block">
            Implement a stack data structure containing the common stack methods
          </span>
          <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-2 relative z-10">
            <span className="inline-flex">
              <button data-state="closed" className="" type="button">
                <span className="sr-only" id=":r2v2:">
                  Difficulty
                </span>
                <div
                  aria-labelledby=":r2v2:"
                  className="flex items-center gap-x-1.5"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5 shrink-0 text-neutral-400 dark:text-neutral-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z" />
                  </svg>
                  <span className="text-xs text-green">Easy</span>
                </div>
              </button>
            </span>
            <div className="flex items-center gap-x-1.5">
              <span className="sr-only" id=":r2v4:">
                Languages
              </span>
              <div
                aria-labelledby=":r2v4:"
                className="flex items-center gap-x-2"
              >
                <span className="text-xs font-semibold inline-flex items-center rounded px-2 py-0.5 bg-yellow-500 text-black dark:bg-neutral-800 dark:text-yellow-500">
                  JS
                </span>
                <span className="text-xs font-semibold inline-flex items-center rounded px-2 py-0.5 bg-[#3178c6] text-white dark:bg-neutral-800 dark:text-[#3178c6]">
                  TS
                </span>
              </div>
            </div>
            <button data-state="closed" className="" type="button">
              <span className="sr-only" id=":r2v5:">
                Users completed
              </span>
              <div
                aria-labelledby=":r2v5:"
                className="flex items-center gap-x-1.5"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-5 shrink-0 text-neutral-400 dark:text-neutral-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" />
                </svg>
                <span className="text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
                  5037 completed
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-6 shrink-0 text-neutral-400 dark:text-neutral-600 group-hover:text-brand-dark dark:group-hover:text-brand"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </div>
      </li>
      <li className="group relative flex gap-x-4 px-6 py-4 focus-within:ring-brand focus-within:ring-2 focus-within:ring-inset bg-white dark:bg-neutral-800/40 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900">
        <>{/* <Image alt="logo" width={80} height={80} src="/logo.png" /> */}</>
        <div className="grow">
          <span className="text-neutral-900 dark:text-neutral-100 text-sm font-medium flex items-center gap-x-2">
            <a
              className="transition-colors focus:outline-none"
              href="/questions/javascript/insertion-sort"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Insertion Sort
            </a>
          </span>
          <span className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 block">
            Implement a function that performs an insertion sort
          </span>
          <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-2 relative z-10">
            <span className="inline-flex">
              <button data-state="closed" className="" type="button">
                <span className="sr-only" id=":r2v8:">
                  Difficulty
                </span>
                <div
                  aria-labelledby=":r2v8:"
                  className="flex items-center gap-x-1.5"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5 shrink-0 text-neutral-400 dark:text-neutral-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z" />
                  </svg>
                  <span className="text-xs text-green">Easy</span>
                </div>
              </button>
            </span>
            <div className="flex items-center gap-x-1.5">
              <span className="sr-only" id=":r2va:">
                Languages
              </span>
              <div
                aria-labelledby=":r2va:"
                className="flex items-center gap-x-2"
              >
                <span className="text-xs font-semibold inline-flex items-center rounded px-2 py-0.5 bg-yellow-500 text-black dark:bg-neutral-800 dark:text-yellow-500">
                  JS
                </span>
                <span className="text-xs font-semibold inline-flex items-center rounded px-2 py-0.5 bg-[#3178c6] text-white dark:bg-neutral-800 dark:text-[#3178c6]">
                  TS
                </span>
              </div>
            </div>
            <button data-state="closed" className="" type="button">
              <span className="sr-only" id=":r2vb:">
                Users completed
              </span>
              <div
                aria-labelledby=":r2vb:"
                className="flex items-center gap-x-1.5"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-5 shrink-0 text-neutral-400 dark:text-neutral-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" />
                </svg>
                <span className="text-xs whitespace-nowrap text-neutral-700 dark:text-neutral-500">
                  2221 completed
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-6 shrink-0 text-neutral-400 dark:text-neutral-600 group-hover:text-brand-dark dark:group-hover:text-brand"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </div>
      </li>
    </ul>
  );
}
