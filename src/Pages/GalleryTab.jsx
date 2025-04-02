"use client";
import RegistrationOpen from "../CommonComponents/RegistrationOpen";
import HeroSection from "../CommonComponents/HeroSection";

function GalleryTab() {
  return (
    <>
      <HeroSection
        title="GALLERY"
        subtitle="A Glimpse into Life at KITM"
        bgImage="./BannerImg.png"
      />


      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">

          <section className="flex-col justify-items-center w-1161 h-95  md:py-10 pb-4">
            <p className="text-2xl italic leading-8 text-justify md:text-center  text-black max-md:text-2xl max-sm:text-xl">
              Welcome to the visual diary of{" "}
              <strong className="font-bold">KITM College</strong>! Every picture
              tells a story, and here, you'll find moments that capture the vibrant
              energy, academic excellence, and unforgettable memories that define
              our campus life.
            </p>
          </section>


          <div className="mx-0 relative mb-16">
            <input
              type="text"
              placeholder="Search here"
              className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <svg
              className="absolute right-4 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl flex   flex-col gap-4 mx-auto px-4 pb-16">
          <div className='max-h-[900px] overflow-hidden hidden md:flex gap-4'>
            <div className='flex justify-between flex-col'>
              <img src="GaalleryImg/4.jpg" alt="" />
              <img src="GaalleryImg/5.jpg" alt="" />
            </div>
            <div className='rounded-xl'>
              <img src="GaalleryImg/8.jpg" alt="" className='max-h-[900px]' />

            </div>
            <div className='flex justify-between flex-col'>
              <img src="GaalleryImg/6.jpg" alt="" />
              <img src="GaalleryImg/7.jpg" alt="" className='max-h-[500px]' />

            </div>
          </div>

          <div className="md:hidden grid grid-cols-2 gap-4 mb-4">
            <img src="GaalleryImg/4.jpg" alt="" className="w-full h-auto object-cover rounded-lg" />
            <img src="GaalleryImg/5.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            <img src="GaalleryImg/8.jpg" alt="" className="w-full h-auto object-cover rounded-lg col-span-2" />
            <img src="GaalleryImg/6.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            <img src="GaalleryImg/7.jpg" alt="" className="w-full h-auto object-cover rounded-lg" />
          </div>

          <div>
            <img src="GaalleryImg/9.jpg" alt="" />

          </div>
          <div className='flex md:flex-row flex-col gap-4 justify-between'>
            <img src="GaalleryImg/1.jpg" alt="" />
            <img src="GaalleryImg/2.jpg" alt="" />
            <img src="GaalleryImg/3.jpg" alt="" />

          </div>
        </div>
      </div>

      <RegistrationOpen />


    </>
  );
}

export default GalleryTab;
