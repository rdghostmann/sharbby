import Image from "next/image";
import Calvin from "../../public/calvin.jpg"
import concreteroad from "../../public/concrete-road.jpg"

export default function Discover() {
  return (
    <div className="relative  min-h-screen text-white">
   
   <div className="sticky top-0 left-0 z-20">
       {/* Top Navigation */}
       <div className="bg-gray-900 flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center">
          <span className="mr-2">Miami</span>
          <span className="text-gray-400">|</span>
          <span className="ml-2">All Dates</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="bg-purple-600 text-xs rounded-full px-2 py-1">NEW!</span>
          <span className="text-gray-300">🇺🇸</span>
        </div>
      </div>
      {/* Search Input */}
      <div className="bg-gray-900 px-4 py-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Artist, Event or Venue"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 focus:outline-none"
          />
          <button className="absolute right-3 top-2 text-gray-400">
            🔍
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Buttons */}
      <div className="bg-gray-900 px-4 py-3">
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          <button className="flex-shrink-0 px-4 py-2 bg-gray-800 rounded-md border border-white text-sm hover:bg-gray-700">
            Concerts
          </button>
          <button className="flex-shrink-0 px-4 py-2 bg-gray-800 rounded-md border border-white text-sm hover:bg-gray-700">
            Sports
          </button>
          <button className="flex-shrink-0 px-4 py-2 bg-gray-800 rounded-md border border-white text-sm hover:bg-gray-700 whitespace-nowrap">
            Arts, Theater & Comedy
          </button>
        </div>
      </div>
   </div>

      {/* Featured Event Section */}
      <div className="w-full inset-0 bg-black bg-opacity-20 bg-cover bg-center bg-no-repeat custom-bg overflow-hidden">
        <div className="flex items-end justify-start h-full p-4">
          <div className="mb-7 flex flex-col space-y-2  ">

            <h3 className="text-3xl font-bold text-white">Panthers® Tickets</h3>
            <button className="w-fit text-xl bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md">
              Find Tickets
            </button>

          </div>
        </div>
      </div>


      {/* Recommended Artist Section */}
      <div className="px-4 py-6 mb-2 bg-slate-50">
        <Image
          src={Calvin}
          alt="Featured Band"
          className="w-full rounded-lg"
        />
        <p className="text-gray-500 mt-2">NYE at Fotainbleau Miami Beach</p>
        <h4 className="text-xl font-semibold text-stone-950 mt-2">Calvin Harris</h4>
      </div>

      <div className="px-4 py-6 mb-2 bg-slate-50">
        <Image
          src={Calvin}
          alt="Featured Band"
          className="w-full rounded-lg"
        />
        <p className="text-gray-500 mt-2">NYE at Fotainbleau Miami Beach</p>
        <h4 className="text-xl font-semibold text-stone-950 mt-2">Calvin Harris</h4>
      </div>



    </div>
  );
}
