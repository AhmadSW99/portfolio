'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const section = document.querySelector(sectionId);
    if (section) {
      const navHeight = 64; // Height of your navbar (4rem = 64px)
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-peach-50/90 backdrop-blur-sm border-b border-copper-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              onClick={(e) => scrollToSection(e, '#hero')}
              className="text-2xl font-bold text-black hover:text-orange-400 transition-colors"
            >
              AHMAD ALAWAD
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#Hero" 
              onClick={(e) => scrollToSection(e, '#Hero')}
              className="text-black hover:text-orange-400 transition-colors"
            >
              Home
            </Link>
            
            <Link 
              href="#about" 
              onClick={(e) => scrollToSection(e, '#about')}
              className="text-black hover:text-orange-400 transition-colors"
            >
              About
            </Link>
            <Link 
              href="#projects" 
              onClick={(e) => scrollToSection(e, '#projects')}
              className="text-black hover:text-orange-400 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="#skills" 
              onClick={(e) => scrollToSection(e, '#skills')}
              className="text-black hover:text-orange-400 transition-colors"
            >
              Skills
            </Link>
            <Link 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center px-4 py-2 border border-orange-400 text-sm font-medium rounded-md text-black bg-orange-400 hover:bg-copper-500 hover:border-copper-500 transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-orange-400 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              href="/" 
              onClick={(e) => scrollToSection(e, '#hero')}
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-400 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link 
              href="#projects" 
              onClick={(e) => scrollToSection(e, '#projects')}
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-400 hover:bg-gray-50"
            >
              Projects
            </Link>
            <Link 
              href="#about" 
              onClick={(e) => scrollToSection(e, '#about')}
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-400 hover:bg-gray-50"
            >
              About
            </Link>
            <Link 
              href="#skills" 
              onClick={(e) => scrollToSection(e, '#skills')}
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-400 hover:bg-gray-50"
            >
              Skills
            </Link>
            <Link 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-400 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

