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

  const offices = data?.offices || [];

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
