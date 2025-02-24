import React from 'react';
import Marquee from 'react-fast-marquee';

// Data for notifications
const notificationData = {
  topBar: {
    title: "OFFICIAL NOTICES",
    notices: [
      { text: "2025", link: "#", id: 1 },
      { text: "Semester 5 Result Out Now", link: "#", id: 2 },
      { text: "Registration Link 2025", link: "#", id: 3 }
    ]
  },
  bottomBar: {
    endTitle: "NEWS & UPDATES",
    notices: [
      { text: "2025", link: "#", id: 1 },
      { text: "Registration Link 2025", link: "#", id: 2 },
      { text: "Semester 5 Result Out Now", link: "#", id: 3 }
    ]
  }
};

const NotificationLink = ({ text }) => (
  <span className="whitespace-nowrap mx-4">
    {text} -{" "}
    <button className="text-red-500 hover:underline">
      Click Here
    </button>
  </span>
);

const NoticeBar = () => {
  return (
    <div className="w-full">
      {/* Top Notification Strip */}
      <div className="bg-gray-900 text-white p-2 py-[26px]">
        <div className="flex items-center px-4">
          <div className="font-bold min-w-fit pr-4">
            {notificationData.topBar.title}
          </div>
          <div className="overflow-hidden flex-1">
            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover={false}
              direction="right"
              autoFill={true}
            >
              {notificationData.topBar.notices.map((notice) => (
                <NotificationLink key={notice.id} text={notice.text} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* Bottom Notification Strip */}
      <div className="bg-blue-900 text-white my-6 p-2 py-[26px]">
        <div className="flex justify-between items-center px-4">
          <div className="overflow-hidden flex-1">
            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover={false}
              direction="left"
              autoFill={true}
            >
              {notificationData.bottomBar.notices.map((notice) => (
                <NotificationLink key={notice.id} text={notice.text} />
              ))}
            </Marquee>
          </div>
          <div className="bg-blue-900 px-4 min-w-fit ml-4">
            <span className="font-bold">
              {notificationData.bottomBar.endTitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;
