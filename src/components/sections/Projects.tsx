"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/data/data";
import type { ProjectItem } from "@/data/data";
import { MoveLeft, MoveRight } from "lucide-react";

const PAGE_SIZE = 3;

export default function Projects() {
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const chunked: ProjectItem[][] = [];
    for (let i = 0; i < projects.length; i += PAGE_SIZE) {
      chunked.push(projects.slice(i, i + PAGE_SIZE));
    }
    return chunked;
  }, []);

  const hasCarousel = pages.length > 1;

  const next = () => setPage((prev) => (prev + 1) % pages.length);
  const prev = () => setPage((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <section id="projects" className="bg-black px-4 py-20 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="mx-auto max-w-[1216px]">
        <h2 className="mb-10 text-center text-4xl text-white">
          <span>My </span>
          <span className="font-bold">Projects</span>
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {pages.map((group, groupIndex) => (
              <div key={groupIndex} className="w-full shrink-0 space-y-[20px]">
                {group.map((project, index) => {
                  // Pattern resets per visible group:
                  // 1st: image left, 2nd: image right, 3rd: image left
                  const imageLeft = index % 2 === 0;

                  return (
                    <article
                      key={project.id}
                      className="mx-auto grid min-h-[516px] w-full max-w-[1216px] grid-cols-1 items-center gap-[20px] rounded-xl  p-4 md:grid-cols-2 md:p-5"
                    >
                      {/* Image side */}
                      <div className={imageLeft ? "order-1" : "order-1 md:order-2"}>
                        <div className="mx-auto h-auto w-full max-w-[594px] overflow-hidden rounded-lg md:h-[476px]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={530}
                            height={398}
                            className="mx-auto h-auto w-full max-w-[530px] object-cover transition-transform rounded-2xl duration-500 hover:scale-[1.02]"
                          />
                        </div>
                      </div>

                      {/* Content side */}
                      <div
                        className={`${imageLeft ? "order-2" : "order-2 md:order-1"} mx-auto flex h-auto w-full max-w-[582px] flex-col justify-center gap-[20px] md:min-h-[296px]`}
                      >
                        <p className="text-[48px] font-extrabold leading-none text-white">
                          {project.id}
                        </p>

                        <h3 className="text-[32px] font-bold leading-tight text-white">
                          {project.title}
                        </h3>

                        <p className="text-[16px] font-normal leading-7 text-zinc-300">
                          {project.description}
                        </p>

                        {/* {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit rounded-md border border-white px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
                          >
                           <Image src="/external-link-svgrepo-com white.svg" alt="View Project" width={20} height={20} />
                          </a>
                        ) : null} */}
                      </div>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {hasCarousel && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous projects"
              className="rounded-md border border-white px-4 py-2 text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <MoveLeft />
            </button>
            <span className="text-sm text-zinc-300">
              {page + 1} / {pages.length}
            </span>
            <button
              onClick={next}
              aria-label="Next projects"
              className="rounded-md border border-white px-4 py-2 text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <MoveRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}