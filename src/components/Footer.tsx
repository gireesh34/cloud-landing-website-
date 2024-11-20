import { Plane } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-amber-500" />
            <span className="font-bold">Atom8ic</span>
          </div>
          <p className="text-gray-400">© 2024 Atom8ic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}