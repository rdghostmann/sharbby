export default function MyAccount() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-black text-white p-6">
        <h1 className="text-lg font-semibold text-center">My Account</h1>
        <div className="mt-4">
          <p className="text-xl font-medium">Vince</p>
          <p className="text-gray-400 text-sm">vince@example.com</p>
        </div>
      </header>

      <div className="p-6">
        {/* Notifications */}
        <section>
          <h2 className="font-semibold text-gray-800">Notifications</h2>
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-600">Receive Notifications?</span>
            <input
              type="checkbox"
              className="toggle-checkbox focus:ring-blue-500 h-5 w-10 rounded-full bg-gray-300 checked:bg-blue-600 cursor-pointer"
              defaultChecked
            />
          </div>
        </section>

        {/* Location Settings */}
        <section className="mt-8">
          <h2 className="font-semibold text-gray-800">Location Settings</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">My Location</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600">Chicago</span>
                <button className="text-blue-600 text-sm">{'✏️'}</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">My Country</span>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600">United States</span>
                <button className="text-blue-600 text-sm">{'✏️'}</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Location Based Content</span>
              <input
                type="checkbox"
                className="toggle-checkbox focus:ring-blue-500 h-5 w-10 rounded-full bg-gray-300 checked:bg-blue-600 cursor-pointer"
              />
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section className="mt-8">
          <h2 className="font-semibold text-gray-800">Preferences</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">My Favorites</span>
              <span className="text-blue-600 font-medium text-sm">{'>'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Saved Payment Methods</span>
              <span className="text-blue-600 font-medium text-sm">{'>'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Change App Icon</span>
              <span className="text-blue-600 font-medium text-sm">{'>'}</span>
            </div>
          </div>
        </section>

        {/* Help & Guidance */}
        <section className="my-8">
          <h2 className="font-semibold text-gray-800">Help & Guidance</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Need Help?</span>
              <span className="text-blue-600 font-medium text-sm">{'>'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Give Us Feedback</span>
              <span className="text-blue-600 font-medium text-sm">{'>'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Legal</span>
              <span className="text-blue-600 font-medium text-sm">{'>'}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
