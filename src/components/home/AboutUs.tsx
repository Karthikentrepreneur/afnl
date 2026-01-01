import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }} 
          viewport={{ once: true }} 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4 text-base text-justify">
              Arabian Future Net Shipping Company is an international freight forwarder and logistics provider with headquarters in Dammam and branch offices in Jeddah and Riyadh. We offer premium logistics services to businesses worldwide, including a wide range of international and domestic transportation and logistics services.
            </p>
            <p className="text-gray-600 mb-6 text-base text-justify">
              We provide seamless integration of various transportation modes such as sea freight, air freight and road freight, as well as diversified logistics services in Warehousing and Material Handling. Arabian Future Net is well equipped to handle worldwide door-to-door delivery, custom clearance, dangerous or perishable goods, break bulk / project cargos etc.
            </p>
            <Link to="/about">
              <Button variant="outline" size="sm" className="text-sm border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="w-full max-w-md aspect-square overflow-hidden rounded-lg shadow-lg">
              <img 
                alt="About Us" 
                loading="lazy" 
                className="w-full h-full object-cover rounded-lg" 
                src="/lovable-uploads/3c0c858f-8cb2-4284-b2f7-ea7bf2b6d6df.png" 
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
