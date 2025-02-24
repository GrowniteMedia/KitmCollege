import React from 'react';

const HappeningsComponent = () => {
  // Sample data for the gallery items
  const events = [
    { id: 1, date: '25/12/2024', title: 'Christmas & New year Celebration' },
    { id: 2, date: '25/12/2024', title: 'Christmas & New year Celebration' },
    { id: 3, date: '25/12/2024', title: 'Christmas & New year Celebration' },
    { id: 4, date: '25/12/2024', title: 'Christmas & New year Celebration' },
    { id: 5, date: '25/12/2024', title: 'Christmas & New year Celebration' },
    { id: 6, date: '25/12/2024', title: 'Christmas & New year Celebration' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-blue-900">Happenings</h1>
        
        {/* Navigation Tabs */}
        <div className="flex border-b mt-4">
          <div className="mr-8">
            <a href="#" className="inline-block pb-2 font-medium">NEWS AND EVENTS</a>
            <div className="h-1 bg-red-500 w-full"></div>
          </div>
          <div className="mr-8">
            <a href="#" className="inline-block pb-2 font-medium text-gray-600">GALLERY</a>
          </div>
          <div>
            <a href="#" className="inline-block pb-2 font-medium text-gray-600">ACTIVITY AND WORKSHOP</a>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="mb-6">
            {/* Event Image */}
            <div className="bg-gray-200 h-48 mb-2">
              <img 
                src="/IMG_7192-01.png" 
                alt="Event celebration" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Event Date and Title */}
            <div>
              <p className="font-bold text-sm">{event.date}</p>
              <p className="text-sm text-gray-700">{event.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappeningsComponent;