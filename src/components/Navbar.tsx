import { CloudCog, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Main navigation bar container
  <nav className="fixed w-full z-50 bg-[#033121] bg-opacity-50 backdrop-blur-lg">
  <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center space-x-2">
        <CloudCog className="h-8 w-8 text-amber-500" />
        <img src="/src/assets/logo.webp" alt="Logo" className="h-10 w-22" />
        {/* <span className="hover:text-yellow-400 text-2xl font-bold">Atom8ic</span> */}
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
        <a href="platform" className="block px-3 py-2 hover:text-yellow-400">Platform</a>
        <a href="#specs" className="block px-3 py-2 hover:text-yellow-400">Specs</a>
        <a href="#contact" className="block px-3 py-2 hover:text-yellow-400">Contact</a>
      </div>
    </div>
  
    )}
  
  </nav>
  );
}
export default Navbar;



