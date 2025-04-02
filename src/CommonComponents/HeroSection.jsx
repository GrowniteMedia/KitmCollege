import React from 'react'

const HeroSection = ({ title, subtitle, children, bgImage, spanC='hidden',span }) => {
    
  return (
    <section 
      className={`relative py-12 md:h-[400px] px-4 sm:px-6 lg:px-8 ${bgImage ? '' : 'bg-white'}`}
    >
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="Background" 
            className="w-full h-full  object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      )}
      
      <div className="relative h-full flex flex-col md:gap-10 justify-center items-center z-10 max-w-7xl mx-auto">
     
          <h2 className={`text-6xl flex font-bold tracking-tight sm:text-[120px] ${bgImage ? 'text-white' : 'text-gray-900'}`}>
            {title} <span className={` ${spanC}`}>{span}</span>
          </h2>
          {subtitle && (
            <p className={`mt-4 text-xl md:text-6xl font-semibold ${bgImage ? 'text-gray-200' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {children}
        </div>
      </div>
    </section>
  )
}

export default HeroSection