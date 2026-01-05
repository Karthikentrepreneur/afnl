import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Plane, Ship, FileText, FileCheck, Droplets, Truck, Anchor, Warehouse, Package, Boxes } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

// Scroll to Top on Route Change
const ScrollToTop = () => {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  return null;
};

// Service Card Component
const ServiceCard = ({
  icon,
  title,
  description,
  image,
  link
}) => {
  // Choose more appropriate image based on service type
  const getServiceImage = () => {
    switch (title) {
      case "Air Freight":
        return "/2.png";
      case "Ocean Freight":
        return "/1.png";
      case "Customs Clearance":
        return "/3.png";
      case "Liquid Transportation":
        return "/truck12.png";
      case "Transportation":
        return "/truck12.png";
      case "Warehousing":
        return "/6.png";
      default:
        return image;
    }
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} viewport={{
    once: true
  }} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <div className="relative w-full overflow-hidden">
        <AspectRatio ratio={16 / 9} className="w-full">
          <img src={getServiceImage()} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4">
              <div className="bg-brand-gold text-brand-navy p-2 rounded-full inline-block mb-2">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="p-4 flex-grow">
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
          {description}
        </p>
        <Link to={link} className="text-brand-gold font-medium hover:text-amber-500 inline-flex items-center text-sm">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>;
};
const ServiceDetailCard = ({
  title,
  description,
  image,
  icon
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.8
  }} viewport={{
    once: true
  }} className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-60 md:h-full">
          <AspectRatio ratio={4 / 3} className="h-full">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </AspectRatio>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-brand-gold text-brand-navy p-2 rounded-full">
              {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4">
            <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </motion.div>;
};
const Services = () => {
  const isMobile = useIsMobile();
  const services = [{
    image: "/1.png",
    title: "Ocean Freight",
    description: "Complete FCL and LCL services with flexible sailings, transparent pricing, and a reliable global partner network.",
    icon: <Anchor />,
    link: "/services/ocean-freight"
  }, {
    image: "/2.png",
    title: "Air Freight",
    description: "Time-critical air freight solutions with global reach, priority handling, and optimized carrier selection.",
    icon: <Plane />,
    link: "/services/air-freight"
  }, {
    image: "/3.png",
    title: "Customs Clearance",
    description: "End-to-end customs brokerage ensuring smooth clearance, regulatory compliance, and on-time delivery.",
    icon: <FileCheck />,
    link: "/services/customs-clearance"
  }, {
    image: "/truck12.png",
    title: "Transportation",
    description: "Dedicated domestic transportation fleet enabling fast, reliable, and scalable distribution operations.",
    icon: <Truck />,
    link: "/services/transportation"
  }, {
    image: "/5.png",
    title: "Warehousing",
    description: "Secure storage, inventory management, and value-added warehousing solutions for modern supply chains.",
    icon: <Warehouse />,
    link: "/services/warehousing"
  }, {
    image: "/4.png",
    title: "Project Cargo",
    description: "Expert handling of oversized, heavy-lift, and complex cargo for infrastructure and industrial projects.",
    icon: <Package />,
    link: "/services/project-cargo"
  }, {
    image: "/6.png",
    title: "3PL Services",
    description: "End-to-end third-party logistics solutions including warehousing, distribution, and supply chain management.",
    icon: <Warehouse />,
    link: "/services/3pl"
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };
  const featuredServices = services.slice(0, 3);
  return <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-green to-emerald-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/lovable-uploads/gp.jpg" alt="Services" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-emerald-700 opacity-90"></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Our Logistics Services
              </h1>
              <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                From air and ocean freight to specialized transportation solutions, we offer end-to-end logistics expertise to meet your global shipping needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                
                
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        

        {/* Services Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
                All Services
              </h2>
              <div className="w-20 h-1 bg-brand-gold mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive range of services designed to meet all your logistics requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => <ServiceCard key={index} {...service} />)}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        
      </main>

      <Footer />
    </div>;
};
export default Services;