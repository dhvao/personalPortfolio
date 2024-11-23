import memojiAvatar1 from "@/assets/images/servicenow.png";
import memojiAvatar2 from "@/assets/images/GXO.png";
import memojiAvatar3 from "@/assets/images/co-op.png";
import memojiAvatar4 from "@/assets/images/evri.png";
import memojiAvatar5 from "@/assets/images/a1.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

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
    text: "Implemented strategies leading to a reduction in stock discrepancies and a significant increase in warehouse efficiency. Proficient in inventory management software and skilled in building strong supplier relationships.",
    avatar: memojiAvatar2,
  },
  {
    name: "LLOP Driver",
    position: "Part Time @ Co-operative",
    text: "Operated LLOP equipment within the warehouse, contributing to the increase in order processing efficiency",
    avatar: memojiAvatar3,
  },
  {
    name: "Warehouse Operative",
    position: "Part Time @ Evri",
    text: "Handled warehouse equipment and adapted to various operational tasks, worked with heavy items and cleaned the workplace when needed",
    avatar: memojiAvatar4,
  },
  {
    name: "IT Support Technican",
    position: "Part Time @ A1 Croatia",
    text: "Provided technical support to end-users by troubleshooting hardware and software issues",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader 
          eyebrow="Work I've done so far!" 
          title="Work Experience" 
          description="I did part-time work whilst in university and completed a placement year in my field."
        />
        <div className="mt-12 flex overflow-x-clip fade-mask py-4 -my-4">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card key={testimonial.name} className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
                    <div className="flex items-start space-x-4 gap-4 items-center">
                      <div className="w-14 h-14 bg-gray-700 inline-flex items-center justify-center rounded-full overflow-hidden">
                        <Image src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-200 md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
        {/* New Large Card with Hover Glow */}
        <div className="mt-12 flex justify-center">
          <Card className="w-full max-w-xl p-8 bg-gray-800 shadow-none hover:shadow-[0_0_25px_5px_rgba(255,255,0,0.5)] transition-shadow duration-300">
            <div className="flex items-center space-x-6">
              {/* Circular Icon */}
              <div className="w-24 h-24 bg-gray-700 inline-flex items-center justify-center rounded-full overflow-hidden">
                <Image src={memojiAvatar1} alt="Highlighted Role" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-2xl text-white">Highlighted Role</div>
                <div className="text-lg text-white/70">Site Reliability Engineer</div>
              </div>
            </div>
            <ul className="mt-6 text-gray-300 space-y-4 list-disc list-inside">
              {/* Bullet Points */}
              <li>
                Ensured the reliability of the system through proactive monitoring, collaborative teamwork to fix issues, and 
                maintenance of Linux servers and databases.
              </li>
              <li>
                Performed troubleshooting to address issues such as broken replication in databases or disk space exceeding 
                thresholds for a server.
              </li>
              <li>
                Collaborated with a team of highly talented engineers to develop a Python tool for SRE, providing a fast and 
                extensible command-line client with the aim of automating day-to-day tasks, reducing the time required for SRE to 
                handle tasks manually.
              </li>
              <li>
                Used JavaScript to implement a script that runs daily in the platform, evaluating an alerting system and generating 
                tickets for engineers to investigate areas of the system that could be improved.
              </li>
              <li>
                Taken the coordinator role, demonstrating leadership skills to ensure tasks were evenly distributed and handled in a 
                timely manner.
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};
