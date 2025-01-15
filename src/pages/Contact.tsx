import React from 'react';
import { locations } from '../data/locations';
import { MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find your nearest VS Trailers branch. We're expanding across South Africa
          to serve you better.
        </p>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-700">Current Locations</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.filter(loc => !loc.isUpcoming).map((location) => (
              <div key={location.name} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{location.name}</h4>
                    <p className="text-gray-600 mb-4">{location.address}</p>
                    <div className="space-y-2">
                      {location.contacts.map((contact, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-yellow-500" />
                          <span className="text-gray-700">{contact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-700">Coming Soon</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.filter(loc => loc.isUpcoming).map((location) => (
              <div key={location.name} className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{location.name}</h4>
                    <p className="text-gray-600 mb-4">{location.address}</p>
                    <div className="space-y-2">
                      {location.contacts.map((contact, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-yellow-500" />
                          <span className="text-gray-700">{contact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}