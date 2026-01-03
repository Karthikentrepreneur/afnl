import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Boxes, Package, Truck, Globe, Shield, Timer, Warehouse, BarChart3, Settings } from "lucide-react";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ThreePL = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                >
                  3PL Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  End-to-end third-party logistics solutions for your business
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-brand-green hover:bg-emerald-600 text-white font-medium rounded-md shadow-md transition-all"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl overflow-hidden shadow-xl"
                >
                  <AspectRatio ratio={16 / 9}>
                    <img
                      alt="3PL Services"
                      className="w-full h-full object-cover"
                      src="/lovable-uploads/warehouse.jpg"
                    />
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
                Comprehensive 3PL Solutions
              </h2>
              <div className="w-24 h-1 bg-brand-green mx-auto mb-8"></div>
              <p className="text-gray-700 mb-6 text-justify">
                Arabian Future Net offers complete third-party logistics (3PL) services designed to streamline your supply chain operations. We manage the entire logistics process from warehousing and inventory management to order fulfillment and distribution.
              </p>
              <p className="text-gray-700 mb-6 text-justify">
                Our 3PL solutions are tailored to meet the unique needs of each client, providing flexibility, scalability, and cost-effectiveness. We leverage advanced technology and industry expertise to optimize your logistics operations.
              </p>
              <p className="text-gray-700 mb-6 text-justify">
                With our 3PL services, you can focus on your core business while we handle the complexities of logistics, warehousing, and distribution with precision and reliability.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  title: "Warehousing & Storage",
                  description: "Secure storage facilities with advanced inventory management",
                  icon: <Warehouse className="h-5 w-5 text-brand-green" />
                },
                {
                  title: "Order Fulfillment",
                  description: "Efficient pick, pack, and ship services for timely delivery",
                  icon: <Package className="h-5 w-5 text-brand-green" />
                },
                {
                  title: "Distribution Management",
                  description: "Optimized distribution networks for cost-effective delivery",
                  icon: <Truck className="h-5 w-5 text-brand-green" />
                },
                {
                  title: "Inventory Control",
                  description: "Real-time inventory tracking and automated reordering",
                  icon: <BarChart3 className="h-5 w-5 text-brand-green" />
                },
                {
                  title: "Global Reach",
                  description: "International logistics support across multiple markets",
                  icon: <Globe className="h-5 w-5 text-brand-green" />
                },
                {
                  title: "Returns Management",
                  description: "Streamlined reverse logistics and returns processing",
                  icon: <Settings className="h-5 w-5 text-brand-green" />
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous quality control at every stage of the process",
                  icon: <Shield className="h-5 w-5 text-brand-green" />
                },
                {
                  title: "Fast Turnaround",
                  description: "Quick processing times to meet your delivery deadlines",
                  icon: <Timer className="h-5 w-5 text-brand-green" />
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="mb-3 bg-emerald-50 p-2 rounded-full inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-green to-emerald-600 rounded-xl text-white p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Optimize Your Logistics?</h3>
              <p className="mb-6 text-emerald-50">
                Contact our team today for tailored 3PL solutions that drive efficiency and growth.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-brand-green px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThreePL;