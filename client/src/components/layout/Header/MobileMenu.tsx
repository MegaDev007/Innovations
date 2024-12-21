import React from "react";
import { MdMenu, MdClose } from "react-icons/md";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <>
      <button className="md:hidden" onClick={onToggle}>
        {isOpen ? <MdClose /> : <MdMenu />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 py-4 bg-white border-b border-gray-100 shadow-lg md:hidden top-full">
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
    </>
  );
}
