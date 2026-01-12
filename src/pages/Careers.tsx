import React, { useEffect, useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Users, TrendingUp, Heart, Globe, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from '../../client';
import { urlFor } from '../../image';
import { Seo } from '@/components/common/Seo';

const Careers = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`
        *[_type == "careersPage"][0] {
          hero,
          benefits,
          cta,
          seo
        }
      `);
      setData(result);
    };
    fetchData();
  }, []);

  const defaultContent = {
    hero: {
      title: 'Join Our Global Team',
      description: "Build your career with one of Singapore's leading logistics companies. We're looking for passionate individuals to join our mission of connecting the world through exceptional logistics solutions.",
      image: null
    },
    benefits: {
      title: 'Why Choose GGL?',
      description: 'At GGL, we believe our people are our greatest asset. We foster an environment where talent thrives and careers flourish.',
      items: [
        { title: "Global Opportunities", description: "Work with diverse teams across multiple countries.", icon: "Globe" },
        { title: "Career Growth", description: "Continuous learning and development programs.", icon: "TrendingUp" },
        { title: "Inclusive Culture", description: "A workplace that values every individual's contribution.", icon: "Heart" }
      ]
    },
    cta: {
      title: 'Ready to Start Your Journey?',
      description: "Don't see the right position? Send us your resume and we'll keep you in mind for future opportunities.",
      image: null
    },
    seo: null
  };

  const displayData = data || defaultContent;

  const getIcon = (iconName: string) => {
    const icons: any = {
      Users: <Users className="h-6 w-6 text-brand-gold" />,
      TrendingUp: <TrendingUp className="h-6 w-6 text-brand-gold" />,
      Heart: <Heart className="h-6 w-6 text-brand-gold" />,
      Globe: <Globe className="h-6 w-6 text-brand-gold" />,
      Award: <Award className="h-6 w-6 text-brand-gold" />,
      Target: <Target className="h-6 w-6 text-brand-gold" />,
    };
    return icons[iconName] || <Users className="h-6 w-6 text-brand-gold" />;
  };

  return <div className="min-h-screen flex flex-col">
      <Seo data={displayData?.seo} defaultTitle="Careers" />
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white py-16 overflow-hidden">
          {displayData?.hero?.image && (
            <div className="absolute inset-0 z-0">
              <img 
                src={urlFor(displayData.hero.image).url()} 
                alt="Careers Hero" 
                className="w-full h-full object-cover opacity-20"
              />
            </div>
          )}
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center max-w-3xl mx-auto relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-50">
                {displayData?.hero?.title || 'Join Our Global Team'}
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                {displayData?.hero?.description || "Build your career with one of Singapore's leading logistics companies. We're looking for passionate individuals to join our mission of connecting the world through exceptional logistics solutions."}
              </p>
              <Button variant="gold" size="lg" className="font-semibold">
                View Open Positions
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">{displayData?.benefits?.title || 'Why Choose GGL?'}</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {displayData?.benefits?.description || 'At GGL, we believe our people are our greatest asset. We foster an environment where talent thrives and careers flourish.'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayData?.benefits?.items?.map((benefit: any, index: number) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-brand-gold">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        {getIcon(benefit.icon)}
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Open Positions (Updated to show Coming Soon) */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Current Opportunities</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore exciting career opportunities across our various departments and locations.
              </p>
            </motion.div>

            <div className="text-center text-gray-500 text-xl font-medium">Career opportunities coming soon. Stay tuned!</div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white relative overflow-hidden">
          {displayData?.cta?.image && (
            <div className="absolute inset-0 z-0">
              <img 
                src={urlFor(displayData.cta.image).url()} 
                alt="CTA Background" 
                className="w-full h-full object-cover opacity-20"
              />
            </div>
          )}
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-slate-50">{displayData?.cta?.title || 'Ready to Start Your Journey?'}</h2>
              <p className="text-xl mb-8 text-blue-100">
                {displayData?.cta?.description || "Don't see the right position? Send us your resume and we'll keep you in mind for future opportunities."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" className="font-semibold">
                  Submit Your Resume
                </Button>
                <Button variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-brand-navy">
                  Contact HR
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Careers;