import React from 'react';
import TrailerCard from '../components/TrailerCard';
import { trailers } from '../data/trailers';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trailer Fleet</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our extensive range of high-quality trailers available for rent.
          From utility trailers to specialized transport solutions, we have the perfect
          trailer for your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trailers.map((trailer) => (
          <TrailerCard key={trailer.id} trailer={trailer} />
        ))}
      </div>
    </div>
  );
}