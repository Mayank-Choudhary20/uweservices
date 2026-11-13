import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_OG_IMAGE = "https://uweservices.com/og-image.png";

export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[name="title"]', "name", "title", title);

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);
    setMetaTag('meta[property="og:locale"]', "property", "og:locale", "en_IN");
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "UWe Service");

    // 4. Twitter Tags
    setMetaTag('meta[property="twitter:title"]', "property", "twitter:title", title);
    setMetaTag('meta[property="twitter:description"]', "property", "twitter:description", description);
    setMetaTag('meta[property="twitter:url"]', "property", "twitter:url", canonicalUrl);
    setMetaTag('meta[property="twitter:image"]', "property", "twitter:image", ogImage);

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // 6. Structured Data (JSON-LD)
    const scriptId = "dynamic-seo-schema";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = scriptId;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalUrl, ogType, ogImage, schema]);

  return null;
}
