import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_SITE_URL = 'https://avishekadhikary.in';
const DEFAULT_TITLE = 'Avishek Adhikary — Full Stack Developer & Backend Engineer';
const DEFAULT_DESCRIPTION = 'Portfolio of Avishek Adhikary, a Full Stack Developer based in Kolkata, India. Specializing in Node.js, React, distributed backend systems, cloud hosting, and AI applications.';
const DEFAULT_IMAGE = `${DEFAULT_SITE_URL}/meAvi.jpeg`;

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noindex = false,
  schema,
}) {
  const location = useLocation();
  const currentUrl = canonical || `${DEFAULT_SITE_URL}${location.pathname}`;

  useEffect(() => {
    // 1. Page Title
    document.title = title;

    // Helper function to set or create meta tags
    const updateMeta = (nameAttr, nameValue, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    updateMeta('name', 'description', description);
    updateMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // 3. Open Graph Tags
    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:type', ogType);
    updateMeta('property', 'og:url', currentUrl);
    updateMeta('property', 'og:image', ogImage);
    updateMeta('property', 'og:site_name', 'Avishek Adhikary Portfolio');
    updateMeta('property', 'og:locale', 'en_US');

    // 4. Twitter Card Tags
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:site', '@avishek0769');
    updateMeta('name', 'twitter:creator', '@avishek0769');
    updateMeta('name', 'twitter:title', title);
    updateMeta('name', 'twitter:description', description);
    updateMeta('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. JSON-LD Structured Data
    const scriptId = 'json-ld-schema';
    let scriptTag = document.getElementById(scriptId);

    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up script tag on unmount if needed
    };
  }, [title, description, currentUrl, ogImage, ogType, noindex, schema]);

  return null;
}
