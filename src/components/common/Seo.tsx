import React, { useEffect } from 'react';
import { urlFor } from '../../../image';

interface SeoProps {
  data?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    openGraphImage?: any;
  };
  defaultTitle?: string;
}

export const Seo: React.FC<SeoProps> = ({ data, defaultTitle }) => {
  const title = data?.metaTitle || defaultTitle || 'GGL (Singapore)';
  const description = data?.metaDescription || '';
  const keywords = data?.keywords?.join(', ') || '';
  const ogImage = data?.openGraphImage ? urlFor(data.openGraphImage).width(1200).height(630).url() : '';

  useEffect(() => {
    document.title = title;

    const updateMeta = (selector: string, attribute: string, value: string) => {
      if (!value) return;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        // Parse selector to set attributes (simplified)
        if (selector.includes('name=')) element.setAttribute('name', selector.split('"')[1]);
        if (selector.includes('property=')) element.setAttribute('property', selector.split('"')[1]);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    updateMeta('meta[name="description"]', 'content', description);
    updateMeta('meta[name="keywords"]', 'content', keywords);
    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[property="og:image"]', 'content', ogImage);

  }, [title, description, keywords, ogImage]);

  return null;
};