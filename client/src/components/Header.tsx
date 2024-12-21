import React from "react";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-600">PostCraft</div>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-4 ml-auto md:flex">
            <a
              href="#about"
              className="px-4 py-2 text-gray-600 transition-colors rounded-full hover:text-blue-600 hover:bg-gray-100"
            >
              About Us
            </a>
            <a
              href="#services"
              className="px-4 py-2 text-gray-600 transition-colors rounded-full hover:text-blue-600 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-gray-600 transition-colors rounded-full hover:text-blue-600 hover:bg-gray-100"
            >
              Contact
            </a>
            <a
              href="/login"
              className="px-4 py-2 text-gray-600 transition-colors rounded-full hover:text-blue-600 hover:bg-gray-100"
            >
              Login
            </a>
            <button className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700">
              Order Now
            </button>
            <div className="relative">
              <FaShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                0
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 py-4 bg-white border-b border-gray-100 md:hidden top-full">
            <div className="flex flex-col px-4 space-y-4">
              <a
                href="#about"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                Contact
              </a>
              <a
                href="/login"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                Login
              </a>
              <button className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
