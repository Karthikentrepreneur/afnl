import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
const OceanFreight = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text Section */}
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
                  Ocean Freight Solutions
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
                  Connecting you globally with comprehensive ocean freight services
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
                  <Link to="/contact" className="px-6 py-3 bg-brand-gold hover:bg-amber-400 text-brand-navy font-medium rounded-md shadow-md transition-all">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>

              {/* Image Section */}
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
                    <img alt="Ocean Freight Service" src="/lovable-uploads/2505b196-c548-4e6f-b9af-68ce9c9dff10.png" className="w-full h-full object-cover" />
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
                Comprehensive Ocean Freight Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
              <p className="text-gray-700 mb-6 text-justify">At GGL, our dedicated Ocean Freight Department specializes in comprehensive
freight management services for both Less-than-Container Load (LCL) and Full
Container Load (FCL) shipments. Leveraging a well-established, reliable global
partner network, we ensure efficient coordination of every step—from collection
at the shipper’s door, through secure storage and customs brokerage, to timely
delivery at the consignee’s door. Our end-to-end service seamlessly integrates
customs clearance and compliance, minimizing delays and ensuring smooth
transit across borders.</p>
              <p className="text-gray-700 mb-6 text-justify">We offer a broad range of scheduled and multi-route services that connect key
global economies, providing flexible options to meet diverse shipping needs. Our
specialized Carrier Pricing Department works closely with clients to design
customized freight solutions tailored to specific transit times, cost targets, and
cargo requirements, ensuring optimal value and performance.</p>
              <p className="text-gray-700 mb-6 text-justify">Transparency and communication are core to our service philosophy. Through a
user-friendly, menu-driven tracking system, clients can select which shipment
milestones they wish to be notified about, avoiding unnecessary alerts while
keeping them informed of critical updates. This personalized approach to

communication enhances visibility and peace of mind throughout the shipping
process.</p>
              <p className="text-gray-700 mb-6 text-justify">Backed by extensive industry expertise and a commitment to excellence, GGL’s
Ocean Freight Department delivers reliable, efficient, and cost-effective global
shipping solutions designed to support your business growth and logistics needs.</p>
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
          }} className="bg-gradient-to-r from-brand-navy to-blue-700 rounded-xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Ship Your Cargo?</h3>
              <p className="mb-6 text-blue-50">
                Contact our team today for tailored ocean freight solutions.
              </p>
              <Link to="/contact" className="inline-block bg-white text-brand-navy px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default OceanFreight;