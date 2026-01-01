
import React from 'react';
import Hero from '../components/Hero';
import InnovationSection from '../components/InnovationSection';
import Features from '../components/Features';
import GridSection from '../components/GridSection';
import NewsSection from '../components/NewsSection';
import CareerSection from '../components/CareerSection';
import ContactForm from '../components/ContactForm';

const innovationsData = [
  {
    title: "Regional Energy Expansion: Major 400 MW infrastructure project initiated in Asia-Pacific",
    desc: "A strategic partnership has been forged to manufacture and deploy modular natural gas systems by 2028, aiming to stabilize power for emerging technological hubs.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Autonomous Horizons: Why the future of offshore production belongs to umbilical-less systems",
    desc: "Moving beyond traditional subsea constraints, new autonomous control frameworks are enhancing agility and operational security in deepwater environments.",
    image: "https://read.nxtbook.com/gulf_energy_information/world_oil/january_2025/assets/389ceb46af24a03bbe88763fca816eec.jpg"
  },
  {
    title: "BoreSight™ Telemetry: Precision drilling data unlocked via new wired interface",
    desc: "Our latest sensing platform delivers high-speed surface intelligence, optimizing automated closed-loop systems for superior borehole delivery.",
    image: "https://cdn.induportals-media-publishing.org/Press%20Files/10/26/34/102634-halliburton111.jpg"
  }
];

const assetValueData = [
  {
    title: "Overcoming Subsurface Friction: Advanced circulation systems optimize Mexican onshore project",
    desc: "Deploying high-torque automation has effectively mitigated stuck pipe events, setting a new regional standard for wellbore stability and drilling speed.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Adriatic Deepwater Integrity: CorrosaCem™ provides durable isolation for carbon storage",
    desc: "Our corrosion-resistant barrier technology was successfully deployed for a CO2 injection well, ensuring long-term sequestration security in the Adriatic Sea.",
    image: "https://cleantechnica.com/wp-content/uploads/2024/06/DALL%C2%B7E-2024-06-16-11.20.40-A-panoramic-view-of-a-cement-plant-with-smokestacks-silos-and-large-machinery.-Above-the-plant-a-giant-vacuum-cleaner-labeled-CCS-Carbon-Capture-copy-800x445.png"
  },
  {
    title: "VersaFlex® Deployment: Adaptive liner solutions navigate complex Australian wellbores",
    desc: "The ELH LECD system provided critical stability in unstable formations, allowing for precise hydraulic manipulation in Western Australian deepwater zones.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
  }
];

const LandingPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <InnovationSection />
      <Features />
      <GridSection title="DISCOVER OUR RECENT BREAKTHROUGHS" items={innovationsData} />
      <NewsSection />
      <GridSection title="MAXIMIZING OPERATIONAL PERFORMANCE" items={assetValueData} />
      <CareerSection />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
