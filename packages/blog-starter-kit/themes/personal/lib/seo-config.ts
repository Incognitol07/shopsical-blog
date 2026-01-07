/**
 * SEO Configuration for Shopsical Blog
 * 
 * This file contains all SEO-related constants and configuration
 * for the Shopsical blog. Update these values to reflect brand changes.
 */

export const SEO_CONFIG = {
    // Site Information
    site: {
        name: 'Shopsical Blog',
        title: 'The Shopsical Blog',
        description: 'Discover the latest trends, styling tips, and updates from the Shopsical team. Explore our stories about social commerce, community, and the future of shopping.',
        url: 'https://shopsical.com/blog',
        baseUrl: 'https://shopsical.com',
    },

    // Organization Information
    organization: {
        name: 'Shopsical Ltd',
        legalName: 'Shopsical Ltd',
        description: 'Social commerce done right. TikTok + Jumia = Shopsical. Turning social attention into real, trusted buying.',
        email: 'support@shopsical.com',
        supportUrl: 'https://shopsical.com/support',
        foundingDate: '2024',
    },

    // Social Media Profiles
    social: {
        instagram: 'https://instagram.com/shopsical',
        tiktok: 'https://tiktok.com/@shopsicalofficial',
        youtube: 'https://youtube.com/@shopsical',
        twitter: '', // Not available yet
    },

    // Brand Assets
    assets: {
        logo: '/logo.png', // Primary logo
        logoSquare: '/icon.png', // Square icon for social
        ogImageDefault: '/thumbnail.png', // Default OG image
        favicon: '/favicon/favicon.ico',
    },

    // Default Meta Tags
    meta: {
        themeColor: '#3B82F6', // Blue from Shopsical brand
        tileColor: '#000000',
        keywords: [
            'social commerce',
            'online shopping',
            'community shopping',
            'shopsical',
            'e-commerce',
            'social shopping',
            'trusted buying',
            'vendor marketplace',
        ],
    },

    // Open Graph Defaults
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'Shopsical Blog',
        imageWidth: 1200,
        imageHeight: 630,
    },

    // Twitter Card Defaults
    twitter: {
        card: 'summary_large_image',
        site: '@shopsical', // Update when available
        creator: '@shopsical', // Update when available
    },

    // Author Information (Default)
    defaultAuthor: {
        name: 'Shopsical Team',
        url: 'https://shopsical.com',
    },

    // Structured Data
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Shopsical Ltd',
        legalName: 'Shopsical Ltd',
        url: 'https://shopsical.com',
        logo: 'https://shopsical.com/logo.png',
        description: 'Social commerce done right. TikTok + Jumia = Shopsical.',
        email: 'support@shopsical.com',
        sameAs: [
            'https://instagram.com/shopsical',
            'https://tiktok.com/@shopsicalofficial',
            'https://youtube.com/@shopsical',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'support@shopsical.com',
            contactType: 'customer support',
            url: 'https://shopsical.com/support',
        },
    },
};

/**
 * Generate page title with Shopsical branding
 */
export function generatePageTitle(title: string, includeSiteName = true): string {
    if (includeSiteName) {
        return `${title} | ${SEO_CONFIG.site.name}`;
    }
    return title;
}

/**
 * Generate meta description with fallback
 */
export function generateMetaDescription(description?: string): string {
    return description || SEO_CONFIG.site.description;
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${SEO_CONFIG.site.url}${cleanPath}`;
}

/**
 * Generate absolute URL for assets
 */
export function generateAbsoluteUrl(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${SEO_CONFIG.site.baseUrl}${cleanPath}`;
}

/**
 * Get social media links array for structured data
 */
export function getSocialMediaLinks(): string[] {
    return Object.values(SEO_CONFIG.social).filter(Boolean);
}

/**
 * Generate article keywords from tags
 */
export function generateArticleKeywords(tags: string[]): string {
    const defaultKeywords = SEO_CONFIG.meta.keywords;
    const allKeywords = [...new Set([...tags, ...defaultKeywords])];
    return allKeywords.join(', ');
}
