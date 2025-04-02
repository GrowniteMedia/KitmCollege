import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center p-4 md:my-10 md:mb-16">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row md:justify-end mt-6 shadow-2xl border rounded-xl bg-white p-5 md:w-2/3">
        
        {/* Image Container */}
        <div className="md:absolute md:left-[-7rem] md:top-10 self-center md:self-auto rounded-xl h-[300px] shadow-2xl">
          <img
            src="/Md.jpg"
            alt="Mr. Kamal Bisht"
            className="rounded-xl h-[300px] shadow-2xl "
          />
        </div>

        {/* Text Container */}
        <div className="max-w-[700px] mt-8 md:mt-0">
          {/* Heading: Smaller on mobile, large on desktop */}
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-1">
            Mr. Kamal Bisht
          </h2>
          <p className="text-gray-500 font-medium mb-4">
            Managing Director, KTIM Group of Institutes
          </p>
          {/* Paragraph: Smaller base size, larger on md */}
          <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet consectetur. Eget fermentum facilisis
            amet sagittis adipiscing in mauris. Hac pharetra erat quis blandit
            fermentum at. Egestas tellus massa nunc mi. Egestas volutpat orci et
            pellentesque vitae diam laoreet porta. Ut vitae diam id interdum
            amet est feugiat. Mi morbi at massa sapien purus fermentum magna
            adipiscing. Nunc cursus egestas interdum imperdiet rutrum lectus.
            Tellus tempor orci consequat et cursus. Ultrices at eget eu eu ut
            duis sit.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline font-semibold"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
