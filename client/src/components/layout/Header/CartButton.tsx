import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function CartButton() {
  return (
    <div className="relative">
      <FiShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
      <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
        0
      </span>
    </div>
  );
}
