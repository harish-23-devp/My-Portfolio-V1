"use client";

import Image from "next/image";

const fieldClass =
  "w-full max-w-[500px] h-14 border rounded-md border-black text-black px-3 transition-colors hover:bg-neutral-100 outline-none placeholder:text-[#71717A]";

const textareaClass =
  "w-full max-w-[500px] h-[140px] border rounded-md border-black text-black px-3 py-3 transition-colors hover:bg-neutral-100 resize-none outline-none placeholder:text-[#71717A]";
interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harish-h-v-43b50326b",
    icon: "/linkedin.svg",
  },
  {
    name: "Github",
    url: "https://github.com/harish-23-devp",
    icon: "/github-svgrepo-com.svg",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-neutral-200 bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start md:gap-16">
        {/* Left: form */}
        <div className="flex flex-col gap-5">
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              aria-label="Your name"
              className={fieldClass}
            />
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              aria-label="Email"
              className={fieldClass}
            />
            <textarea
              name="message"
              placeholder="How can i help ?"
              aria-label="Message"
              className={textareaClass}
            />

            <div className="flex max-w-[500px] flex-wrap items-center gap-4">
              <button
                type="submit"
                className="bg-black px-6 py-3 font-bold rounded-md text-white transition hover:bg-neutral-800"
              >
                Let&apos;s talk
              </button>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    // data-tooltip-id="social-tooltip"
                    // data-tooltip-content={item.name}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-black p-2 transition-all duration-300 hover:bg-black"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="transition duration-300 group-hover:invert"
                    />
                  </a>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Right panel — replace with your content */}
        <div className="w-full max-w-[608px] min-h-[312px] self-center justify-self-start">
  <div className="flex h-full flex-col justify-center text-left text-black">
  <h2 className="text-5xl font-bold leading-tight">
  Let&apos;s{" "}
  <span className="text-transparent [-webkit-text-stroke:2px_#000]">
    talk
  </span>{" "}
  for
  <br />
  Something special
</h2>

    <p className="mt-5 max-w-[560px] text-base text-neutral-600">
      I seek to push the limits of creativity to create high-engaging,
      user-friendly, and memorable interactive experiences.
    </p>

    <div className="mt-10 space-y-1 text-xl font-semibold">
      <p>hvharish32@gmail.com</p>
      <p>+919500684419</p>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}