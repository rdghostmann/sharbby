"use client";
import React, { useState } from "react";

const Event = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const upcomingEvents = [
    {
      title: "Taylor Swift | The Eras Tour",
      date: "Sun, Sun 20, 7:00pm",
      location: "Hard Rock Stadium",
      image: "/public/calvin.jpg", // Replace with your image URL
    },
  ];

  const pastEvents = [
    {
      title: "Taylor Swift | The Eras Tour",
      date: "Sun, Sun 20, 7:00pm",
      location: "Hard Rock Stadium",
      image: "/public/calvin.jpg", // Replace with your image URL
    },
    {
      title: "Taylor Swift | The Eras Tour",
      date: "Sun, Sun 20, 7:00pm",
      location: "Hard Rock Stadium",
      image: "/public/calvin.jpg", // Replace with your image URL
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="bg-gray-900 py-8">
        <h1 className="text-lg text-white font-bold text-center">My Events</h1>

      </div>
      {/* Tabs */}
      <div className="flex mb-2 bg-blue-500 text-white">
        <button
          className={`w-full px-4 py-2 text-lg font-medium ${activeTab === "upcoming"
              ? "border-b-4 text-white border-white"
              : "text-white"
            }`}
          onClick={() => handleTabChange("upcoming")}
        >
          Upcoming ({upcomingEvents.length})
        </button>

        <button
          className={`w-full px-4 py-2 text-lg font-medium ${activeTab === "past"
              ? "border-b-4 text-white border-white"
              : "text-white"
            }`}
          onClick={() => handleTabChange("past")}
        >
          Past ({pastEvents.length})
        </button>
      </div>

      {/* Event Content */}
      <div>
        {activeTab === "upcoming" &&
          upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-64 mb-4"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="">{event.title}</p>
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>
            </div>
          ))}

        {activeTab === "past" &&
          pastEvents.map((event, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-64 mb-4"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="">{event.title}</p>
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Event;
