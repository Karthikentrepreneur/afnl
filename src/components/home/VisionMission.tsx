import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-brand-navy p-6 rounded-lg text-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-7 h-7 text-brand-green" />
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>
            <p className="text-white/90 text-sm">
              FUTURE NET, to be the leading global logistics solution provider thru our most advanced systems combined with well experienced logistics professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-brand-green p-6 rounded-lg text-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-7 h-7 text-white" />
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>
            <p className="text-white/90 text-sm">
              FUTURE NET, to be customers first choice for following services : Customised logistics solutions with integrated processes with clients thru our most advanced WMS & distribution module with e-commerce capability. FCL, LCL, Air Freight & Freight Management, Liquid Transportation solutions Projects & Break Bulk.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
