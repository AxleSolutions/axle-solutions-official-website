# 🚀 Pre-Deployment Checklist for Vercel

## Before You Deploy

- [ ] Update all URLs from `https://axle-solutions.vercel.app` to your actual domain
- [ ] Create and add `public/og-image.jpg` (1200x630px social media preview image)
- [ ] Verify all links work correctly
- [ ] Test the contact form functionality
- [ ] Check that all images load properly
- [ ] Test dark/light mode switching
- [ ] Ensure mobile responsiveness

## Vercel Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Add SEO optimizations and prepare for deployment"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repository
5. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

### 3. Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## After Deployment

### Immediate Tasks
- [ ] Test all pages on the live site
- [ ] Verify routing works (especially /contact from /services)
- [ ] Test form submission
- [ ] Check SEO tags using browser dev tools
- [ ] Test social media sharing preview

### SEO Setup (Within 24 hours)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test social media cards (Facebook Debugger, Twitter Validator)
- [ ] Update `sitemap.xml` lastmod dates

### URLs to Update After Getting Custom Domain

**Files to update:**
1. `src/components/SEO.jsx` - line 9 (siteUrl)
2. `index.html` - all Open Graph and Twitter URLs
3. `public/sitemap.xml` - all URLs
4. `public/robots.txt` - Sitemap URL

**Find and Replace:**
- Old: `https://axle-solutions.vercel.app`
- New: `https://your-custom-domain.com`

## Performance Optimization

- [ ] Optimize all images (use WebP format if possible)
- [ ] Enable Vercel Analytics (Settings → Analytics)
- [ ] Set up Error Tracking (optional)
- [ ] Configure caching headers in `vercel.json` (optional)

## Testing Tools

After deployment, test with:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Schema Markup Validator](https://validator.schema.org/)

## Monitoring (Ongoing)

Weekly:
- [ ] Check Google Search Console for errors
- [ ] Review Analytics data
- [ ] Check for broken links

Monthly:
- [ ] Update sitemap if content changed
- [ ] Review and update meta descriptions
- [ ] Check competitor SEO improvements

## Common Issues & Solutions

### Issue: 404 on page refresh
**Solution**: Already fixed with `vercel.json` rewrites

### Issue: Images not loading
**Solution**: Ensure images are in `public/` or `src/assets/` and paths are correct

### Issue: Social preview not showing
**Solution**: 
1. Create og-image.jpg in public folder
2. Clear Facebook/Twitter cache using their debugging tools

### Issue: Slow load time
**Solution**:
1. Optimize images
2. Enable Vercel image optimization
3. Check bundle size

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Google Search Console Help](https://support.google.com/webmasters)

---

## 🎉 Ready to Deploy!

Once you've completed the checklist above, your site is ready for production. Good luck! 🚀
