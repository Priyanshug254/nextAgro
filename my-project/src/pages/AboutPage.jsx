export default function AboutPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-6 text-center text-green-600">
            About NextAgro
          </h1>
          <p className="text-lg text-center text-gray-700 mb-6">
            At <span className="font-semibold">NextAgro</span>, we aim to bridge the gap between 
            farmers and equipment owners by providing a seamless rental platform.
          </p>
          <ul className="space-y-4 text-gray-600 text-lg">
            <li>🌾 Maximize equipment utilization.</li>
            <li>⚙️ Improve productivity and reduce downtime.</li>
            <li>🤝 Foster collaboration and resource-sharing.</li>
          </ul>
  
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Our Vision</h2>
            <p className="text-gray-700">
              We believe in empowering farmers with access to the right tools and 
              resources to enhance their efficiency and productivity, contributing to a sustainable future.
            </p>
          </div>
  
          <div className="mt-8 text-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded transition"
              onClick={() => alert('Thank you for visiting!')}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
  