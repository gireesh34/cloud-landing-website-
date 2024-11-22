import { CloudCog, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Main navigation bar container
  <nav className="fixed w-full z-50 bg-[#011e14] backdrop-blur-sm">
  <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center space-x-2">
        <CloudCog className="h-8 w-8 text-amber-500" />
        <span className="hover:text-yellow-400 text-2xl font-bold">Atom8ic</span>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#features" className="hover:text-yellow-400 ">Features</a>
          <a href="#model" className="hover:text-yellow-400 ">3D-Model</a>
          <a href="#specs" className="hover:text-yellow-400 ">Specs</a>
          <a href="#faq" className="hover:text-yellow-400 ">FAQ</a>
        </div>
      </div>
      <div>
        <button className="bg-amber-500 text-black px-2 py-1.5 rounded-full font-semibold hover:bg-amber-400 transition-colors md:px-6">
        Get Started
        </button>
      </div>
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </div>
  </div>
  {isMenuOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#features" className="block px-2 py-2 hover:text-yellow-400">Features</a>
        <a href="#model" className="block px-3 py-2 hover:text-yellow-400">3D Model</a>
        <a href="#specs" className="block px-3 py-2 hover:text-yellow-400">Specs</a>
        <a href="#faq" className="block px-3 py-2 hover:text-yellow-400">FAQ</a>
      </div>
    </div>
  
    )}
  
  </nav>
  );
}
export default Navbar;



{/*
import { Plane, CloudCog, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Main navigation bar container
  <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center space-x-2">
        <CloudCog className="h-8 w-8 text-amber-500" />
        <span className="hover:text-blue-400 gold-menu text-2xl font-bold">Atom8ic</span>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#features" className="hover:text-blue-400 gold-menu">Features</a>
          <a href="#model" className="hover:text-yellow-400 gold-menu">3D-Model</a>
          <a href="#specs" className="hover:text-yellow-400 gold-menu">Specs</a>
          <a href="#faq" className="hover:text-yellow-400 gold-menu">FAQ</a>
        </div>
      </div>
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </div>
  </div>
  {isMenuOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#features" className="block px-2 py-2 gold-menu">Features</a>
        <a href="#model" className="block px-3 py-2 gold-menu">3D Model</a>
        <a href="#specs" className="block px-3 py-2 hover:text-yellow-400 gold-menu">Specs</a>
        <a href="#faq" className="block px-3 py-2 hover:text-yellow-400 gold-menu">FAQ</a>
      </div>
    </div>
  )}
  </nav>
  );
}
export default Navbar;

<nav className="container mx-auto px-6 py-6 flex justify-between items-center bg-[#011e14] fixed top-0 left-0 right-0 z-50">
  <div className="flex items-center space-x-2">
    <Plane className="h-8 w-8 text-amber-500" />
    <span className="text-2xl font-bold">Atom8ic</span>
  </div>
  <div className="hidden md:flex space-x-8">
    <a href="#features" className="hover:text-amber-500 transition-colors">Features</a>
    <a href="#platform" className="hover:text-amber-500 transition-colors">Platform</a>
    <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
  </div>
  <button className="bg-amber-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-amber-400 transition-colors">
    Get Started
  </button>
</nav>
*/}
