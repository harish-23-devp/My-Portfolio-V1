import { projects } from "@/data/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        {/* MAIN FRAME: 1280px x 642px */}
        <div className="w-full max-w-[1280px] flex flex-col gap-8 lg:h-[642px] lg:flex-row lg:gap-16">
          {/* LEFT PANEL - IMAGE: 530x642 */}
          <div className="w-full lg:w-[530px] lg:h-[642px] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] w-full h-[320px] lg:h-full">
              <Image
                src={project.image}
                alt={project.title}
                width={530}
                height={642}
                className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          </div>

          {/* RIGHT PANEL - CONTENT: 622x642 */}
          <div className="w-full lg:w-[622px] flex flex-col justify-between text-black">
            {/* CONTENT */}
            <div className="space-y-6">
              {/* TITLE */}
              <h1 className="text-3xl font-extrabold md:text-4xl">{project.title}</h1>

              {/* DESCRIPTION */}
              <div className="space-y-6 text-gray-500 leading-relaxed text-sm md:text-base">
                <p>{project.description}</p>
              </div>
            </div>

            {/* BACK BUTTON - Bottom Left */}
            <div className="pt-4 lg:pt-0">
              <Link
                href={`/#project-${id}`}
                className="inline-flex items-center justify-center gap-2 w-[124px] h-[56px] bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-colors"
              >
                <ChevronLeft size={20} />
                <span>Back</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-black text-white">
        <div className="border-t border-white/15">
          <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-center text-gray-400 sm:px-6 lg:px-8">
            © {new Date().getFullYear()} MyPortfolio.
          </div>
        </div>
      </footer>
    </div>
  );
}
