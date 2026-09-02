import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_STUDIO_NAME } from '../config/siteMode';

interface SEOProps {
  title?: string;
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
  image = '/images/modular-capsule-desert-retreat-hero.png',
  url
}: SEOProps) {
  const location = useLocation();
  const siteUrl = 'https://modular-design-flax.vercel.app';
  const canonicalUrl = url ?? `${siteUrl}${location.pathname}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const fullTitle = title ? `${name} — ${title}` : name;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#050505" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
