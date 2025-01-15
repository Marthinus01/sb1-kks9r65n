import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
              <Truck className="h-8 w-8 text-yellow-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">VS Trailers</h1>
              <p className="text-sm text-gray-700">Reliable Trailer Rentals Across South Africa</p>
            </div>
          </Link>
          <nav className="space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors hover:text-yellow-700 ${
                location.pathname === '/' ? 'text-yellow-800 font-semibold' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-medium transition-colors hover:text-yellow-700 ${
                location.pathname === '/contact' ? 'text-yellow-800 font-semibold' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}