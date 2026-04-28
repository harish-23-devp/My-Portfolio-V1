import Link from "next/link";
import ThemeToggle from "../Theme/ThemeToggle";
import { navItems } from "@/data/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50  border-gray-200 bg-neutral-100 backdrop-blur">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="shrink-0 text-lg font-bold tracking-tight text-black"
          aria-label="Go to hero section"
        >
          My Portfolio
        </Link>
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:text-black"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3">
          {/* <ThemeToggle /> */}
          <a
            href="/Harish_Frontend_Developer_Resume.pdf"
            download
            title="Resume"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:text-black hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
