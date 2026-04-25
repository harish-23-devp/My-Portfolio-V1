"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "Javascript", icon: "/skills_icons/icon-javscript.svg" }, // first one as requested
  { name: "TypeScript", icon: "/skills_icons/icon-typescript.svg" },
  { name: "React", icon: "/skills_icons/icon-react.svg" },
  { name: "Next.js", icon: "/skills_icons/icon-nextjs.svg" },
  { name: "Tailwind", icon: "/skills_icons/icon-tailwindcss.svg" },
  { name: "Node.js", icon: "/skills_icons/icon-nodejs.svg" },
  { name: "API Integration", icon: "/skills_icons/icon-api-integration.svg" },
  { name: "Postman", icon: "/skills_icons/icon-postman.svg" },
  { name: "Git", icon: "/skills_icons/icon-git.svg" },
  { name: "Figma", icon: "/skills_icons/icon-figma.svg" },
  { name: "SQL", icon: "/skills_icons/icon-sql.svg" },
  { name: "Laravel", icon: "/skills_icons/icon-laravel.svg" },
  { name: "HTML", icon: "/skills_icons/icon-html.svg" },
  { name: "CSS", icon: "/skills_icons/icon-css.svg" },
];

const PAGE_SIZE = 10; // 2 rows x 5 columns

export default function Skills() {
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const result: Skill[][] = [];
    for (let i = 0; i < skills.length; i += PAGE_SIZE) {
      result.push(skills.slice(i, i + PAGE_SIZE));
    }
    return result;
  }, []);

  const next = () => setPage((prev) => (prev + 1) % pages.length);
  const prev = () => setPage((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 scroll-mt-16">
      <h2 className="mb-12 text-center text-4xl text-black"><span>My</span>{" "}
      <span className="font-bold">Skills</span></h2>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((group, groupIndex) => (
            <div key={groupIndex} className="w-full shrink-0">
              <div className="mx-auto grid max-w-[1030px] gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">{" "}
                {group.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="group flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-black bg-white transition-colors duration-300 hover:bg-black"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={56}
                      height={56}
                      className="h-[56px] w-[56px] object-contain transition duration-300 group-hover:invert"
                    />
                    <p className="text-sm sm:text-base font-medium text-black transition duration-300 group-hover:text-white">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {pages.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-md border border-black px-4 py-2 text-sm text-[#71717a] font-medium hover:bg-black hover:text-white"
            >
              Prev
            </button>
            <span className="text-sm text-zinc-600">
              {page + 1} / {pages.length}
            </span>
            <button
              onClick={next}
              className="rounded-md border border-black px-4 py-2 text-sm text-[#71717a] font-medium hover:bg-black hover:text-white"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}