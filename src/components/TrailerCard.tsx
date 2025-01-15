import React, { useState } from 'react';
import { Trailer } from '../types';

interface TrailerCardProps {
  trailer: Trailer;
}

export default function TrailerCard({ trailer }: TrailerCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative">
          <img
            src={trailer.imageUrl}
            alt={trailer.name}
            className="w-full h-48 object-cover cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          <div className="absolute top-0 right-0 bg-yellow-400 text-gray-800 px-3 py-1 rounded-bl-lg font-medium">
            Type {trailer.id}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{trailer.name}</h3>
          <p className="text-gray-600 mb-4">{trailer.description}</p>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Specifications:</h4>
            <ul className="space-y-1">
              {trailer.specifications.map((spec, index) => (
                <li key={index} className="text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{trailer.name}</h3>
              <img
                src={trailer.imageUrl}
                alt={trailer.name}
                className="w-full h-96 object-contain rounded-lg mb-4"
              />
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}