import { Plane } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-amber-800">
      <div className="container mx-auto px-6 py-8 bg-[#033121]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <Plane className="h-6 w-6 text-amber-500" />
        <span className="font-bold">Atom8ic</span>
          </div>
          <p className="text-gray-400">© 2024 Atom8ic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}