import React from 'react'

const RegistrationOpen = () => {
    return (
        <div className="relative p-4">
            <img
                src="BannerImg.png"
                alt="Students in a classroom"
                className="w-full h-[30vh] object-cover"
            />
            <div className="absolute inset-0 p-4  md:m-[20px] bg-black opacity-15"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                <div className="max-w-7xl flex flex-col justify-center items-center ">
                    <h1 className="md:text-5xl text-2xl font-bold mb-4">REGISTRATION OPEN <span className='text-[#FF1C1C]'>2025</span> </h1>
                    <h2 className="bg-[#FF1C1C] cursor-pointer md:px-4 md:py-2 px-2 py-1 text-sm lg:text-xl rounded-full font-semibold mb-8">APPLY NOW</h2>

                </div>
            </div>
        </div>
    )
}

export default RegistrationOpen
