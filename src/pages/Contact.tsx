import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const offices = [
    {
      city: "Dammam (Headquarter)",
      cr: "CR No: 2050159935",
      address: "Building No.2817, Secondary No9403, King Faisal Road, Al Tubebayshi Dist. Dammam, KSA 32233",
      phone: "+966 13 343 0003",
      direct: "+966 13 849 8630/8631"
    },
    {
      city: "Riyadh",
      cr: "CR No: 1010867642",
      address: "Room No. T18, Rail Business Centre, Bldg No. 3823, Omar Aimukhtar St, Thulaim, Riyadh 11332",
      phone: "+966 11295 0020",
      direct: "+966 13 849 8639"
    },
    {
      city: "Jeddah",
      cr: "CR No: 4030498909",
      address: "Room No: 408, Saudi Business Centre 7859, Al-Madinah Al-Munawarah Road, Al Sharafeyah, Jeddah 4542-22234",
      phone: "+966 12 578 0874",
      direct: "+966 13 849 8632/8633"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      
      <main className="flex-grow">
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/90" />
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-center px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get in Touch</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-light">
              We're here to help and answer any questions you might have.
            </p>
          </motion.div>
        </motion.section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <h3 className="text-lg font-semibold text-brand-navy mb-2">{office.city}</h3>
                      <p className="text-sm text-gray-500 mb-2">{office.cr}</p>
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin className="mt-1 text-brand-green flex-shrink-0" size={16} />
                        <p className="text-gray-600 text-sm">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="text-brand-green" size={16} />
                        <p className="text-gray-600 text-sm">{office.phone}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4">
                    <div className="flex items-center gap-2">
                      <Mail className="text-brand-green" size={16} />
                      <p className="text-gray-600">info.sa@futurenetlogistics.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" {...register("firstName")} />
                    <Input placeholder="Last Name" {...register("lastName")} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Email" type="email" {...register("email")} />
                    <Input placeholder="Phone" {...register("phone")} />
                  </div>
                  <Input placeholder="Organization/Company" {...register("organization")} />
                  <Textarea placeholder="Your Message" className="min-h-[120px]" {...register("message")} />
                  <Button type="submit" className="w-full text-white py-6 bg-brand-navy hover:bg-brand-navy/90">
                    Send Message <Send size={18} className="ml-2" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
