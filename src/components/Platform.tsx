import { Check } from 'lucide-react';

const features = [
  "Advanced telemetry & real-time data streaming",
  "AI-powered flight path optimization",
  "Multi-drone mission coordination",
  "Predictive maintenance analytics",
  "Automated compliance reporting",
  "Custom integration APIs"
];

export function Platform() {
  return (
    <section className="py-32 hero-gradient" id="platform">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
                Enterprise-Grade
              </span>
              {" "}Control Platform
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Experience unprecedented control over your drone operations with our cutting-edge platform. 
              Built for both individual operators and enterprise fleets.
            </p>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="bg-amber-500/10 p-1 rounded">
                    <Check className="h-4 w-4 text-amber-500" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/20 blur-3xl opacity-20 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Drone control platform"
              className="rounded-2xl shadow-2xl relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}