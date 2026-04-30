import { projects } from "@/data/data";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProjectDetails({ params }: Props) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 text-black">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION */}
        <div className="relative">
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-gray-400">01</span>
          </div>

          {/* Image Card */}
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <Image
              src={project.image}
              alt={project.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-all duration-300"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="max-w-[560px]">
          {/* TITLE */}
          <h1 className="text-4xl font-extrabold mb-6">{project.title}</h1>

          {/* DESCRIPTION */}
          <div className="space-y-6 text-gray-500 leading-relaxed">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
