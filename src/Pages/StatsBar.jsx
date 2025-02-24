import React from 'react';

const StatsBar = () => {
  return (
    <div className="bg-gradient-blue text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Stat 1 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <img 
            src="/Icon/Calendar.svg" 
            alt="Calendar Icon" 
            className="w-10 h-10 sm:w-12 sm:h-12" 
          />
          <div className="text-center sm:text-left">
            <div className="text-2xl md:text-4xl font-bold">10+</div>
            <div className="text-sm">Years of Educational Excellence</div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <img 
            src="/Icon/FirstPlaceRibbon.svg" 
            alt="Ribbon Icon" 
            className="w-10 h-10 sm:w-12 sm:h-auto" 
          />
          <div className="text-center sm:text-left">
            <div className="text-2xl md:text-4xl font-bold">NO. 1 Choice</div>
            <div className="text-sm">For Vocational Courses in Kumaun</div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <img 
            src="/Icon/StudentMale.svg" 
            alt="Student Icon" 
            className="w-10 h-10 sm:w-12 sm:h-12" 
          />
          <div className="text-center sm:text-left">
            <div className="text-2xl md:text-4xl font-bold">2000+</div>
            <div className="text-sm">Learner Footprints across World</div>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <img 
            src="/Icon/Classroom.svg" 
            alt="Classroom Icon" 
            className="w-10 h-10 sm:w-12 sm:h-12" 
          />
          <div className="text-center sm:text-left">
            <div className="text-2xl md:text-4xl font-bold">25+</div>
            <div className="text-sm">Highly Qualified Professionals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
