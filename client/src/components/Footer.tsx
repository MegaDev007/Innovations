import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">About Us</h3>
            <p className="text-gray-400">
              Sign Post specializes in premium post installation services for
              residential and commercial properties.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="transition-colors hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#installation-guide"
                  className="transition-colors hover:text-white"
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <a
                  href="#size-guide"
                  className="transition-colors hover:text-white"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#care-instructions"
                  className="transition-colors hover:text-white"
                >
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Sign Post Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#residential"
                  className="transition-colors hover:text-white"
                >
                  Residential Posts
                </a>
              </li>
              <li>
                <a
                  href="#commercial"
                  className="transition-colors hover:text-white"
                >
                  Commercial Posts
                </a>
              </li>
              <li>
                <a
                  href="#custom"
                  className="transition-colors hover:text-white"
                >
                  Custom Designs
                </a>
              </li>
              <li>
                <a
                  href="#maintenance"
                  className="transition-colors hover:text-white"
                >
                  Maintenance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-end justify-between md:flex-row">
            <p>&copy; 2024 PostCraft. All rights reserved.</p>
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
              Refund Policy
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
    </footer>
  );
}
