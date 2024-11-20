import { Cloud, Cpu, Shield, Boxes, Radar, Activity } from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: "Cloud Integration",
    desc: "Connect your entire fleet to our secure cloud infrastructure for real-time control and monitoring."
  },
  {
    icon: Cpu,
    title: "IoT Capabilities",
    desc: "Leverage advanced IoT integration for enhanced operational efficiency and automated workflows."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Military-grade encryption and security protocols protect your data and operations."
  },
  {
    icon: Boxes,
    title: "Fleet Management",
    desc: "Manage multiple drones efficiently with our intuitive fleet management dashboard."
  },
  {
    icon: Radar,
    title: "Live Tracking",
    desc: "Real-time positioning and telemetry data for precise mission control."
  },
  {
    icon: Activity,
    title: "Smart Automation",
    desc: "Create and deploy custom automation sequences for repetitive operations."
  }
];

export function Features() {
  return (
    <section className="py-32" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Advanced Platform Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built for scale, designed for performance. Our platform provides everything you need to manage your drone operations effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="feature-card-gradient border border-zinc-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all group"
              >
                <div className="bg-amber-500/10 p-3 rounded-lg w-fit">
                  <Icon className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-3 group-hover:text-amber-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}