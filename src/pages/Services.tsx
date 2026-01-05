import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Plane,
  FileCheck,
  Truck,
  Anchor,
  Warehouse,
  Package
} from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

// Scroll to Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

// FULLY CLICKABLE SERVICE CARD
const ServiceCard = ({
  title,
  description,
  image,
  icon,
  link
}: {
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  link: string;
}) => {
  const getServiceImage = () => {
    switch (title) {
      case "Air Freight":
        return "/2.png";
      case "Ocean Freight":
        return "/1.png";
      case "Customs Clearance":
        return "/3.png";
      case "Transportation":
        return "/truck12.png";
      case "Warehousing":
        return "/6.png";
      default:
        return image;
    }
  };

  return (
    <Link to={link} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col cursor-pointer"
      >
        {/* IMAGE */}
        <div className="relative w-full overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img
              src={getServiceImage()}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4">
                <div className="bg-amber-400 text-brand-navy p-2 rounded-full inline-block mb-2">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
              </div>
            </div>
          </AspectRatio>
        </div>

        {/* CONTENT */}
        <div className="p-4 flex-grow flex flex-col">
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
            {description}
          </p>

          <div className="mt-auto inline-flex items-center text-amber-500 font-medium text-sm">
            Learn More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Services = () => {
  const isMobile = useIsMobile();

  const services = [
    {
      image: "/1.png",
      title: "Ocean Freight",
      description:
        "Complete FCL and LCL services with flexible sailings, transparent pricing, and a reliable global partner network.",
      icon: <Anchor />,
      link: "/services/ocean-freight"
    },
    {
      image: "/2.png",
      title: "Air Freight",
      description:
        "Time-critical air freight solutions with global reach, priority handling, and optimized carrier selection.",
      icon: <Plane />,
      link: "/services/air-freight"
    },
    {
      image: "/3.png",
      title: "Customs Clearance",
      description:
        "End-to-end customs brokerage ensuring smooth clearance, regulatory compliance, and on-time delivery.",
      icon: <FileCheck />,
      link: "/services/customs-clearance"
    },
    {
      image: "/truck12.png",
      title: "Transportation",
      description:
        "Dedicated domestic transportation fleet enabling fast, reliable, and scalable distribution operations.",
      icon: <Truck />,
      link: "/services/transportation"
    },
    {
      image: "/6.png",
      title: "Warehousing",
      description:
        "Secure storage, inventory management, and value-added warehousing solutions for modern supply chains.",
      icon: <Warehouse />,
      link: "/services/warehousing"
    },
    {
      image: "/4.png",
      title: "Project Cargo",
      description:
        "Expert handling of oversized, heavy-lift, and complex cargo for infrastructure and industrial projects.",
      icon: <Package />,
      link: "/services/project-cargo"
    },
    {
      image: "/6.png",
      title: "3PL Services",
      description:
        "End-to-end third-party logistics solutions including warehousing, distribution, and supply chain management.",
      icon: <Warehouse />,
      link: "/services/3pl"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* HERO */}
        <section className="bg-gradient-to-r from-brand-green to-emerald-700 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/gp.jpg.tf"
              alt="Services"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-emerald-700 opacity-90" />
          </div>

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Our Logistics Services
              </h1>
              <div className="w-20 h-1 bg-amber-400 mx-auto mb-6" />
              <p className="text-lg text-white/90">
                From air and ocean freight to specialized transportation
                solutions, we deliver end-to-end logistics excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
