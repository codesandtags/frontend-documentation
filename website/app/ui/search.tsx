export default function Search() {
  return (
    <div className="flex flex-row flex-wrap gap-3 md:flex-col lg:flex-row">
      <div className="w-full flex-1 lg:w-auto">
        <div>
          <div className="">
            <div>
              <label className="sr-only" htmlFor="searchTerm">
                <span className="text-neutral-900 dark:text-neutral-100 text-sm font-medium">
                  Search
                </span>
              </label>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="ri-search-line"></i>
            </div>
            <input
              className="block w-full bg-white dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 disabled:text-neutral-300 dark:disabled:text-neutral-700 disabled:cursor-not-allowed rounded border-0 focus:outline-none focus:outline-transparent ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm py-2 px-3 pl-9 h-9 text-neutral-700 dark:text-neutral-300 ring-neutral-300 dark:ring-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:ring-brand-dark dark:focus:ring-brand"
              id="searchTerm"
              type="text"
              placeholder="Search by keyword / category"
              defaultValue=""
            />
          </div>
        </div>
      </div>
      <div className="hidden flex-wrap gap-3 md:flex">
        <button
          type="button"
          aria-controls=""
          className="inline-flex items-center justify-center h-9 px-4 py-2 gap-x-1 text-sm whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 active:bg-neutral-200 dark:active:bg-neutral-700 focus-visible:outline-brand-dark dark:focus-visible:outline-brand"
          aria-haspopup="dialog"
          aria-expanded="false"
          data-state="closed"
        >
          <div>Category</div>
          <i className="ri-arrow-down-s-line"></i>
        </button>

        <button
          type="button"
          aria-controls=""
          aria-label="All filters"
          className="inline-flex items-center justify-center h-9 w-9 p-2.5 gap-x-1 text-sm whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 active:bg-neutral-200 dark:active:bg-neutral-700 focus-visible:outline-brand-dark dark:focus-visible:outline-brand"
          aria-haspopup="dialog"
          aria-expanded="false"
          data-state="closed"
        >
          <i className="ri-filter-line"></i>
        </button>
        <button
          type="button"
          aria-label="Sort by"
          className="inline-flex items-center justify-center h-9 w-9 p-2.5 gap-x-1 text-sm whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 active:bg-neutral-200 dark:active:bg-neutral-700 focus-visible:outline-brand-dark dark:focus-visible:outline-brand disabled:border-neutral-300 dark:disabled:border-neutral-700 disabled:text-neutral-300 dark:disabled:text-neutral-700 disabled:bg-transparent disabled:cursor-not-allowed"
          id=":"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <i className="ri-sort-desc"></i>
        </button>
      </div>
      <div className="flex gap-3 md:hidden">
        <button
          type="button"
          aria-controls=""
          aria-label="All filters"
          className="inline-flex items-center justify-center h-9 w-9 p-2.5 gap-x-1 text-sm whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 active:bg-neutral-200 dark:active:bg-neutral-700 focus-visible:outline-brand-dark dark:focus-visible:outline-brand"
          aria-haspopup="dialog"
          aria-expanded="false"
          data-state="closed"
        >
          <i className="ri-filter-line"></i>
        </button>
        <button
          type="button"
          aria-label="Sort by"
          className="inline-flex items-center justify-center h-9 w-9 p-2.5 gap-x-1 text-sm whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 active:bg-neutral-200 dark:active:bg-neutral-700 focus-visible:outline-brand-dark dark:focus-visible:outline-brand disabled:border-neutral-300 dark:disabled:border-neutral-700 disabled:text-neutral-300 dark:disabled:text-neutral-700 disabled:bg-transparent disabled:cursor-not-allowed"
          id=":"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <i className="ri-sort-desc"></i>
        </button>
      </div>
    </div>
  );
}
