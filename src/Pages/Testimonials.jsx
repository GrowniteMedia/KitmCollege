import React, { useState, useEffect } from "react";

// A small helper component to wrap the cards and trigger a fade-in transition
const FadeInContainer = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // On mount, trigger the fade-in
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {children}
    </div>
  );
};

// Tabs for switching between testimonials
const TABS = ["Alumni", "Recruiters", "Parents"];

// Sample testimonials data (customize as needed)
const testimonialsData = {
  Alumni: [
    {
      name: "Name One",
      company: "Some Company",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "Lorem ipsum dolor sit amet consectetur. Risus mauris in iaculis habitant orci."
    },
    {
      name: "Name Two",
      company: "Another Company",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "Short and sweet testimonial text. Lorem ipsum donec vitae tellus."
    },
    {
      name: "Name Three",
      company: "Some Company",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Name Four",
      company: "Fourth Company",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "Suspendisse potenti. Integer quis risus in nunc consectetur feugiat."
    },
    {
      name: "Name Five",
      company: "Fifth Company",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "Praesent euismod dolor et ipsum ullamcorper, vitae sagittis quam ultricies."
    }
  ],
  Recruiters: [
    {
      name: "Recruiter One",
      company: "Recruit Inc.",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "We found excellent candidates. Vivamus eget velit justo. Donec non consequat mi."
    },
    {
      name: "Recruiter Two",
      company: "Staffing Co.",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "Suspendisse potenti. Integer quis risus in nunc consectetur feugiat."
    },
    {
      name: "Recruiter Three",
      company: "Hiring Solutions",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "Fusce facilisis tempus orci, et ornare felis. We appreciate the support."
    }
  ],
  Parents: [
    {
      name: "Parent One",
      company: "N/A",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "My child had a wonderful experience! Lorem ipsum dolor sit amet."
    },
    {
      name: "Parent Two",
      company: "N/A",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "Highly recommend. Vivamus eget velit justo. Donec non consequat mi."
    },
    {
      name: "Parent Three",
      company: "N/A",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      text: "We appreciate all the support. Fusce facilisis tempus orci, et ornare felis."
    }
  ]
};

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("Alumni");
  const [startIndex, setStartIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  });

  // Update testimonials per page based on the viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTestimonialsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(2);
      } else {
        setTestimonialsPerPage(3);
      }
      // Reset the index on resize for a better UX
      setStartIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setStartIndex(0);
  };

  const activeData = testimonialsData[activeTab];
  const total = activeData.length;
  const visibleTestimonials = activeData.slice(startIndex, startIndex + testimonialsPerPage);

  const handleNext = () => {
    if (startIndex + testimonialsPerPage >= total) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + testimonialsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex === 0) {
      const remainder = total % testimonialsPerPage;
      if (remainder === 0) {
        setStartIndex(total - testimonialsPerPage);
      } else {
        setStartIndex(total - remainder);
      }
    } else {
      setStartIndex(startIndex - testimonialsPerPage);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D3082]">
        Testimonials
      </h2>
      <div className="w-20 h-[4px] bg-[#F4672C] mx-auto mt-3 rounded-full"></div>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 my-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`pb-2 text-sm md:text-lg font-medium transition-colors border-b-2 ${
              activeTab === tab
                ? "text-[#2D3082] border-[#F4672C]"
                : "text-gray-500 border-transparent hover:text-[#2D3082]"
            }`}
            aria-current={activeTab === tab ? "page" : undefined}
          >
            {tab}
          </button>
        ))}
      </div>

      <FadeInContainer key={activeTab + startIndex}>
        <div
          className={`grid gap-8 mt-8 ${
            testimonialsPerPage === 1
              ? "grid-cols-1"
              : testimonialsPerPage === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {visibleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={`${item.name}'s profile`}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </FadeInContainer>

      {/* Next/Prev Arrows (only if more testimonials exist) */}
      {total > testimonialsPerPage && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Next testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}

      {/* View More link */}
      <div className="mt-8 text-center">
        <button className="text-sm md:text-base text-[#2D3082] hover:underline focus:outline-none">
          View More
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
