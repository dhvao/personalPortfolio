"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import memojiAvatar1 from "@/assets/images/servicenow.png";
import memojiAvatar2 from "@/assets/images/GXO.png";
import memojiAvatar3 from "@/assets/images/co-op.png";
import memojiAvatar4 from "@/assets/images/evri.png";
import memojiAvatar5 from "@/assets/images/a1.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment as ReactFragment } from "react";

const testimonials = [
  {
    name: "Site Reliability Engineer",
    position: "Placement year @ ServiceNow",
    text: "Ensured the reliability of the system through proactive monitoring, collaborative teamwork to fix issues, and maintenance of Linux servers and databases.",
    avatar: memojiAvatar1,
  },
  {
    name: "Stock Controller",
    position: "Part Time @ GXO",
    text: "Implemented strategies leading to a reduction in stock discrepancies and a significant increase in warehouse efficiency.",
    avatar: memojiAvatar2,
  },
  {
    name: "LLOP Driver",
    position: "Part Time @ Co-operative",
    text: "Operated LLOP equipment within the warehouse, contributing to increased order processing efficiency.",
    avatar: memojiAvatar3,
  },
  {
    name: "Warehouse Operative",
    position: "Part Time @ Evri",
    text: "Handled warehouse equipment, adapted to various operational tasks, and cleaned the workplace when needed.",
    avatar: memojiAvatar4,
  },
  {
    name: "IT Support Technician",
    position: "Part Time @ A1 Croatia",
    text: "Provided technical support to end-users by troubleshooting hardware and software issues.",
    avatar: memojiAvatar5,
  },
];

const technologies = [
  "Python",
  "Swift",
  "React",
  "Node.js",
  "Docker",
  "Swift UI",
  "Linux",
  "SQL",
  "MongoDB",
  "Git",
  "CI/CD",
  "Tableau",
  "Machine Learning",
  "Data Visualization",
];

export const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    const container = containerRef.current;
    let scrollSpeed = 1;
    let animationFrame: number;

    const autoScroll = () => {
      if (container && !isInteracting) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    if (!isInteracting) {
      animationFrame = requestAnimationFrame(autoScroll);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isInteracting]);

  
  const WorkCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      // Detect if the device is mobile (coarse pointer means touch screen)
      if (typeof window !== "undefined") {
        setIsMobile(window.matchMedia("(pointer: coarse)").matches);
      }
    }, []);
  
    return (
      <Card
        onMouseEnter={() => !isMobile && setIsInteracting(true)}
        onMouseLeave={() => !isMobile && setIsInteracting(false)}
        className={`testimonial-card work-tilt min-w-[280px] max-w-xs md:max-w-md md:p-8 transition duration-300 shadow-none sm:shadow-lg`}
      >
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-gray-700 inline-flex items-center justify-center overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <div className="font-semibold text-white text-base md:text-lg">
              {testimonial.name}
            </div>
            <div className="text-sm text-white/40">{testimonial.position}</div>
          </div>
        </div>
        <p className="mt-4 text-gray-200 md:text-base">{testimonial.text}</p>
      </Card>
    );
  };
  

  return (
    <section id="work-experience" className="py-16">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Work I've done so far!"
          title="Work Experience"
          description="I did part-time work whilst in university and completed a placement year in my field."
        />

        {/* Advanced Skills Section – No tilt effect here */}
        <div className="mt-12 flex justify-center">
          <Card className="relative w-full max-w-screen-lg p-6 bg-gray-600 shadow-none duration-300 md:p-8">
            {/* Golden Circle and Label */}
            <div className="absolute top-2 left-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium text-white/80">
                Advanced Skills
              </span>
            </div>

            <div className="flex flex-col items-center space-y-4 md:space-y-6">
              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                Software Technologies
              </h2>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {technologies.map((tech, index) => {
                  const highlightedTechs = ["Python", "Docker", "Linux", "Machine Learning", "SQL"];
                  const isHighlighted = highlightedTechs.includes(tech);
                  return (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-xs md:text-sm ${
                        isHighlighted
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg animate-pulse"
                          : "bg-gray-700 text-white/80 hover:text-white hover:bg-gray-500 transition duration-300"
                      }`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        {/* Work Experience Cards – with tilt effect */}
        <div
          {...useSwipeable({
            onSwipedLeft: () => {
              containerRef.current?.scrollBy({
                left: window.innerWidth * 0.8,
                behavior: "smooth",
              });
            },
            onSwipedRight: () => {
              containerRef.current?.scrollBy({
                left: -window.innerWidth * 0.8,
                behavior: "smooth",
              });
            },
            trackTouch: true,
            trackMouse: false,
            delta: 10,
            preventScrollOnSwipe: true,
          })}
          ref={containerRef}
          className="mt-12 flex overflow-x-auto fade-mask py-4 -my-4 scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
          onMouseDown={() => setIsInteracting(true)}
          onMouseUp={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
        >
          <div className="flex gap-8 flex-none">
            {[...new Array(2)].fill(0).map((_, index) => (
              <ReactFragment key={index}>
                {testimonials.map((testimonial) => (
                  <WorkCard key={testimonial.name} testimonial={testimonial} />
                ))}
              </ReactFragment>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Card
            className="w-full max-w-4xl p-6 md:p-8 bg-gray-700 rounded-3xl after:rounded-3xl shadow-lg overflow-hidden mx-4"
          >
            <div className="flex items-center space-x-6">
              {/* Icon Container */}
              <div className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 aspect-square flex-shrink-0 bg-gray-700 flex items-center justify-center rounded-full overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={memojiAvatar1}
                    alt="Highlighted Role"
                    layout="fill" // or 'fill' if using Next.js 13+
                    className="object-cover rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="font-bold text-xl md:text-2xl text-white">
                  Site Reliability Engineer
                </div>
                <div className="text-md md:text-lg text-white/70">ServiceNow</div>
                <div className="text-md md:text-xs text-white/70">July 2022 - July 2023</div>
              </div>
            </div>
            <ul className="mt-6 text-gray-300 space-y-6">
              <li>
                <div className="font-semibold text-white">System Reliability</div>
                <p>
                  Proactively monitored Linux server performance, ensured reliability by fixing critical issues, and maintained MariaDB, RaporDB, and SQL databases.
                </p>
              </li>
              <li>
                <div className="font-semibold text-white">Troubleshooting</div>
                <p>
                  Troubleshot technical challenges, such as broken database replication and disk space limits, to prevent disruptions and ensure a reliable experience.
                </p>
              </li>
              <li>
                <div className="font-semibold text-white">Python Tool Development</div>
                <p>
                  Collaborated with a team of talented engineers during my placement to develop a dashboard using the ServiceNow architecture that automated daily SRE tasks, significantly reducing manual workload.
                </p>
              </li>
              <li>
                <div className="font-semibold text-white">Leadership</div>
                <p>
                  Stepped into a coordinator role, effectively distributing tasks and ensuring timely resolution of issues, demonstrating emerging leadership skills.
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
