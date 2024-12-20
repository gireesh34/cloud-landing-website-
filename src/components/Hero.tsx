import { ChevronRight, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import droneVideo from '../assets/drone.mp4';
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);


  return (
    <div>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover', minHeight: '100%' }}
          
        >
          <source src={droneVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <div className="container mx-auto px-6 py-32 relative w-full h-full">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center bg-zinc-900/50 rounded-full px-4 py-2 mb-8">
          <span className="text-amber-500 mr-2">New</span>
          <span className="text-gray-400">Autonomous Flight Control v2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
        Next-Gen Drone
          </span>
          <br />
          Control Platform
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Experience unprecedented control with our advanced cloud platform. 
          Built for modern drone fleets and enterprise operations.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="group bg-amber-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-all flex items-center justify-center">
        Start Free Trial
        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group border border-zinc-700 hover:border-amber-500 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center">
        Schedule Demo
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          </div>
        </div>
        </div>
        </section>
        
    </div>
  );
}