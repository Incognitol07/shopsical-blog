# Shopsical Blog Assets

This directory contains brand assets for the Shopsical blog.

## Current Assets

✅ **Assets already in place** (located in `/public/`):

### Existing Files

#### `logo.png`
- **Location**: `/public/logo.png`
- **Purpose**: Primary logo for the blog
- **Status**: ✅ Already configured in `seo-config.ts`

#### `icon.png`
- **Location**: `/public/icon.png`
- **Purpose**: Square icon for social media profiles and app icons
- **Status**: ✅ Already configured in `seo-config.ts`

#### `thumbnail.png`
- **Location**: `/public/thumbnail.png`
- **Purpose**: Default image for social sharing when blog posts don't have cover images
- **Status**: ✅ Already configured in `seo-config.ts`

### Favicon Files (Already in `/public/favicon/`)

The favicon files are properly configured:
- `favicon.ico`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `favicon-16x16.png`
- `favicon-32x32.png`

## Asset Guidelines

### Recommended Sizes

If you need to update these assets in the future:

- **Logo**: Maintain aspect ratio, typically 600x60px or similar
- **Icon**: Square format, ideally 512x512px or larger
- **Thumbnail/OG Image**: 1200x630px for optimal social sharing

## Design Guidelines

### Logo
- Use official Shopsical brand colors
- Ensure good contrast for readability
- Keep it simple and recognizable

### OG Image
- Include Shopsical branding prominently
- Use high-quality graphics
- Ensure text is legible when scaled down
- Test on multiple platforms (Facebook, Twitter, LinkedIn)

## Testing Your Assets

After adding assets, test them:

1. **Logo Display**
   - Check Organization schema in Google Rich Results Test
   - Verify logo appears correctly

2. **OG Image**
   - Share a blog post link on Facebook
   - Share a blog post link on Twitter
   - Verify image displays correctly at various sizes

3. **Favicon**
   - Check browser tab icon
   - Check bookmark icon
   - Test on mobile devices

## File Locations

```
public/
├── assets/
│   ├── shopsical-logo.png          ← Add this
│   ├── shopsical-logo-square.png   ← Add this
│   └── shopsical-og-default.png    ← Add this
└── favicon/
    ├── favicon.ico
    ├── apple-touch-icon.png
    ├── favicon-16x16.png
    └── favicon-32x32.png
```

## Quick Checklist

- [ ] Add `shopsical-logo.png` (600x60px)
- [ ] Add `shopsical-logo-square.png` (1200x1200px)
- [ ] Add `shopsical-og-default.png` (1200x630px)
- [ ] Test logo in Organization schema
- [ ] Test OG image on social platforms
- [ ] Verify all images load correctly

## Need Help?

For design assets or questions:
- Email: support@shopsical.com
- Support: https://shopsical.com/support
