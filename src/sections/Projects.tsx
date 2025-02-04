"use client";

import { useState } from "react";
import Image from "next/image";

// Correct imports for images
import dbImage from "@/assets/images/db.png";
import fileImage from "@/assets/images/file.png";
import monitorImage from "@/assets/images/monitor.png";
import darkSaasLandingPage from "@/assets/images/servicenowDashboard.png";
import lightSaasLandingPage from "@/assets/images/crimeData.png";
import accuracy from "@/assets/images/accuracy.png";
import aiStartupLandingPage from "@/assets/images/construction.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import performance from "@/assets/images/performance.png";


const portfolioProjects = [
  {
    company: "ServiceNow",
    year: "2023",
    title: "Interactive Dashboard for High Impact Alerts",
    results: [
      { title: "Used to visualize and monitor high-impact alerts in real-time, improving decision-making efficiency" },
      { title: "Integrated data from multiple sources, providing comprehensive insights and enabling rapid identification of critical issues" },
      { title: "Enhanced user experience with customizable filters, intuitive visualizations, and responsive design" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    images: [darkSaasLandingPage, performance], // two unique images for this card
  },
  {
    company: "BSc Project",
    year: "2024",
    title: "Predicting and Visualising UK Crime Data",
    results: [
      { title: "Visualized crime data across the UK with interactive heatmaps highlighting the frequency of various crime categories" },
      { title: "Applied machine learning techniques to predict crime trends using UK crime data, enhancing crime prediction analysis and visualization" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    images: [lightSaasLandingPage, accuracy], // two unique images for this card
  },
  {
    company: "MSc Project",
    year: "2025",
    title: "Quality Control in Manufacturing using Computer Vision",
    results: [
      { title: "Creating synthatic image data for testing" },
      { title: "Potentialy speed up quality control in manufacturing by 70%" },
      { title: "Implementing machine learning models to recognise images" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    images: [aiStartupLandingPage, aiStartupLandingPage], // two unique images for this card
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
    <section id="featured-projects" className="pb-16 lg:py-24">
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
                {/* Left Content */}
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-yellow-300 to-sky-400
              inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-3xl lg:text-4xl mt-2 md:mt-5">
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
                </div>

                {/* Right Content */}
                <div className="relative">
  {/* First Image (Always Visible) */}
  <Image
    src={project.images[0]}
    alt={`${project.title} Image 1`}
    className="rounded-lg mt-3 mb-3 "
  />
  {/* Second Image (Hidden on Mobile) */}
  <Image
    src={project.images[1]}
    alt={`${project.title} Image 2`}
    className="rounded-lg mt-4 mb-6 hidden-mobile tablet-hide"
  />
</div>


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
              <Image
                src={dbImage}
                alt="Database"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="relative flex-1 h-full">
                <Image
                  src={fileImage}
                  alt="File"
                  width={25}
                  height={25}
                  className="absolute top-1/2 left-0 -translate-y-1/2 animate-move-file"
                />
              </div>
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
