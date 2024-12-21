import React from "react";
import { IconType } from "react-icons";

interface StepProps {
  icon: IconType;
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function Step({
  icon: Icon,
  number,
  title,
  description,
  isLast,
}: StepProps) {
  return (
    <div className="relative">
      {!isLast && (
        <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-blue-200 -z-10" />
      )}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
        </div>
        <div className="text-center">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
            Step {number}
          </span>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
