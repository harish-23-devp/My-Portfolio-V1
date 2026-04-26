import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:items-start md:justify-between">
        {/* Left: Logo + short intro */}
        <div className="space-y-3">
          <Link href="#hero" className="text-xl font-bold tracking-tight">
            My Portfolio
          </Link>
          <p className="max-w-sm text-sm text-gray-300">
            Frontend developer building clean and user-friendly web experiences.
          </p>
        </div>

        {/* Middle: Quick links */}
        <div>
         
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link href="#about" className="hover:text-white">About Me</Link></li>
            <li><Link href="#skills" className="hover:text-white">Skills</Link></li>
            <li><Link href="#projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact Me</Link></li>
          </ul>
        </div>

        {/* Right: Contact + resume */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="mailto:hvharish32@gmail.com" className="hover:text-white">
                hvharish32@gmail.com
              </a>
            </li>
            <li>
              <a href="/Harish_Frontend_Developer_Resume.pdf" download className="hover:text-white underline">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-gray-400 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} MyLogo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}