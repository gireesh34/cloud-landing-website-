import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32" id="contact">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent" />
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Drone Operations?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join industry leaders who trust Atom8ic for their mission-critical drone operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="group bg-amber-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-all flex items-center justify-center">
                Get Started Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border border-zinc-700 hover:border-amber-500 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center">
                Contact Sales
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}