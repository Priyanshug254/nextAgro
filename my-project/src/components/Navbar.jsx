import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">NextAgro</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline font-bold text-lg ">Home</Link></li>
          <li><Link to="/disease-prediction" className="hover:underline font-bold text-lg">Disease Prediction</Link></li>
          <li><Link to="/equipment-rental" className="hover:underline  font-bold text-lg">Equipment Rental</Link></li>
          <li><Link to="/community" className="hover:underline font-bold text-lg">Community</Link></li>
          <li><Link to="/auth" className="hover:underline  font-bold text-lg">Login/Signup</Link></li>
        </ul>
      </div>
    </nav>
  )
}

