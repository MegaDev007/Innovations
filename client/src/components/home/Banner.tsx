import React from 'react';
import Button from '../common/Button';

export default function Banner() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Modern building"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <span className="text-blue-300 font-medium mb-4 block">An Austin-Based Company</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Post Innovations
          </h1>
          <div className="space-y-4 mb-8">
            <p className="text-2xl text-blue-100">Offering You More Than Other Sign Post Installation Services</p>
            <p className="text-xl text-gray-200">NOW YOU CAN ADVERTISE ANYTHING EASILY</p>
            <div className="flex flex-wrap gap-4 text-blue-200">
              <span>Trusted Provider</span>
              <span>•</span>
              <span>Quality Materials</span>
              <span>•</span>
              <span>Simple Process</span>
            </div>
            <p className="text-xl font-semibold text-blue-300">NEXT DAY INSTALLATION</p>
          </div>
          <Button variant="secondary" size="lg" withArrow>
            ORDER ONLINE NOW
          </Button>
        </div>
      </div>
    </div>
  );
}