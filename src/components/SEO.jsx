import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
    const siteTitle = 'MCT - Ease Band';
    const displayTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = 'MCT Ease Band - A revolutionary wearable for menstrual pain relief. Designed with care, engineered for comfort.';
    const siteUrl = 'https://medcaretech.in'; // Placeholder, user can update
    const currentUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{displayTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || 'menstrual relief, wearable technology, MCT, Ease Band, pain relief, health tech'} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph (Facebook/LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={displayTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            {/* <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />  Placeholder for OG Image */}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={displayTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            {/* <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} /> Placeholder for Twitter Image */}
        </Helmet>
    );
};

export default SEO;
