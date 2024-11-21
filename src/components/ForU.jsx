// app/for-you/ForU.jsx

import Image from "next/image";

import pawn from "/public/pawn.png"

export default function ForU() {
  return (
    <div className="flex flex-col px-4 items-center justify-center min-h-screen">
      {/* Center Image */}
      <div className="flex p-4 items-center justify-center w-32 h-32 overflow-hidden bg-gray-200 rounded-full mb-6">
        <Image
          src={pawn}
          alt="Event Icon"
          width={246}
          height={249}
          className="overflow-hidden "
          priority
        />
      </div>

      {/* Text Section */}
      <h2 className="text-xl font-semibold mb-2">FIND EVENTS FOR YOU</h2>
      <p className="max-w-96 text-gray-600 text-center px-2 mb-4">
        Get a personalized experience based on the artists, teams, and performers you love.
      </p>
      
      {/* Sign In Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2 shadow-md">
        Sign In
      </button>
    </div>
  );
}
