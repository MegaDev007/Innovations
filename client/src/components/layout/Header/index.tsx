import React, { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import CartButton from './CartButton';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Order Now
            </button>
            <a href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">Login</a>
            <CartButton />
          </div>

          <MobileMenu 
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>
    </header>
  );
}