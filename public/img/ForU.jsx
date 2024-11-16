// ForU.jsx

export default function ForU() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-6">
          {/* Placeholder for the Image */}
          <img
            src="/images/center-image-placeholder.png"
            alt="Center Icon"
            className="w-20 h-20"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">FIND EVENTS FOR YOU</h2>
        <p className="text-gray-600 text-center mb-6 px-4">
          Get a personalized experience based on the artists, teams, and performers you love.
        </p>
        <button className="bg-blue-600 text-white rounded-full px-8 py-2 font-medium shadow-md">
          Sign In
        </button>
      </div>

     
    </div>
  );
}
