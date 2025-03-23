"use client";
import React from "react";

function GalleryTab() {
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
        <h1 className="text-6xl md:text-8xl text-white font-extrabold">
          GALLERY
        </h1>
        <p className="text-lg md:text-2xl text-white font-semibold mt-2">
          A Glimpse into Life at KITM
        </p>
      </div>
      <section className="flex-col justify-items-center w-1161 h-95 px-20 py-10">
        <p className="text-2xl italic leading-8 text-center text-black max-md:text-2xl max-sm:text-xl">
          Welcome to the visual diary of{" "}
          <strong className="font-bold">KITM College</strong>! Every picture
          tells a story, and here, you'll find moments that capture the vibrant
          energy, academic excellence, and unforgettable memories that define
          our campus life.
        </p>
      </section>


      <div className="grid grid-cols-3 gap-4 p-4">
      {/* Main large image */}
      

      {/* Top-right small image */}
      <div>
        <img
          src="GalleryGlimpse1.png"
          alt="Small view 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="col-span-2 row-span-2">
        <img
          src="/GalleryGlimpse2.png"
          alt="Main large view"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Bottom-left small image */}
      <div>
        <img
          src="GalleryGlimpse1.png"
          alt="Small view 2"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Bottom-right small image */}
      <div>
        <img
          src="GalleryGlimpse1.png"
          alt="Small view 3"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>

      
    </>
  );
}

export default GalleryTab;
