import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Plane, Clock, Globe, Headset } from "lucide-react";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
const AirFreight = () => {
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
                  Air Freight Solutions
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
                  Tailored air freight solutions to meet your unique requirements
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
                    <img alt="Air Freight Service" className="w-full h-full object-cover" src="/lovable-uploads/dee91447-9c78-494b-b9f1-b5bb211850fd.png" />
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
                Comprehensive Air Freight Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-gray-700 mb-6 font-normal text-justify">At GGL, we offer a comprehensive range of air freight solutions tailored to meet your time-sensitive and high-priority shipping needs. Our expert air freight teams handle air import, export, and express shipments with precision, offering seamless door-to-door services across global trade lanes.</p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {[{
              icon: <Clock className="h-10 w-10 text-brand-gold" />,
              title: "Time-Definite Deliveries",
              description: "Flexible options including next-flight-out, express, and deferred services to meet critical timelines."
            }, {
              icon: <Plane className="h-10 w-10 text-brand-gold" />,
              title: "Cargo Consolidation",
              description: "Efficient consolidation services to optimize costs and reduce handling time."
            }, {
              icon: <Globe className="h-10 w-10 text-brand-gold" />,
              title: "Specialized Handling",
              description: "Capabilities to manage high-value, sensitive, or perishable cargo with care and compliance."
            }, {
              icon: <Clock className="h-10 w-10 text-brand-gold" />,
              title: "Real-Time Shipment Tracking",
              description: "Full visibility and status updates through integrated tracking systems."
            }, {
              icon: <Headset className="h-10 w-10 text-brand-gold" />,
              title: "Customs Clearance Support",
              description: "End-to-end handling of documentation, customs brokerage, and compliance to streamline international transit."
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
                  <div className="mb-4 bg-green-50 p-3 rounded-full inline-block">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>)}
            </div>
            
            {/* Additional Services */}
            
            
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
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Ship with Us?</h3>
              <p className="mb-6 text-green-50">
                Contact our team today for tailored air freight solutions.
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
export default AirFreight;