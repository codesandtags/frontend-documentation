export default function Header() {
  const background = `bg-gradient-to-r from-violet-600 to-indigo-600 dark:text-white`;

  return (
    <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <h1
        className={`${background} dark:border-neutral-800 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 py-4 backdrop-blur-2xl text-lg fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 `}
      >
        <i className="ri-book-3-line pr-2"></i> Frontend Documentation
      </h1>
    </header>
  );
}
