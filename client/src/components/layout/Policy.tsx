import React, { ReactNode } from "react";

interface PolicyLayoutProps {
  title: string;
  effectiveDate?: string;
  children: ReactNode;
}

export function PolicyLayout({
  title,
  effectiveDate = "January 1, 2025",
  children,
}: PolicyLayoutProps) {
  return (
    <div className="max-w-4xl px-4 py-32 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
      <p className="mb-4 text-gray-600">Effective Date: {effectiveDate}</p>
      <div className="prose max-w-none">{children}</div>
    </div>
  );
}
