import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Ship, Truck, Package, Clock, Shield, Target, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
const About = () => {
  const stats = [{
    number: "15+",
    label: "Years Experience",
    icon: Clock
  }, {
    number: "500+",
    label: "Global Partners",
    icon: Users
  }, {
    number: "50+",
    label: "Countries Served",
    icon: Globe
  }, {
    number: "99%",
    label: "On-Time Delivery",
    icon: Award
  }];
  const services = [{
    icon: Ship,
    title: "Ocean Freight",
    description: "Comprehensive sea freight solutions with global coverage"
  }, {
    icon: Package,
    title: "Air Freight",
    description: "Fast and reliable air cargo services worldwide"
  }, {
    icon: Truck,
    title: "Land Transport",
    description: "Efficient ground transportation and last-mile delivery"
  }, {
    icon: Shield,
    title: "Warehousing",
    description: "Secure storage and inventory management solutions"
  }];
  const features = ["Real-time shipment tracking and visibility", "Dedicated customer service teams", "Strategic global hub network", "Advanced logistics technology platform", "Customs clearance expertise", "Cost-effective LCL consolidation"];
  const lclServices = ["Collecting smaller shipments from multiple clients", "Combining them into a single container at origin", "Managing customs clearance and documentation", "Ensuring secure and timely deconsolidation and final delivery"];
  const globalHubs = ["Singapore", "Malaysia", "Sri Lanka", "Dubai"];
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white px-6 mt-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-50">
                About <span className="text-slate-50">GGL</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-50">
                Singapore's premier logistics company, offering specialized expertise across warehousing, freight forwarding, and transportation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        

        {/* Main About Content */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                 <span className="text-[brand-navy_to-brand-navy/90] text-brand-navy">About Us</span>
                </h2>
                
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p className="text-base">
                    At GGL, we take pride in being one of Singapore's premier logistics companies, offering specialized expertise across warehousing, freight forwarding (air and ocean), and transportation. Our mission is to provide seamless, end-to-end global logistics solutions through a trusted network of partners, each excelling in their respective logistics segments.
                  </p>
                  
                  <p className="text-base">
                    Our experienced team is dedicated to delivering world-class service, tailored to meet the unique needs of each client. Whether it's a custom-built logistics strategy or a full-spectrum solution, we ensure efficiency, reliability, and value every step of the way.
                  </p>
                  
                  <p className="text-base">
                    To enhance customer experience, GGL leverages a powerful, internet-based software platform that offers real-time shipment visibility—from origin to destination. This technology ensures transparency, control, and timely updates, delivering a seamless and differentiated logistics experience.
                  </p>

                  <p className="text-base">
                    Renowned for our exceptional service quality, GGL is recognized as one of the most customer-focused logistics companies in the region. Our ability to consistently deliver dependable and economical solutions has helped us build enduring partnerships with clients around the world.
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="GGL Global Logistics" className="w-full h-[500px] object-cover" src="/lovable-uploads/41795fb5-562d-45d1-a8d3-f26724bc079b.png" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent my-0"></div>
                </div>
                
                {/* Floating cards */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Network</h4>
                      <p className="text-sm text-gray-600">50+ countries worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose GGL Section */}
      <section className="py-20 bg-white px-6">
  <div className="max-w-7xl mx-auto">
    <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Why Choose <span className="text-yellow-500">GGL?</span>
      </h2>
      <div className="text-xl text-gray-600 max-w-4xl mx-auto space-y-6 text-left">
        
        
        <p className="text-base my-0">At GGL, we believe logistics is more than just moving goods — it’s about delivering trust. Our team combines sharp attention to detail with a service-first mindset, ensuring every shipment is handled with care, precision, and efficiency. We pride ourselves on being responsive, proactive, and fully aligned with our clients’ needs. From documentation to delivery, we go the extra mile so you don’t have to.</p>
      </div>
    </motion.div>
  </div>
      </section>


        {/* LCL Consolidation Section */}
        

        {/* Services Grid */}
        

        {/* CTA Section */}
        
      </main>

      <Footer />
    </div>;
};
export default About;