import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import QuickEnquiry from "@/components/home/QuickEnquiry";

const offices = [
  {
    city: "Dammam (Headquarter)",
    cr: "CR No: 2050159935",
    address:
      "Building No.2817, Secondary No9403, King Faisal Road, Al Tubebayshi Dist., Dammam, KSA 32233",
    phone: "+966 13 343 0003",
    email: "info.sa@futurenetlogistics.com",
    map: "https://www.google.com/maps/d/embed?mid=1PGeR21X0gkhMgwbEQ1wziKMNJxtPLtA&ehbc=2E312F&noprof=1",
  },
  {
    city: "Riyadh",
    cr: "CR No: 1010867642",
    address:
      "Room No. T18, Rail Business Centre, Bldg No. 3823, Omar Aimukhtar St, Thulaim, Riyadh 11332",
    phone: "+966 11295 0020",
    email: "info.sa@futurenetlogistics.com",
    map: "https://www.google.com/maps/d/embed?mid=1FX9YaRjZDnKIpTb7ysNk8hs42t0m8kQ&ehbc=2E312F&noprof=1",
  },
  {
    city: "Jeddah",
    cr: "CR No: 4030498909",
    address:
      "Room No: 408, Saudi Business Centre 7859, Al-Madinah Al-Munawarah Road, Al Sharafeyah, Jeddah 4542-22234",
    phone: "+966 12 578 0874",
    email: "info.sa@futurenetlogistics.com",
    map: "https://www.google.com/maps/d/embed?mid=1nCIw5f2uLw0g_6L6jZDYZRKv8IXf_2M&ehbc=2E312F&noprof=1",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/90" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Reach out or visit any of our offices across Saudi Arabia
            </p>
          </div>
        </section>

        {/* OFFICES */}
        <section className="py-16">
          <div className="container mx-auto px-4 space-y-12">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* LEFT – ADDRESS */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-1">
                    {office.city}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{office.cr}</p>

                  <div className="flex items-start gap-2 mb-3">
                    <MapPin size={18} className="text-brand-green mt-1" />
                    <p className="text-gray-600 leading-relaxed">
                      {office.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Phone size={18} className="text-brand-green" />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-brand-green" />
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                </div>

                {/* RIGHT – MAP */}
                <div className="map-wrapper border">
                  <iframe
                    src={office.map}
                    className="map-iframe"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <QuickEnquiry />
      <Footer />
    </div>
  );
};

export default Contact;

