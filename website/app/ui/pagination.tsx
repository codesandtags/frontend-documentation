export default function Paginatino() {
  return (
    <div className="flex items-center justify-between">
      <span className="text-neutral-600 dark:text-neutral-400 text-xs">
        Showing 1 to 30 out of 56 submissions
      </span>
      <nav aria-label="Pagination" className="flex gap-2">
        <button
          type="button"
          aria-current="page"
          className="inline-flex items-center justify-center h-8 px-3 py-2 gap-x-1 text-xs whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 active:bg-neutral-200 dark:active:bg-neutral-700 focus-visible:outline-brand-dark dark:focus-visible:outline-brand disabled:border-neutral-300 dark:disabled:border-neutral-700 disabled:text-neutral-300 dark:disabled:text-neutral-700 disabled:bg-transparent disabled:cursor-not-allowed"
        >
          <div>1</div>
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center h-8 px-3 py-2 gap-x-1 text-xs whitespace-nowrap font-medium border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-transparent text-neutral-600 dark:text-neutral-200 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/70 hover:text-brand-darker dark:hover:text-brand active:bg-neutral-200 dark:active:bg-neutral-700 active:text-brand-dark dark:active:text-brand-light focus-visible:outline-brand-dark dark:focus-visible:outline-brand disabled:border-transparent disabled:text-neutral-300 dark:disabled:text-neutral-700 disabled:cursor-not-allowed"
        >
          <div>2</div>
        </button>
      </nav>
    </div>
  );
}
