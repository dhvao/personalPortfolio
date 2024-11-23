"use client";

import { useState } from "react";
import Image from "next/image";

// Correct imports for images
import dbImage from "@/assets/images/db.png";
import fileImage from "@/assets/images/file.png";
import monitorImage from "@/assets/images/monitor.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Professional and University Projects"
          title="Featured Projects"
          description="Explore my work!"
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url('/grainImage.png')` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400
              inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white-5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleOpenModal}
                    className="mt-6 bg-white text-gray-900 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200"
                  >
                    View In Detail
                  </button>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mt-6 lg:mt-0"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 bg-gray-800 rounded-3xl relative shadow-lg">
            <button
              onClick={handleCloseModal}
              className="absolute -top-4 -right-4 bg-white text-gray-800 text-lg w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300"
              style={{ transform: "translate(50%, -50%)" }}
            >
              &times;
            </button>

            {/* Animation Area */}
            <div className="relative w-full h-24 bg-gray-700 rounded-lg flex items-center justify-between px-6 shadow-lg">
              {/* Database Image */}
              <Image
                src={dbImage}
                alt="Database"
                width={40}
                height={40}
                className="object-contain"
              />

              {/* File Animation */}
              <div className="relative flex-1 h-full">
                <Image
                  src={fileImage}
                  alt="File"
                  width={25}
                  height={25}
                  className="absolute top-1/2 left-0 -translate-y-1/2 animate-move-file"
                />
              </div>

              {/* Monitor Image */}
              <Image
                src={monitorImage}
                alt="Monitor"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-white">
                Project Details Coming Soon
              </h2>
              <p className="mt-4 text-gray-400">
                This section will contain more detailed project information.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
