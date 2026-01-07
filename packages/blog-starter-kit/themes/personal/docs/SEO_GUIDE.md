# Shopsical Blog SEO Documentation

## Overview

The Shopsical blog has been configured with comprehensive SEO optimization to ensure maximum visibility in search engines and optimal social media sharing. All SEO configuration is centralized in `lib/seo-config.ts` for easy maintenance.

## SEO Configuration

### Location
All SEO constants and configuration are defined in:
```
packages/blog-starter-kit/themes/personal/lib/seo-config.ts
```

### Key Configuration Areas

#### Site Information
- **Site Name**: The Shopsical Blog
- **URL**: https://shopsical.com/blog
- **Description**: Discover the latest trends, styling tips, and updates from the Shopsical team

#### Organization Details
- **Legal Name**: Shopsical Ltd
- **Contact Email**: support@shopsical.com
- **Support URL**: https://shopsical.com/support

#### Social Media
- Instagram: https://instagram.com/shopsical
- TikTok: https://tiktok.com/@shopsicalofficial
- YouTube: https://youtube.com/@shopsical

#### Brand Assets
- **Logo**: `/assets/shopsical-logo.png`
- **Square Logo** (for social sharing): `/assets/shopsical-logo-square.png` (1200x1200px)
- **Default OG Image**: `/assets/shopsical-og-default.png` (1200x630px)

## Structured Data (JSON-LD)

The blog implements comprehensive structured data for better search engine understanding:

### Organization Schema
Defines Shopsical as an organization with:
- Company information
- Social media profiles
- Contact points
- Logo and branding

### WebSite Schema
Defines the blog with:
- Site information
- Search functionality
- Publisher relationship

### Blog Schema
Defines the blog structure and content

### Article Schema (for blog posts)
Each blog post includes:
- Article metadata (title, description, dates)
- Author information
- Publisher information
- Keywords and tags
- Reading time
- Images

### BreadcrumbList Schema
Provides navigation hierarchy:
- Home → Blog → Article

## Meta Tags

### Homepage Meta Tags
- **Title**: The Shopsical Blog | Social Commerce Insights & Updates
- **Description**: Discover the latest trends, styling tips, and updates from the Shopsical team
- **Canonical URL**: https://shopsical.com/blog
- **Keywords**: social commerce, online shopping, community shopping, shopsical, e-commerce

### Blog Post Meta Tags
- **Title**: [Post Title] | Shopsical Blog
- **Description**: Post SEO description or subtitle
- **Canonical URL**: Post URL
- **Keywords**: Post tags + default keywords
- **Author**: Post author name
- **Published/Modified Dates**: Article timestamps

## Open Graph Tags

All pages include comprehensive Open Graph tags for optimal social sharing:

### Homepage
- Type: website
- Site Name: Shopsical Blog
- Image: Default OG image (1200x630px)
- Locale: en_US

### Blog Posts
- Type: article
- Site Name: Shopsical Blog
- Image: Post cover image or default
- Article metadata (author, publish date, tags)

## Twitter Cards

All pages use `summary_large_image` card type with:
- Twitter handle: @shopsical
- Optimized images (1200x630px)
- Comprehensive metadata

## Technical SEO

### Robots.txt
Located at `/robots.txt`, configured to:
- Allow all search engines
- Block GPTBot
- Reference sitemap

### Sitemap.xml
Located at `/sitemap.xml`, includes:
- All blog posts
- Static pages
- Tag pages
- Proper priority and change frequency

### RSS Feed
Located at `/rss.xml` for content syndication

## Best Practices for Content Creators

### Writing SEO-Friendly Blog Posts

#### 1. Title Optimization
- Keep titles between 50-60 characters
- Include primary keyword near the beginning
- Make it compelling and click-worthy
- Avoid clickbait - be accurate and descriptive

**Good Example**: "5 Social Commerce Trends Shaping 2026"
**Bad Example**: "You Won't Believe What's Happening in Commerce!"

#### 2. Meta Descriptions
- Write 150-160 characters
- Include primary keyword naturally
- Add a call-to-action
- Make it unique for each post

**Good Example**: "Discover the top 5 social commerce trends transforming online shopping in 2026. Learn how Shopsical is leading the revolution."

#### 3. Cover Images
- **Dimensions**: 1200x630px (optimal for social sharing)
- **Format**: JPG or PNG
- **File Size**: Under 1MB for fast loading
- **Content**: Include text overlay with post title
- **Alt Text**: Descriptive text for accessibility

#### 4. Heading Structure
Use proper heading hierarchy:
- **H1**: Post title (automatically generated)
- **H2**: Main sections
- **H3**: Subsections
- **H4-H6**: Further subdivisions

Never skip heading levels (e.g., don't go from H2 to H4).

#### 5. Keywords and Tags
- Use 3-5 relevant tags per post
- Include both broad and specific tags
- Examples:
  - Broad: "social commerce", "e-commerce"
  - Specific: "vendor marketplace", "community shopping"

#### 6. Internal Linking
- Link to related blog posts
- Link to main Shopsical pages (shopsical.com)
- Use descriptive anchor text
- Aim for 2-4 internal links per post

#### 7. Content Length
- Minimum: 800 words for SEO value
- Optimal: 1,500-2,500 words for in-depth topics
- Focus on quality over quantity

#### 8. URL Structure
URLs are automatically generated from titles:
- Keep titles concise for clean URLs
- Avoid special characters
- Use hyphens (automatically handled)

### Image Optimization

#### For Blog Post Covers
- **Size**: 1200x630px
- **Format**: JPG (photos) or PNG (graphics)
- **Compression**: Use tools like TinyPNG
- **Naming**: descriptive-file-name.jpg

#### For In-Content Images
- **Max Width**: 1200px
- **Alt Text**: Always include descriptive alt text
- **Captions**: Add captions when helpful
- **Lazy Loading**: Automatically handled

### Social Sharing Checklist

Before publishing, verify:
- [ ] Cover image is 1200x630px
- [ ] Title is compelling and under 60 characters
- [ ] Meta description is 150-160 characters
- [ ] At least 3 relevant tags added
- [ ] Proper heading hierarchy (H2, H3, etc.)
- [ ] Internal links to related content
- [ ] Images have alt text
- [ ] Content is at least 800 words

## Updating SEO Configuration

### When to Update seo-config.ts

Update the configuration file when:
- Company information changes
- New social media profiles are added
- Logo or brand assets are updated
- Contact information changes
- Default descriptions need updating

### How to Update

1. Open `lib/seo-config.ts`
2. Update the relevant section
3. Save the file
4. Changes will apply to all pages automatically

### Example: Adding Twitter Handle

When Twitter handle becomes available:

```typescript
// In seo-config.ts
social: {
  instagram: 'https://instagram.com/shopsical',
  tiktok: 'https://tiktok.com/@shopsicalofficial',
  youtube: 'https://youtube.com/@shopsical',
  twitter: 'https://twitter.com/shopsical', // Add this line
},

twitter: {
  card: 'summary_large_image',
  site: '@shopsical', // Update this
  creator: '@shopsical', // Update this
},
```

## Testing SEO

### Tools for Testing

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test structured data validity

2. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Test Open Graph tags

3. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Test Twitter Card display

4. **Google Search Console**
   - Monitor search performance
   - Check for indexing issues
   - View search analytics

### What to Test

After publishing a new post:
1. Verify structured data with Rich Results Test
2. Test social sharing preview on Facebook
3. Test social sharing preview on Twitter
4. Check that post appears in sitemap.xml
5. Verify canonical URL is correct

## Common SEO Issues and Solutions

### Issue: Social sharing shows wrong image
**Solution**: Clear social media cache:
- Facebook: Use Sharing Debugger
- Twitter: Use Card Validator
- Wait 24 hours for cache to clear

### Issue: Post not appearing in Google
**Solution**:
- Check robots.txt allows indexing
- Verify post is in sitemap.xml
- Submit sitemap to Google Search Console
- Wait 1-2 weeks for indexing

### Issue: Duplicate content warnings
**Solution**:
- Ensure canonical URLs are set correctly
- Check for URL parameter issues
- Verify no duplicate posts exist

## Additional Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

## Support

For SEO-related questions or issues:
- Email: support@shopsical.com
- Support Page: https://shopsical.com/support
