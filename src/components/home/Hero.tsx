import React, { useEffect, useState } from 'react';
import { Users, UserCircle, SearchCode, Ship, Calendar } from 'lucide-react';

const slides = [
  {
    image: '/containership.jpg',
    title: 'Ocean Freight',
    desc: 'Reliable global sea transportation solutions',
  },
  {
    image: '/liquid.png',
    title: 'Liquid Logistics',
    desc: 'Safe and compliant bulk liquid transportation',
  },
  {
    image: '/warehousing.png',
    title: 'Warehousing',
    desc: 'Secure storage and distribution facilities',
  },
  {
    image: '/customclearance.png',
    title: 'Customs Clearance',
    desc: 'Smooth and compliant border clearance services',
  },
  {
    image: '/projectcargo1.png',
    title: 'Project Cargo',
    desc: 'End-to-end handling of oversized shipments',
  },
];

const portalLinks = [
  { icon: <Users className="w-5 h-5" />, title: 'Consolmate', url: 'https://consolmate.com/auth/login/8', external: true },
  { icon: <UserCircle className="w-5 h-5" />, title: 'Partner Portal', url: 'https://pp.onlinetracking.co/auth/login/8', external: true },
  { icon: <SearchCode className="w-5 h-5" />, title: 'Tracking', url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:231', external: true },
  { icon: <Ship className="w-5 h-5" />, title: 'Schedule', url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:231', external: true },
  { icon: <Calendar className="w-5 h-5" />, title: 'Quote', url: '/contact', external: false },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === i ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={s.image} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      {/* CONTENT LAYER */}
      <div className="relative z-[2] min-h-screen flex flex-col justify-end pb-10 px-4">
        <div className="max-w-7xl mx-auto w-full text-center space-y-3 mb-10">
          {/* Service Text */}
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold">
            {slides[active].title}
          </h2>
          <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            {slides[active].desc}
          </p>
        </div>

        {/* Buttons */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {portalLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target={link.external ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                <button className="w-full h-14 flex flex-col items-center justify-center gap-1 bg-white/95 hover:bg-white rounded-lg shadow hover:shadow-md transition">
                  {link.icon}
                  <span className="font-bold text-xs sm:text-sm">
                    {link.title}
                  </span>
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
