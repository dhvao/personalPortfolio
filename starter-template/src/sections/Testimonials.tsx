import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg"
import { Gravitas_One } from "next/font/google";
import {Card} from "@/components/Card"

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
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
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
        <div className="mt-16 flex overflow-x-clip fade-mask">
          <div className="flex gap-8 flex-none">
            {testimonials.map(testimonial => (
              <Card key={testimonial.name} className="max-w-xs md:max-w-md md:p-8">
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
          </div>
        </div>
      </div>
    </div>
  );
};