import React, { useState, useEffect } from 'react';

// Helper function to create absolute URLs for meta tags
const absoluteUrl = (path) => {
    // Replace with your actual domain in production
    const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5173';
    try {
        return new URL(path, baseUrl).href;
    } catch (e) {
        return path; // Fallback for invalid paths
    }
};

export default function Meta({
    title = "Zelalem Belay - Web Developer",
    description = "The portfolio of Zelalem Belay, a passionate web developer specializing in creating modern and responsive web applications.",
    image = "/og-image.png", // A default Open Graph image in your `public` folder
    children
}) {
    const siteName = "Zelalem Belay's Portfolio";
    const imageUrl = absoluteUrl(image);
    const [pageUrl, setPageUrl] = useState('');

    useEffect(() => {
        // `window.location` is only available in the browser.
        // We set the pageUrl inside a useEffect hook to ensure this code
        // only runs on the client, after the component has mounted.
        // This makes the component safe for Server-Side Rendering (SSR) or
        // build-time rendering.
        setPageUrl(absoluteUrl(window.location.pathname + window.location.search));
    }, []);

    // Basic structured data for a person
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Zelalem Belay",
        "url": absoluteUrl('/'),
        "jobTitle": "Web Developer",
        "image": imageUrl,
        "description": description,
        "sameAs": [
            // TODO: Add your social media links here
            // "https://twitter.com/yourhandle",
            // "https://www.linkedin.com/in/yourprofile/",
            // "https://github.com/yourusername"
        ]
    };

    return (
        <>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

            {/* Render any custom children passed to Meta */}
            {children}
        </>
    );
}