import React from 'react';

const SEO = ({ title, description, keywords, url }) => {
    const siteTitle = 'MCT - Ease Band';
    const displayTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = 'MCT Ease Band - A revolutionary wearable for menstrual pain relief. Designed with care, engineered for comfort.';
    const siteUrl = 'https://medcaretech.in'; // Placeholder, user can update
    const currentUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <>
            {/* Basic Meta Tags - React 19 supports these directly in render */}
            <title>{displayTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || 'menstrual relief, wearable technology, MCT, Ease Band, pain relief, health tech'} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph (Facebook/LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={displayTitle} />
            <meta property="og:description" content={description || defaultDescription} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={displayTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
        </>
    );
};

export default SEO;
