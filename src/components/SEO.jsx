import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = 'Axle Solutions - Powering Your Digital Drive',
  description = 'Professional DevOps consulting, cloud solutions, and custom software development services. Transform your business with expert technology solutions.',
  keywords = 'DevOps, cloud solutions, software development, web development, mobile app development, AWS, Azure, custom software, IT consulting',
  image = 'https://www.axlesolutions.web.lk/og-image.jpg',
  type = 'website',
  author = 'Axle Solutions',
  canonical = ''
}) => {
  const location = useLocation();
  const siteUrl = 'https://www.axlesolutions.web.lk'; // Update with your actual domain
  const currentUrl = canonical || `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Axle Solutions" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@axlesolutions" />
      <meta property="twitter:creator" content="@axlesolutions" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
