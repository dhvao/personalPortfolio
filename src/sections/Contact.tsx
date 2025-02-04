"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import poskLogo from "@/assets/icons/posk_no_circle.png";
import mornarLogo from "@/assets/icons/mornar.png";
import dynamic from "next/dynamic";
import { Card } from "@/components/Card";

const SpinningVolleyball = dynamic(() => import("../components/SpinningVolleyball"), { ssr: false });

export const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Sending Email:", { from_name: userEmail, message: userMessage });

    emailjs
      .send(
        "service_gnfbtrc",
        "template_rp1gc7d",
        {
          from_name: userEmail,
          message: userMessage,
          user_email: userEmail,
        },
        "5oGbZyJLVyHhlenu9"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setUserEmail("");
          setUserMessage("");
          setShowForm(false);
        },
        (error) => {
          console.error("Error sending message: ", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    // Wrap the contact section in a section with id="contact"
    <section id="contact" className="py-16 pt-12">
      <div className="container flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Contact Me Card */}
        <Card className="w-full max-w-md flex flex-col justify-center text-center px-6 py-8 md:px-8 md:py-10 h-[310px]">
          <h2 className="font-serif text-lg md:text-xl font-bold">Let&apos;s connect!</h2>
          <p className="text-sm md:text-base mt-2">I believe I will be a great addition to your team!</p>
          <button
            onClick={() => setShowForm(true)}
            className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-6 hover:scale-105 transition-transform duration-300"
          >
            <span className="font-semibold">Contact Me</span>
            <ArrowUpRightIcon className="size-4" />
          </button>
          <a
            href="/assets/resumecv.pdf"
            download
            className="text-white bg-gray-700 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-4 hover:scale-105 transition-transform duration-300"
          >
            <span className="font-semibold">Download Resume</span>
            <ArrowUpRightIcon className="size-4" />
          </a>
        </Card>

        {/* Waterpolo Championship Card */}
        <Card className="w-full max-w-md flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-8 md:py-10 h-auto">
          <div className="flex-1">
            <h2 className="font-serif text-lg md:text-xl font-bold text-center md:text-left">
              Waterpolo Championship Winner
            </h2>
            <ul className="text-sm md:text-base mt-3 space-y-2 leading-relaxed">
              <li>🥈 Silver Medal EU Championship</li>
              <li>🥇 5-time Gold Winner Croatian WP</li>
              <li>🥈 4-time Silver Winner Croatian WP</li>
              <li>🥉 2-time Bronze Winner Croatian WP</li>
            </ul>
            <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
              <div className="flex items-center">
                <Image src={poskLogo} alt="WC POSK" width={24} height={24} />
                <span className="text-xs md:text-sm ml-2">WC POSK</span>
              </div>
              <div className="flex items-center">
                <Image src={mornarLogo} alt="WC Mornar" width={24} height={24} />
                <span className="text-xs md:text-sm ml-2">WC MORNAR</span>
              </div>
            </div>
          </div>
          <div className="flex-none w-16 h-16 md:w-20 md:h-20 mt-4 md:mt-0">
            <SpinningVolleyball />
          </div>
        </Card>
      </div>
      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <Card className="w-full max-w-md animate-slide-up relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-800 transition"
            >
              X
            </button>
            <h2 className="font-serif text-xl md:text-2xl text-center mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="w-full p-3 mb-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 text-sm md:text-base"
              />
              <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Your Message"
                required
                className="w-full p-3 mb-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 text-sm md:text-base"
              />
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </Card>
        </div>
      )}
    </section>
  );
};
