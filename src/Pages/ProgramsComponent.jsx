import React from 'react';

// Data arrays defined in the same file
const programCategories = [
    { id: 1, title: 'Undergraduate Programs', linkText: 'VIEW ALL COURSES', linkUrl: '#' },
    { id: 2, title: 'Post Graduate Programs', linkText: 'VIEW ALL COURSES', linkUrl: '#' },
    { id: 3, title: 'Diploma Programs', linkText: 'VIEW ALL COURSES', linkUrl: '#' },
    { id: 4, title: 'Certificate Programs', linkText: 'VIEW ALL COURSES', linkUrl: '#' },
];

const faculties = [
    { id: 1, name: 'Faculty of Technology and Computer Applications', url: '#' },
    { id: 2, name: 'Faculty of Commerce & Business Management', url: '#' },
    { id: 3, name: 'Faculty of Hospitality and Tourism Management', url: '#' },
    { id: 4, name: 'Faculty of Mass Communication', url: '#' },
];

function ProgramsComponent() {
    return (
        <div className="bg-[#d2d2d2] my-8 py-12 flex flex-col gap-12">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-4xl text-center font-semibold text-blue-800 mb-2">Our Programs</h2>
                    <div className="w-20 h-1 bg-orange-500 mb-4"></div>
                </div>
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 border-r-2 border-[#9C9C9C]">
                        <p className="text-gray-700 mb-16 text-xl italic leading-8 tracking-wide">
                            At KITM, learning goes beyond the textbooks. We empower you to transform theory into action and ideas into reality.
                            Join us to bridge the gap between knowledge and impact - where innovation comes to life.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {programCategories.map((category) => (
                                <div key={category.id} className="mb-4">
                                    <h3 className="text-3xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                                    <a href={category.linkUrl} className="text-gray-600 text-lg hover:text-blue-700 flex items-center">
                                        {category.linkText} <span className="ml-1">&gt;</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-semibold text-gray-800 mb-10">Browse by Faculty</h2>
                        <ul>
                            {faculties.map((faculty) => (
                                <li key={faculty.id} className="mb-8">
                                    <a href={faculty.url} className="text-gray-600 leading-8 tracking-wide text-xl hover:text-blue-700">
                                        {faculty.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative p-4">
                <img
                    src="BannerImg.png"
                    alt="Students in a classroom"
                    className="w-full h-[30vh] object-cover"
                />
                <div className="absolute inset-0 p-4  md:m-[20px] bg-black opacity-15"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                    <div className="max-w-7xl flex flex-col justify-center items-center ">
                        <h1 className="md:text-5xl text-2xl font-bold mb-4">REGISTRATION OPEN <span className='text-orange-600'>2025</span> </h1>
                        <h2 className="bg-orange-600 cursor-pointer md:px-4 md:py-2 px-2 py-1 text-sm lg:text-xl rounded-full font-semibold mb-8">APPLY NOW</h2>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramsComponent;
