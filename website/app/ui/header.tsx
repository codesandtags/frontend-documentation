import Image from "next/image";

export default function Header() {
  return (
    <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="text-lg fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <i className="ri-book-3-line pr-2"></i> Frontend Documentation
      </p>
    </header>
  );
}
