import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Globe, Clock, Users, Award, Target, Eye } from 'lucide-react';
const About = () => {
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
                About <span className="text-secondary-foreground">Us</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-50">
                International freight forwarder and logistics provider headquartered in Dammam, Saudi Arabia
              </p>
            </motion.div>
          </div>
        </section>

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
                  
                </h2>
                
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p className="text-base">
                    Arabian Future Net Shipping Company is an international freight forwarder and logistics provider with headquarters in Dammam and branch offices in Jeddah and Riyadh. We offer premium logistics services to businesses worldwide, a wide range of international and domestic transportation and logistics services.
                  </p>
                  
                  <p className="text-base">
                    We provide seamless integration of various transportation modes such as sea freight, air freight and road freight, as well as diversified logistics services in Warehousing, Material Handling. Arabian Future Net is well equipped to handle worldwide door-to-door delivery, custom clearance, dangerous or perishable goods, break bulk / project cargos etc.
                  </p>
                  
                  <p className="text-base">
                    Our organizational structure is simple which makes the communication process very effective and much satisfactory for our clients. Arabian Future Net is part of world's largest network 'World Cargo Alliance' (WCA) and are able to handle shipments to and from any part of the world using our own offices & agents worldwide.
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
                  <img alt="Arabian Future Net Logistics" className="w-full h-[500px] object-cover" src="/lovable-uploads/5393fdcb-7f92-46b2-81be-d1997d8dc3a6.jpg" />
                </div>
                
                
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
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
            }} className="bg-brand-navy p-8 rounded-xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-primary-foreground">Our Vision</h3>
                </div>
                <p className="text-white/90">
                  Arabian Future Net, to be the leading global logistics solution provider through our most advanced systems combined with well experienced logistics professionals.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="bg-brand-green p-8 rounded-xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-primary-foreground">Our Mission</h3>
                </div>
                <p className="text-white/90">
                  To be customers' first choice for customised logistics solutions with integrated processes, advanced WMS & distribution module with e-commerce capability, FCL, LCL, Air Freight, Freight Management, Liquid Transportation solutions, Projects & Break Bulk.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;