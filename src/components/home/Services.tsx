import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Plane,
  ArrowRight,
  Truck,
  Package,
  Anchor,
  Warehouse,
  FileCheck
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

/* -------------------- Service Card -------------------- */

const EnhancedServiceCard = ({
  image,
  title,
  description,
  icon,
  link
}: {
  image: string;
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg"
    >
      <Link
        to={link}
        onClick={() => window.scrollTo(0, 0)}
        className="flex h-full flex-col"
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <AspectRatio ratio={16 / 10}>
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
        </div>

        {/* Content */}
        <div className="flex flex-grow flex-col gap-3 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-white">
              {React.cloneElement(icon, { size: 18 })}
            </div>
            <h3 className="text-base font-semibold text-brand-navy">
              {title}
            </h3>
          </div>

          <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
            {description}
          </p>

          <div className="mt-auto flex items-center pt-2 text-sm font-medium text-brand-green">
            Learn More
            <motion.span
              className="ml-2"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* -------------------- Services Section -------------------- */

export const Services = () => {
  const services = [
    {
      image: "/lovable-uploads/oceanfrieght.jpg",
      title: "Ocean Freight",
      description:
        "Complete FCL and LCL services with flexible sailings, transparent pricing, and a reliable global partner network.",
      icon: <Anchor />,
      link: "/services/ocean-freight"
    },
    {
      image: "/cargoplane.png",
      title: "Air Freight",
      description:
        "Time-critical air freight solutions with global reach, priority handling, and optimized carrier selection.",
      icon: <Plane />,
      link: "/services/air-freight"
    },
    {
      image: "/lovable-uploads/cc.jpg",
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
      image: "/lovable-uploads/warehouse.jpg",
      title: "Warehousing",
      description:
        "Secure storage, inventory management, and value-added warehousing solutions for modern supply chains.",
      icon: <Warehouse />,
      link: "/services/warehousing"
    },
    {
      image: "/projectcargo3.png",
      title: "Project Cargo",
      description:
        "Expert handling of oversized, heavy-lift, and complex cargo for infrastructure and industrial projects.",
      icon: <Package />,
      link: "/services/project-cargo"
    },
    {
      image: "/lovable-uploads/warehouse.jpg",
      title: "3PL Services",
      description:
        "End-to-end third-party logistics solutions including warehousing, distribution, and supply chain management.",
      icon: <Warehouse />,
      link: "/services/3pl"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="bg-gradient-to-b from-white to-brand-lightGray py-14"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">
            Our Core Services
          </h2>
          <div className="mx-auto mb-5 mt-4 h-1 w-24 rounded bg-brand-green" />
          <p className="mx-auto max-w-xl text-sm text-gray-600 md:text-base">
            Comprehensive logistics solutions designed to support global trade
            with reliability, efficiency, and scale.
          </p>
        </motion.div>

        {/* Grid: 4 cards first row, 3 cards second row */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12"
        >
          {services.map((service, index) => {
            const colSpan =
              index < 4 ? "lg:col-span-3" : "lg:col-span-4";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`h-full ${colSpan}`}
              >
                <EnhancedServiceCard {...service} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center"
        >
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            <Button className="group flex items-center gap-3 rounded-full bg-brand-navy px-6 py-2 text-sm text-white hover:bg-brand-navy/90">
              Explore All Services
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
