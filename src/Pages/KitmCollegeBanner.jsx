import React from 'react';

const KitmCollegeBanner = () => {
  return (
    <div className="relative">
      <img
        src="BannerImg.png"
        alt="Students in a classroom"
        className="w-full h-[80vh] object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-15"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-start md:text-center px-4">
        <div className="max-w-7xl flex flex-col justify-center md:items-center ">
          <h1 className="text-4xl font-bold mb-4">KITM COLLEGE'S</h1>
          <h2 className="md:text-7xl text-xl font-semibold mb-8">10+ years of Academic Excellence</h2>
          <p className="md:text-lg text-sm text-start md:text-center max-w-5xl">
            Lorem ipsum dolor sit amet consectetur. At faucibus elit morbi odio
            dictumst consectetur et. Ipsum ac non non cursus ac sed praesent.
            Habitasse massa massa risus elit fames elementum felis quam. Diam
            lacinia lacus potenti semper tellus amet viverra velit est. Diam
            morbi phasellus aliquam sollicitudin sodales adipiscing. Netus aliquam
            sit iaculis turpis tempus leo et maecenas. Egestas purus et sed orci
            malesuada. Dictum in aenean semper augue nisl non. Iaculis non
            condimentum tincidunt id molestie fringilla at fames sagittis. Est ipsum
            duis sagittis ut. Sodales diam amet diam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KitmCollegeBanner;