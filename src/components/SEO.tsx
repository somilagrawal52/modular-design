import { Helmet } from 'react-helmet-async';
import { SITE_STUDIO_NAME } from '../config/siteMode';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title,
  description,
  name = SITE_STUDIO_NAME,
  type = 'website',
  image = 'https://modular-design-flax.vercel.app/images/modular-hotel-realistic.jpg',
  url = 'https://modular-design-flax.vercel.app/'
}: SEOProps) {
  const fullTitle = `${title} | ${name}`;
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
