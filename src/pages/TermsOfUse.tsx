import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { client } from '../../client';
import { PortableText } from '@portabletext/react';
import { Seo } from '@/components/common/Seo';

const TermsOfUsePage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`
        *[_type == "legalPage" && title == "Terms of Use"][0] {
          title,
          lastUpdated,
          content,
          seo
        }
      `);
      setData(result);
    };
    fetchData();
  }, []);

  const components = {
    block: {
      h2: ({children}: any) => <h2 className="text-xl font-semibold mt-6 mb-2">{children}</h2>,
      normal: ({children}: any) => <p className="mb-4">{children}</p>,
    },
    list: {
      bullet: ({children}: any) => <ul className="list-disc ml-6 mt-2 mb-4">{children}</ul>,
    },
    marks: {
      strong: ({children}: any) => <strong>{children}</strong>,
    }
  };

  return (
    <>
      <Seo data={data?.seo} defaultTitle="Terms of Use" />
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <h1 className="text-3xl font-bold mb-6 text-center">{data?.title || 'Terms of Use Agreement for the Website'}</h1>

        {data?.content && <PortableText value={data.content} components={components} />}
      </main>
      <Footer />
    </>
  );
};

export default TermsOfUsePage;
