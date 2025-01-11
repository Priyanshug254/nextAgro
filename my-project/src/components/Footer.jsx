import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 NextAgro All rights reserved.</p>
        <ul className="flex space-x-6">
          <li>
            <Link to="/about" className="hover:underline font-bold text-lg">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline font-bold text-lg">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:underline font-bold text-lg">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
