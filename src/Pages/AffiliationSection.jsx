

import React from 'react';
import Marquee from 'react-fast-marquee';

const logos = [
    { src: "/Affliation/1.svg" },
    { src: "/Affliation/3.svg" },
    { src: "/Affliation/2.svg" },
    { src: "/Affliation/4.svg" },


];

const AffiliationSection = () => {
    const rows = 2;
    const logosPerRow = Math.ceil(logos.length / rows);
    const rowGroups = Array.from({ length: rows }, (_, i) =>
        logos.slice(i * logosPerRow, (i + 1) * logosPerRow)
    );

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold text-center text-blue-900 mb-4">
                Industry Collaborations
            </h2>
            <div className="border-b-2 border-yellow-500 w-24 mx-auto mb-8"></div>

            {rowGroups.map((group, index) => (
                <Marquee
                    key={index}
                    gradient={false}
                    autoFill={true}
                    speed={100}
                    pauseOnHover={false}
                    direction={index % 2 === 1 ? 'right' : 'left'}
                    className="mb-4 "
                >
                    {group.map((logo, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center p-6 mx-4 gap-2 "
                            // style={{ maxHeight: 'auto', width: '180px' }}
                        >
                            <img src={logo.src} alt={logo.alt}  />
                        </div>
                    ))}
                </Marquee>
            ))}
        </div>
    );
};

export default AffiliationSection;