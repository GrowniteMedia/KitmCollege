"use client";
import React from "react";
import RegistrationOpen from "../CommonComponents/RegistrationOpen";
import HeroSection from "../CommonComponents/HeroSection";

function AboutKitm() {
  const sections = [
    {
      title: "Life on Campus",
      text: "Peek into the heart of our college – from bustling hallways to serene study spots, this is where growth and learning blend seamlessly.",
      image: "/CampusActivity2.png",
    },
    {
      title: "Events That Inspire",
      text: "From cultural fests to guest lectures, explore snapshots of events that inspire, educate, and entertain.",
      image: "/CampusActivity3.png",
    },
    {
      title: "Celebrating Achievements",
      text: "Achievements, big and small, are a cause for celebration. See our students and faculty shine on every platform.",
      image: "/CampusActivity4.png",
    },
    {
      title: "Our Infrastructure in Focus",
      text: "Explore our modern infrastructure designed to provide the best facilities for education, research, and collaboration.",
      image: "/CampusActivity6.png",
    },
    {
      title: "Moments to Cherish",
      text: "Explore our modern infrastructure designed to provide the best facilities for education, research, and collaboration.",
      image: "/CampusActivity5.png",
    },
    {
      title: "Campus Activities & Clubs",
      text: "Explore our modern infrastructure designed to provide the best facilities for education, research, and collaboration.",
      image: "/CampusActivity1.png",
    },
  ];
  return (
    <>
      <HeroSection
        title="About "
        subtitle="A Glimpse into Life at KITM"
        bgImage="./BannerImg.png"
        spanC='block text-[#EEFD18] font-bold'
        span=' KITM'
      />


      <section className="w-full">
        <p className="px-5 sm:px-10 md:px-20 py-10 sm:py-16 text-2xl sm:text-3xl md:text-4xl italic leading-8 sm:leading-9 md:leading-10 text-justify md:text-center text-black">
          Peek into the heart of our college - from bustling hallways to serene
          study spots, this is where growth and learning blend seamlessly.
        </p>
      </section>

      <div className="p-4 max-w-[1200px] mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image Section */}
            <div className="flex-shrink-0 w-full max-w-[488px] h-auto justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                {section.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-blue-600">
                  {section.title.split(" ").slice(-1)}
                </span>
              </h2>
              <p className="text-gray-700 italic leading-relaxed">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center px-5 sm:px-10 md:px-36 py-6 sm:py-8 md:py-10 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl italic leading-7 sm:leading-8 md:leading-9 text-center text-black">
          Want to experience it all? Visit us and be part of the KITM family!
        </h2>
      </div>

      <RegistrationOpen />
    </>
  );
}

export default AboutKitm;
