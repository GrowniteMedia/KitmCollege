import  { useState, useEffect, useRef } from "react";

const CourseSelection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const images = [
    {
      url: "https://images.unsplash.com/file-1705123271268-c3eaf6a79b21image?w=416&dpr=2&auto=format&fit=crop&q=60",
      text: "Trending Course",
    },
    {
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "Popular Course",
    },
    {
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "New Course",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? images.length - 1 : prevSlide - 1
//     );
//   };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Handle navigation dots click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
    startAutoSlide();
  };

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-[400px] md:h-[600px] w-full bg-gray-100 p-4 sm:p-6 md:p-10 gap-6">
      <div className="bg-white w-full md:w-1/2 h-auto md:h-full rounded-md shadow-md p-6 md:p-12 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Get Started</h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Choose the course of your choice
        </p>
        <div className="mb-6">
          <select
            id="department"
            className="block w-full border py-6 px-4 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Department</option>
            <option value="Faculty of Technology and Computer Applications">
              Faculty of Technology and Computer Applications
            </option>
            <option value="Faculty of Commerce & Business Management">
              Faculty of Commerce & Business Management
            </option>
            <option value="Faculty of Hospitality and Tourism Management">
              Faculty of Hospitality and Tourism Management
            </option>
            <option value="Faculty of Mass Communication">
              Faculty of Mass Communication
            </option>
          </select>
        </div>
        <button className="bg-black text-white py-4 text-lg px-4 rounded-md hover:bg-gray-800 transition-colors">
          Search Courses
        </button>
      </div>

      <div
        className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none">
          <div className="bg-black bg-opacity-50 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold text-sm sm:text-xl md:text-2xl mb-8 md:mb-14">
            Apply Now
          </div>
        </div>

        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.text}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-2 md:h-2 rounded-full focus:outline-none ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;
