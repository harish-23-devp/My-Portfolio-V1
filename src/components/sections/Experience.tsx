import Image from "next/image";
import { experiences } from "@/data/data";


  export default function Experience() {
    return (
      <section id="experience" className="w-full bg-black py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4">
          <h2 className="mb-12 text-center text-4xl text-white">
          <span>My</span>{" "}
          <span className="font-bold">Experience</span>
          </h2>
          <div className="mx-auto flex w-full max-w-[1168px] flex-col gap-6">
            {experiences.map((item) => (
              <article
                key={item.id}
                className="flex w-full flex-col justify-start rounded-md border border-zinc-500 px-6 py-[30px]"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">                
                <div className="flex items-start gap-4">
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    />
                    <h3 className="text-lg sm:text-2xl font-semibold text-white break-words">
                      {item.company}
                    </h3>
                </div>
                <p className="text-sm sm:text-base text-zinc-300 whitespace-nowrap sm:whitespace-normal">{item.duration}</p>
                </div>
                <p className="mt-4 sm:mt-7 text-sm sm:text-base leading-6 sm:leading-7 text-zinc-300">
                  {item.roleDescription}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }