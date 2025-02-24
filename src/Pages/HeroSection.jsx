import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="/Video.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-[85px] font-bold mb-4 text-center tracking-wide drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] text-shadow-lg">
          From Small Towns to Big Dreams
        </h1>
        <div className="flex items-center gap-3 text-2xl md:text-6xl">
          <span className="w-8 h-[2px] bg-white shadow-lg"></span>
          <p className="text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] text-shadow">
            KITM is Your Launchpad to Success!
          </p>
          <span className="w-8 h-[2px] bg-white shadow-lg"></span>
        </div>
      </div>

      {/* Bottom Gradient Overlay for Better Text Visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* Custom styles for enhanced text shadows */}
      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .text-shadow-lg {
          text-shadow: 
            2px 2px 8px rgba(0, 0, 0, 0.6),
            4px 4px 16px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;