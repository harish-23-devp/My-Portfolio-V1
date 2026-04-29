import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-20 scroll-mt-16">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left panel */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/Group 1000015845.svg"
            alt="About illustration"
            width={520}
            height={520}
            className="h-auto w-full max-w-[520px]"
          />
        </div>

        {/* Right panel */}
        <div>
          <h2 className="mb-8 text-4xl font-normal text-black"><span>About</span>{" "}
            <span className="font-bold">Me</span></h2>

          <div className="space-y-5 text-base leading-7 text-zinc-600">
            <p>
              I began my journey turning simple design ideas into real,
              interactive interfaces. Over the years, working with React and
              Next.js, I’ve learned how to build fast, scalable, and intuitive
              UIs that feel effortless to use.
            </p>
            <p>
              Collaborating with backend teams and handling API integrations
              gave me a deeper understanding of full-stack workflows. What
              motivates me is the craft — clean components, smooth interactions,
              and attention to detail in every build.
            </p>
            <p>
              I’m now looking for opportunities to create meaningful digital
              experiences with modern frontend technologies and strong
              engineering teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}