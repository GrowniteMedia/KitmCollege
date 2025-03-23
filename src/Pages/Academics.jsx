"use client";
import React from "react";

function Academics() {
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
      <div
        className="object-contain w-full aspect-[4.27] flex items-center justify-center"
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets/TEMP/3215e3f8635f4d9a9989ca06e71df46dfc36f670d4b88cdd7381439763c86db4?placeholderIfAbsent=true&apiKey=6ab1bfb1bd724a4f8d9f293aead89f51")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center px-5">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-extrabold">
            ACADEMICS
          </h1>
          <p className="text-lg md:text-3xl lg:text-4xl text-white font-semibold mt-2">
            A Glimpse into Life at KITM
          </p>
        </div>
      </div>

      <section className="w-full">
        <p className="px-5 sm:px-10 md:px-20 py-10 sm:py-16 text-2xl sm:text-3xl md:text-4xl italic leading-8 sm:leading-9 md:leading-10 text-center text-black">
          Peek into the heart of our college - from bustling hallways to serene
          study spots, this is where growth and learning blend seamlessly.
        </p>
      </section>

      <div className="p-4 max-w-[1200px] mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
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

      <div className="flex justify-center py-20">
        <div
          className="object-contain w-full max-w-[1374px] h-[200px] md:h-[319px] flex items-center justify-center"
          style={{
            backgroundImage: `url('/Footer.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center">
            <h1 className="text-xl md:text-6xl lg:text-8xl text-white font-extrabold">
              REGISTRATION OPEN 2025
            </h1>
            <button className="bg-red-500 text-white font-bold px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg rounded-full my-4">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Academics;
