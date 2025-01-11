import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-green-50 via-blue-50 to-yellow-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-green-700 mb-12">
        Welcome to <span className="text-yellow-500">NextAgro</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-green-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Predict Crop Diseases</h2>
          <p className="mb-6 text-gray-700">
            Upload an image of your crop and get instant disease predictions and treatment recommendations.
          </p>
          <Link to="/disease-prediction" className="bg-green-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-green-600 transition-colors duration-200">
            Try Now
          </Link>
        </div>

        <div className="bg-blue-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Rent Equipment</h2>
          <p className="mb-6 text-gray-700">
            Find and rent farming equipment from other farmers in your community.
          </p>
          <Link to="/equipment-rental" className="bg-blue-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200">
            Explore
          </Link>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-yellow-600 mb-8">Join Our Farming Community</h2>
        <p className="text-lg text-gray-700 mb-6">
          Connect with other farmers, share experiences, and learn from each other.
        </p>
        <Link to="/community" className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition-colors duration-200">
          Join Now
        </Link>
      </div>
    </div>
  )
}
