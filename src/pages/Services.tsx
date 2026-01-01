import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Plane, Ship, FileText, Droplets, Truck, Warehouse } from "lucide-react";
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
        return "/cargoplane3.png";
      case "Ocean Freight":
        return "/ships2.png";
      case "Customs Clearance":
        return "/lovable-uploads/cc.jpg";
      case "Liquid Transportation":
        return "/transports.png";
      case "Transportation":
        return "/trucks.png";
      case "Warehousing":
        return "/warehouse2.png";
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
  const services = [
    {
      id: 1,
      icon: <Plane className="w-5 h-5" />,
      title: "Air Freight",
      image: "/cargoplane3.png",
      description: "At GGL, we offer a comprehensive range of air freight solutions tailored to meet your time-sensitive and high-priority shipping needs.",
      link: "/services/air-freight"
    },
    {
      id: 2,
      icon: <Ship className="w-5 h-5" />,
      title: "Ocean Freight",
      image: "/ships2.png",
      description: "At GGL, our dedicated Ocean Freight Department specializes in comprehensive freight management services for both Less-than-Container Load (LCL) and Full Container Load (FCL) shipments.",
      link: "/services/ocean-freight"
    },
    {
      id: 3,
      icon: <Truck className="w-5 h-5" />,
      title: "Transportation",
      image: "/trucks.png",
      description: "GGL proudly operates a dedicated fleet of vehicles designed to guarantee timely and efficient domestic distribution and delivery services.",
      link: "/services/transportation"
    },
    {
      id: 4,
      icon: <Warehouse className="w-5 h-5" />,
      title: "Warehousing",
      image: "/warehouse2.png",
      description: "GGL is a leading supply chain solutions provider in Singapore, offering end-to- end logistics services tailored to a wide range of industries.",
      link: "/services/warehousing"
    },
    {
      id: 5,
      icon: <Warehouse className="w-5 h-5" />,
      title: "LCL Consolidation",
      image: "/lcl.png",
      description: "GGL is a LCL Consolidator with global presence covering North America, UK, Middle East, Indian Sub Continent, South East Asia and Far East. Our LCL Groupage services is backed by very efficient customer support at competitive prices.",
      link: "/services/lcl-consolidation"
    },
    {
      id: 6,
      icon: <Warehouse className="w-5 h-5" />,
      title: "Project Cargo",
      image: "/projectcargo3.png",
      description: "We specialize in delivering end-to-end logistics solutions for complex, heavy, and oversized shipments—commonly known as project cargo.",
      link: "/services/project-cargo"
    }
  ];
  const featuredServices = services.slice(0, 3);
  return <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/lovable-uploads/gp.jpg" alt="Services" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-navy opacity-90"></div>
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
              {services.map(service => <ServiceCard key={service.id} {...service} />)}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
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
          }} className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">Why Choose Our Logistics Services?</h2>
              <div className="w-20 h-1 bg-brand-gold mx-auto mb-3"></div>
              <p className="text-gray-700">We combine industry expertise, advanced technology, and personalized care to deliver exceptional logistics solutions.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{
              title: "🌍 Global Network",
              description: "Leverage our extensive worldwide connections for efficient shipping."
            }, {
              title: "🎯 Customized Solutions",
              description: "Tailored logistics plans designed for your business."
            }, {
              title: "📡 Advanced Technology",
              description: "Real-time tracking & cutting-edge logistics systems."
            }, {
              title: "👨‍✈️ Expert Team",
              description: "Industry professionals with years of logistics experience."
            }, {
              title: "✅ Regulatory Compliance",
              description: "Ensure smooth operations with up-to-date knowledge."
            }, {
              title: "📞 24/7 Support",
              description: "Get help anytime with round-the-clock customer service."
            }].map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-brand-gold">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
                </motion.div>)}
            </div>

            <div className="text-center mt-10">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="shadow-md">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Services;
