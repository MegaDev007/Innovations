import React from "react";
import { MdArrowForward } from "react-icons/md";

export default function Hero() {
  return (
    <div className="relative flex items-center min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl text-white">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Transform Your Space with Premium Posts
          </h1>
          <p className="mb-8 text-xl text-gray-100 md:text-2xl">
            Professional installation services for residential and commercial
            properties. Quality that stands the test of time.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-blue-600 transition-colors bg-white rounded-full hover:bg-gray-100">
              Get Started
              <MdArrowForward className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 font-semibold text-white transition-colors border-2 border-white rounded-full hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
