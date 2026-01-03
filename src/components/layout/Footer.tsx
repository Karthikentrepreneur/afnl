import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className="pt-16 pb-8 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-brand-green via-emerald-400 to-brand-green rounded-full mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {/* Column 1: Logo & About */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={footerAnimation} 
            className="flex flex-col items-start"
          >
            <div className="mb-4">
              <img 
                src="/futurenet-logo.png" 
                alt="Arabian Future Net Logo" 
                className="h-12 w-auto object-contain" 
                loading="lazy" 
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 max-w-xs text-left">
              Arabian Future Net Shipping Company is an international freight forwarder and logistics provider headquartered in Dammam, with branch offices in Jeddah and Riyadh. We offer premium logistics services worldwide.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={footerAnimation} 
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <h3 className="font-bold text-lg text-brand-navy mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms And Conditions", path: "/terms-and-conditions" }
              ].map((link, index) => (
                <Link 
                  key={index} 
                  to={link.path} 
                  className="text-gray-600 hover:text-brand-green transition flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-brand-green" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Portals */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={footerAnimation} 
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <h3 className="font-bold text-lg text-brand-navy mb-4">Portals</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="https://consolmate.com/auth/login/8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-green transition flex items-center gap-2"
              >
                <ArrowRight size={14} className="text-brand-green" />
                Consolmate
              </a>
              <a 
                href="https://pp.onlinetracking.co/auth/login/8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-green transition flex items-center gap-2"
              >
                <ArrowRight size={14} className="text-brand-green" />
                Partner Portal
              </a>
              <a 
                href="http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:231" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-green transition flex items-center gap-2"
              >
                <ArrowRight size={14} className="text-brand-green" />
                Tracking
              </a>
              <a 
                href="http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:231" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-green transition flex items-center gap-2"
              >
                <ArrowRight size={14} className="text-brand-green" />
                Sailing Schedule
              </a>
            </div>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={footerAnimation} 
            transition={{ delay: 0.3 }}
            className="flex flex-col items-start"
          >
            <h3 className="font-bold text-lg text-brand-navy mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-brand-green mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Building No.2817, Secondary No9403,<br />
                  King Faisal Road, Al Tubebayshi Dist.<br />
                  Dammam, KSA 32233
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-brand-green flex-shrink-0" />
                <p className="text-sm">+966 13 849 8630</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-brand-green flex-shrink-0" />
                <p className="text-sm">info.sa@futurenetlogistics.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600 mt-10 text-sm border-t pt-6">
          &copy; {new Date().getFullYear()} Arabian Future Net Shipping Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
