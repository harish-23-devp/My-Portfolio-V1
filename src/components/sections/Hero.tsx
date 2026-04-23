"use client";

import Image from "next/image";
// import { Tooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";

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
const Hero = () => {
    return (
        <>
            <section
                id="hero"
                className="mx-auto flex w-full max-w-6xl items-center px-4 pt-28 sm:px-6 lg:px-8 "
            >
                <div className="grid w-full items-center gap-10 md:grid-cols-2">
                    {/* Left Content */}
                    <div className="space-y-2">
                        <h1 className="text-5xl leading-tight sm:text-5xl">
                            <span className="font-normal text-black">Hello I&apos;am </span>
                            <span className="font-extrabold text-black">Harish H V</span>
                        </h1>
                        <h2 className="text-5xl leading-tight sm:text-5xl">
                            <span className="font-extrabold text-black">Frontend </span>
                            <span className="font-extrabold text-transparent [-webkit-text-stroke:1.5px_black]">
                                Developer
                            </span>
                        </h2>
                        <p className="pt-4 text-[16px] font-normal leading-7 text-[#71717a]">
                            2+ years crafting responsive UIs with React, Next.js,
                            TypeScript & Tailwind. Skilled in Figma-to-code conversion and performance optimization.
                        </p>
                        <div className="flex items-center gap-3 pt-20">
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
                        {/* <Tooltip
              id="social-tooltip"
              delayShow={80}
              delayHide={80}
              place="top"
              positionStrategy="fixed"
              className="!pointer-events-none !rounded-md !bg-black !px-3 !py-2 !text-sm !text-white"
            /> */}
                    </div>

                    {/* Right Image */}
                    <div className="relative z-0 flex justify-center md:justify-end md:-ml-24 lg:-ml-32">
                        <Image
                            src="/Frame%2020.svg"
                            alt="Hero illustration"
                            width={900}
                            height={620}
                            className="h-auto w-full max-w-[900px]"
                            priority
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
