import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="pt-16 pb-8 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-brand-green via-emerald-400 to-brand-green rounded-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {/* Column 1: Logo & About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
            className="flex flex-col items-start"
          >
            <img
              src="/futurenet-logo.png"
              alt="Arabian Future Net Logo"
              className="h-12 w-auto object-contain mb-4"
              loading="lazy"
            />
            <p className="text-sm md:text-base text-gray-600 max-w-xs">
              Arabian Future Net Shipping Company is an international freight
              forwarder and logistics provider headquartered in Dammam, with
              branch offices in Jeddah and Riyadh.
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
            <h3 className="font-bold text-lg text-brand-navy mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms And Conditions", path: "/terms-and-conditions" },
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
              {[
                {
                  name: "Consolmate",
                  url: "https://consolmate.com/auth/login/8",
                },
                {
                  name: "Partner Portal",
                  url: "https://pp.onlinetracking.co/auth/login/8",
                },
                {
                  name: "Tracking",
                  url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:231",
                },
                {
                  name: "Sailing Schedule",
                  url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:231",
                },
              ].map((portal, index) => (
                <a
                  key={index}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-green transition flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-brand-green" />
                  {portal.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Contact Info (ALL OFFICES) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-start"
          >
            <h3 className="font-bold text-lg text-brand-navy mb-4">
              Our Offices
            </h3>

            <div className="space-y-5 text-gray-600 text-sm">
              {/* Dammam */}
              <div>
                <p className="font-semibold text-brand-navy mb-1">
                  Dammam (HQ)
                </p>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-brand-green mt-1" />
                  <p>
                    Building No.2817, Secondary No9403,
                    <br />
                    King Faisal Road, Al Tubebayshi Dist.,
                    <br />
                    Dammam, KSA 32233
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Phone size={16} className="text-brand-green" />
                  <p>+966 13 343 0003</p>
                </div>
              </div>

              {/* Riyadh */}
              <div>
                <p className="font-semibold text-brand-navy mb-1">Riyadh</p>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-brand-green mt-1" />
                  <p>
                    Room No. T18, Rail Business Centre,
                    <br />
                    Bldg No. 3823, Omar Aimukhtar St,
                    <br />
                    Thulaim, Riyadh 11332
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Phone size={16} className="text-brand-green" />
                  <p>+966 11 295 0020</p>
                </div>
              </div>

              {/* Jeddah */}
              <div>
                <p className="font-semibold text-brand-navy mb-1">Jeddah</p>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-brand-green mt-1" />
                  <p>
                    Room No. 408, Saudi Business Centre,
                    <br />
                    Al-Madinah Al-Munawarah Road,
                    <br />
                    Al Sharafeyah, Jeddah 22234
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Phone size={16} className="text-brand-green" />
                  <p>+966 12 578 0874</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 pt-2">
                <Mail size={16} className="text-brand-green" />
                <p>info.sa@futurenetlogistics.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600 mt-10 text-sm border-t pt-6">
          &copy; {new Date().getFullYear()} Arabian Future Net Shipping Company.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
