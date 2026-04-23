import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-20 scroll-mt-16">
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
              Frontend developer specializing in responsive web applications built with React, Next.js, and JavaScript. Focus on converting designs into clean, reusable code and creating user interfaces that are fast, scalable, and intuitive.</p>
            <p>
              Familiar with backend concepts and API integration, enabling smooth collaboration with backend teams and contributions beyond just the UI layer. Strong understanding of design structure ensures accurate UI conversion and developer-friendly interfaces.</p>
            <p>
              Currently seeking opportunities to build impactful products with modern frontend stacks and strong engineering teams.</p>
          </div>
        </div>
      </div>
    </section>
  );
}