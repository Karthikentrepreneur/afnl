import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Warehouse, Package, Box, Globe, FileCheck, Shield, Truck, MapPin, Timer, Gauge } from "lucide-react";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
const Warehousing = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <motion.h1 initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Warehousing Solutions
                </motion.h1>
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} className="text-lg text-gray-700 mb-6">
                  Premier supply chain solutions for efficient storage and distribution
                </motion.p>
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }}>
                  <Link to="/contact" className="px-6 py-3 bg-amber-400 hover:bg-amber-400 text-brand-navy font-medium rounded-md shadow-md transition-all opacity-100\n">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5
              }} className="rounded-xl overflow-hidden shadow-xl">
                  <AspectRatio ratio={16 / 9}>
                    <img alt="Warehousing Service" className="w-full h-full object-cover" src="/warehouse2.png" />
                  </AspectRatio>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                Comprehensive Warehousing Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-gray-700 mb-6 text-justify">GGL is a leading supply chain solutions provider in Singapore, offering end-to-
end logistics services tailored to a wide range of industries. We manage the full
flow of goods—from suppliers to manufacturers (parts and components), from

manufacturers to resellers and consumers (finished products), and from
consumers back to OEMs (returns and spares).</p>
            <p className="text-gray-700 mb-6 text-justify">Our advanced warehouses are fully equipped with cutting-edge Warehouse
Management Systems (WMS), providing complete visibility, real-time inventory
control, and features like online picking and automated reorder notifications.</p>
            <p className="text-gray-700 mb-6 text-justify">Our skilled warehouse team is experienced in handling diverse client needs and is
supported by specialized teams in forwarding and land transportation, ensuring
seamless integration across the supply chain.</p>
             <p className="text-gray-700 mb-6 text-justify">With scalable, efficient, and reliable solutions, GGL helps businesses streamline
operations and drive long-term growth.</p>
            </div>
            
            {/* Storage and Distribution Services */}
            
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {[{
              title: "Consolidation & Deconsolidation",
              description: "",
              icon: <Package className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Pick & Pack",
              description: "",
              icon: <Box className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Storage & Distribution",
              description: "",
              icon: <Globe className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Inventory & Purchase Order Management",
              description: "",
              icon: <Timer className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Value-Added Services (labelling, kitting, inspections)",
              description: "",
              icon: <Shield className="h-5 w-5 text-brand-gold" />
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
            }} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="mb-3 bg-green-50 p-2 rounded-full inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>)}
            </div>
            
            {/* CTA Section */}
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
          }} className="bg-gradient-to-r from-primary to-green-700 rounded-xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Optimize Your Storage?</h3>
              <p className="mb-6 text-green-50">
                Contact our team today for tailored warehousing solutions.
              </p>
              <Link to="/contact" className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Warehousing;