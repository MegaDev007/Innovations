import React from 'react';

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}