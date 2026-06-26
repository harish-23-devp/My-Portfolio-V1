import Image from "next/image";
import CountUp from "../ui/CountUp";
import { stats } from "../../data/data";

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
              I began my journey as a software engineer turning simple design
              ideas into real, interactive products. Over the years, working with
              React and Next.js, I’ve learned how to build fast, scalable,
              and intuitive web applications that solve real user problems.
            </p>
            <p>
              Collaborating with backend teams and handling API integrations
              gave me a deeper understanding of software architecture and
              delivery workflows. What motivates me is the craft of software
              engineering — clean code, reliable systems, and attention to detail
              in every build.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-black">
            {stats.map((item, index) => (
              <div
                key={index}
                className="min-h-[159px] border-2 border-black rounded-md flex flex-col items-center justify-center text-center p-4"
              >
                <div className="text-3xl font-bold">
                  <CountUp end={item.value} />
                  {item.suffix}
                </div>
                <div className="mt-4 font-bold text-sm text-zinc-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}