import React, { useEffect, useState } from 'react';
import { Users, UserCircle, SearchCode, Ship, Calendar } from 'lucide-react';

interface Slide {
  title: string;
  desc: string;
}

interface PortalLink {
  icon: JSX.Element;
  title: string;
  url: string;
  external: boolean;
}

const slides: Slide[] = [
  { title: 'Ocean Freight', desc: '' },
  { title: 'Transportation', desc: '' },
  { title: 'Warehousing', desc: '' },
  { title: 'Customs Clearance', desc: '' },
  { title: 'Project Cargo', desc: '' },
];

const portalLinks: PortalLink[] = [
  { icon: <Users className="w-5 h-5" />, title: 'Consolmate', url: 'https://consolmate.com/auth/login/8', external: true },
  { icon: <UserCircle className="w-5 h-5" />, title: 'Partner Portal', url: 'https://pp.onlinetracking.co/auth/login/8', external: true },
  { icon: <SearchCode className="w-5 h-5" />, title: 'Tracking', url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:231', external: true },
  { icon: <Ship className="w-5 h-5" />, title: 'Schedule', url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:231', external: true },
  { icon: <Calendar className="w-5 h-5" />, title: 'Quote', url: '/contact', external: false },
];

const Hero: React.FC = () => {
  const [, setActive] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/heroone.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* BOTTOM BUTTONS */}
      <div className="absolute bottom-20 left-0 right-0 z-[5] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {portalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                <button
                  type="button"
                  className="w-full h-14 flex flex-col items-center justify-center gap-1 bg-white/95 hover:bg-white rounded-lg shadow hover:shadow-md transition"
                >
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
