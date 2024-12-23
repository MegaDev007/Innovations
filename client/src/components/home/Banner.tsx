import React from "react";
import Button from "../common/Button";

export default function Banner() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#20b8cd]/90 to-[#134e56]/90 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Modern building"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl text-white">
          <span className="block mb-4 font-medium text-blue-300">
            An Austin-Based Company
          </span>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Post Innovations
          </h1>
          <div className="mb-8 space-y-4">
            <p className="text-2xl text-blue-100">
              Offering You More Than Other Sign Post Installation Services
            </p>
            <p className="text-xl text-gray-200">
              NOW YOU CAN ADVERTISE ANYTHING EASILY
            </p>
            <div className="flex flex-wrap gap-4 text-blue-200">
              <span>Trusted Provider</span>
              <span>•</span>
              <span>Quality Materials</span>
              <span>•</span>
              <span>Simple Process</span>
            </div>
            <p className="text-xl font-semibold text-blue-300">
              NEXT DAY INSTALLATION
            </p>
          </div>
          <Button variant="secondary" size="lg" withArrow>
            ORDER ONLINE NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
