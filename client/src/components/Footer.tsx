import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">About Us</h3>
            <p className="text-gray-400">
              PostCraft specializes in premium post installation services for
              residential and commercial properties.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Residential Posts
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Commercial Posts
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Custom Designs
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p>&copy; 2024 PostCraft. All rights reserved.</p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                to="/refund-policy"
                className="transition-colors hover:text-white"
              >
                Refund Service
              </Link>
              <Link
                to="/terms-and-conditions"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
