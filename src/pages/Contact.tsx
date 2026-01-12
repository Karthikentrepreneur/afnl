import React, { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import QuickEnquiry from "@/components/home/QuickEnquiry";
import { client } from '../../client';
import { Seo } from '@/components/common/Seo';

const Contact = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`
        *[_type == "contactPage"][0] {
          hero,
          offices,
          seo
        }
      `);
      setData(result);
    };
    fetchData();
  }, []);

  const defaultOffices = [
    {
      city: "Dammam (Head Office)",
      cr: "CR: 2050064883",
      address: "King Khalid Street, Al-Gluss Tower, 11th Floor, Office No. 1103, P.O. Box: 6642, Dammam 31452, Kingdom of Saudi Arabia",
      phone: "+966 13 835 2255",
      email: "info@afnl.com.sa",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.697072667634!2d50.10777831503556!3d26.43333398333636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb6c6c6c6c6d%3A0x6c6c6c6c6c6c6c6d!2sAl%20Gluss%20Tower!5e0!3m2!1sen!2ssa!4v1625000000000!5m2!1sen!2ssa"
    },
    {
      city: "Jeddah",
      cr: "CR: 4030260662",
      address: "Al-Madina Road, Al-Sharafia District, Al-Sharafia Plaza, 2nd Floor, Office No. 203, P.O. Box: 12345, Jeddah 21473, Kingdom of Saudi Arabia",
      phone: "+966 12 650 0000",
      email: "jeddah@afnl.com.sa",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.697072667634!2d39.10777831503556!3d21.43333398333636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI2JzAwLjAiTiAzOcKwMDYnMjguMCJF!5e0!3m2!1sen!2ssa!4v1625000000000!5m2!1sen!2ssa"
    },
    {
      city: "Riyadh",
      cr: "CR: 1010449266",
      address: "Olaya Street, Al-Olaya District, Al-Olaya Center, 3rd Floor, Office No. 305, P.O. Box: 54321, Riyadh 11593, Kingdom of Saudi Arabia",
      phone: "+966 11 460 0000",
      email: "riyadh@afnl.com.sa",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.697072667634!2d46.67527831503556!3d24.71361198333636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMCJF!5e0!3m2!1sen!2ssa!4v1625000000000!5m2!1sen!2ssa"
    }
  ];

  const offices = data?.offices || defaultOffices;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Seo data={data?.seo} defaultTitle="Contact Us" />
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/90" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {data?.hero?.title || 'Contact Us'}
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              {data?.hero?.subtitle || 'Reach out or visit any of our offices across Saudi Arabia'}
            </p>
          </div>
        </section>

        {/* OFFICES */}
        <section className="py-16">
          <div className="container mx-auto px-4 space-y-12">
            {offices.map((office: any, index: number) => (
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
                  {office.mapUrl && (
                    <iframe
                      src={office.mapUrl}
                      className="map-iframe"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  )}
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
