import Image from "next/image";

type ExperienceItem = {
    id: number;
    company: string;
    logo: string;
    duration: string;
    roleDescription: string;
  };
  
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "OrisysIndia Consultancy Services Pvt. Ltd.",
      logo: "/orisyslogo.svg",
      duration: "Jun 2023 - Present",
      roleDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

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
                className="flex h-[192px] w-full flex-col justify-start rounded-md border border-zinc-500 px-6 py-[30px]"
              >
                <div className="flex items-start justify-between">
                
                <div className="flex items-start gap-4">
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                  <h3 className="text-2xl font-semibold text-white">
                    {item.company}
                  </h3>
                </div>
                <p className="text-base text-zinc-300">{item.duration}</p>
                </div>
                <p className="mt-7 text-base leading-7 text-zinc-300">
                  {item.roleDescription}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }