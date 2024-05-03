import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-neutral-400 flex w-full max-w-5xl items-center text-sm">
      <a
        href="https://github.com/codesandtags/frontend-documentation"
        className="flex items-center gap-2"
        target="_blank"
      >
        By
        <Image
          src="/logo.png"
          alt="codesandtags"
          width={40}
          height={40}
          priority
        />{" "}
        codesandtags
      </a>
    </footer>
  );
}
