import { Plane } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
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
  );
}