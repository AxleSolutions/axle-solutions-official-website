import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = 'Axle Solutions - Powering Your Digital Drive',
  description = 'Professional DevOps consulting, cloud solutions, and custom software development services. Transform your business with expert technology solutions.',
  keywords = 'DevOps, cloud solutions, software development, web development, mobile app development, AWS, Azure, custom software, IT consulting',
  image = 'https://axle-solutions.vercel.app/og-image.jpg',
  type = 'website',
  author = 'Axle Solutions',
  canonical = ''
}) => {
  const location = useLocation();
  const siteUrl = 'https://axle-solutions.vercel.app'; // Update with your actual domain
  const currentUrl = canonical || `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Axle Solutions', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@axlesolutions');
    updateMetaTag('twitter:creator', '@axlesolutions');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Structured Data (JSON-LD)
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Axle Solutions",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.svg`,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "LK"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@axlesolutions.com",
        "contactType": "Customer Service"
      },
      "sameAs": [
        "https://github.com/axle-solutions",
        "https://www.linkedin.com/company/axle-solutions"
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, type, author, currentUrl, location]);

  return null;
};

export default SEO;
