export default function MyEvents() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-end px-4 py-3 bg-black text-white">
        <span className="text-xl text-right flex font-medium">My Events 
          <span className="ml-5 text-sm "> 🇺🇸-img  </span>
        </span>

        <span className=" px-6 text-xl font-medium">Help</span>
      </header>

      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <p className="text-gray-600 text-lg mb-4">
          Sign in to view your order history
        </p>
        <button className="text-blue-600 font-semibold text-lg">
          Sign In
        </button>
      </div>
    </div>
  );
}
