import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Footer = () => {
  const offices = [
    {
      city: "Dammam (Headquarter)",
      cr: "CR No: 2050159935",
      address: [
        "Building No.2817, Secondary No9403",
        "King Faisal Road, Al Tubebayshi Dist.",
        "Dammam, KSA 32233"
      ],
      phone: "+966 13 343 0003",
      direct: "+966 13 849 8630 / 8631"
    },
    {
      city: "Riyadh",
      cr: "CR No: 1010867642",
      address: [
        "Room No. T18, Rail Business Centre",
        "Bldg No. 3823, Omar Aimukhtar St",
        "Thulaim, Riyadh 11332"
      ],
      phone: "+966 11 295 0020",
      direct: "+966 13 849 8639"
    },
    {
      city: "Jeddah",
      cr: "CR No: 4030498909",
      address: [
        "Room No. 408, Saudi Business Centre",
        "Al-Madinah Al-Munawarah Road",
        "Jeddah 22234, Saudi Arabia"
      ],
      phone: "+966 12 578 0874",
      direct: "+966 13 849 8632 / 8633"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % offices.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-50 pt-16 pb-6 border-t">
      <div className="container mx-auto px-4">

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* About */}
          <div>
            <img
              src="/futurenet-logo.png"
              alt="FutureNet Logistics"
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-600 max-w-sm">
              Arabian Future Net Shipping Company is an international freight
              forwarder headquartered in Dammam with branches in Riyadh and
              Jeddah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-green font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Contact Us", to: "/contact" }
              ].map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.to}
                    className="hover:text-brand-green transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices Slider */}
          <div>
            <h4 className="text-brand-green font-semibold mb-4">
              Our Offices
            </h4>

            <div className="relative bg-white rounded-xl shadow-md p-5 min-h-[210px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="font-semibold text-brand-navy mb-1">
                    {offices[index].city}
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    {offices[index].cr}
                  </p>

                  <div className="flex gap-2 text-sm mb-2">
                    <MapPin size={16} className="text-brand-green mt-1" />
                    <div>
                      {offices[index].address.map((l, i) => (
                        <p key={i}>{l}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} className="text-brand-green" />
                    {offices[index].phone}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Direct: {offices[index].direct}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              <div className="absolute bottom-3 right-3 flex gap-1">
                <button
                  onClick={() =>
                    setIndex((index - 1 + offices.length) % offices.length)
                  }
                  className="p-1.5 rounded-full border hover:bg-gray-100"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={() =>
                    setIndex((index + 1) % offices.length)
                  }
                  className="p-1.5 rounded-full border hover:bg-gray-100"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
              <Mail size={16} className="text-brand-green" />
              info.sa@futurenetlogistics.com
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Arabian Future Net Shipping Company.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
