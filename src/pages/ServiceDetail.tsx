import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { client } from '../../client';
import { urlFor } from '../../image';
import { PortableText } from '@portabletext/react';
import { Seo } from '@/components/common/Seo';
import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Loader2, ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      setLoading(true);
      try {
        const result = await client.fetch(`
          *[_type == "service" && slug.current == $slug][0] {
            title,
            description,
            mainImage,
            content,
            publishedAt
          }
        `, { slug });
        setData(result);
      } catch (error) {
        console.error("Error fetching service:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center min-h-[50vh]">
          <Loader2 className="h-8 w-8 animate-spin text-brand-gold" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center p-4 text-center min-h-[50vh]">
          <h1 className="text-2xl font-bold mb-4 text-brand-navy">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you are looking for does not exist.</p>
          <Link to="/services" className="inline-flex items-center text-brand-gold hover:text-amber-600 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Seo 
        data={{ 
          metaTitle: `${data.title} - Services`, 
          metaDescription: data.description 
        }} 
        defaultTitle={data.title} 
      />
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-navy to-slate-900 py-12 md:py-20 text-white relative overflow-hidden">
           {/* Background Image Overlay */}
           {data.mainImage && (
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src={urlFor(data.mainImage).url()} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-4"
              >
                <Link to="/services" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 text-sm font-medium">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Link>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                {data.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
              >
                {data.description}
              </motion.p>
              {data.publishedAt && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.3 }}
                  className="text-sm text-blue-300 mt-4"
                >
                  Published on: {new Date(data.publishedAt).toLocaleDateString()}
                </motion.p>
              )}
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
              {data.mainImage && (
                <div className="mb-10 rounded-xl overflow-hidden shadow-md">
                  <AspectRatio ratio={21 / 9}>
                    <img 
                      alt={data.title} 
                      className="w-full h-full object-cover" 
                      src={urlFor(data.mainImage).url()} 
                    />
                  </AspectRatio>
                </div>
              )}

              <div className="prose prose-lg max-w-none text-gray-700">
                {data.content ? (
                  <PortableText value={data.content} />
                ) : (
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed">
                      {data.description}
                    </p>
                    <p className="text-gray-500 italic">
                      Detailed information for this service is being updated. Please contact us for more details.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold mb-4 text-brand-navy">Need {data.title} Solutions?</h3>
                <p className="mb-8 text-gray-700 max-w-2xl mx-auto">
                  Our team of experts is ready to help you optimize your logistics with our premium {data.title.toLowerCase()} services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="inline-block bg-brand-navy text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-lg">
                    Get a Quote
                  </Link>
                  <Link to="/services" className="inline-block bg-white text-brand-navy border border-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;