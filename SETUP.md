# 🚀 Quick Setup Guide

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Start Development Server
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

## Step 3: Customize Your Content

### Edit Personal Information
Open `src/data/portfolioData.js` and update:
- `personal.name` - Your name
- `personal.title` - Your professional title
- `personal.bio` - Your bio
- `personal.email` - Your email
- `personal.image` - Link to your photo (use placeholder for now)

### Add Your Projects
In the same file, update the `projects` array with your work

### Update Skills
Add your technical skills in the `skills` section

### Add Experience
Update the `experience` array with your work history

### Customize Colors
Edit `tailwind.config.js` to change the primary and secondary colors:
```javascript
primary: '#FF6B6B',    // Change this color
secondary: '#4ECDC4',  // Change this color
```

## Step 4: Test Responsiveness

The site is fully responsive. Test on:
- Mobile devices (use browser DevTools)
- Tablets
- Desktops

Use Ctrl+Shift+M (or Cmd+Shift+M on Mac) to open responsive design mode

## Step 5: Build for Production
```bash
npm run build
```

This creates an optimized version in the `dist/` folder

## ✨ Key Features Already Included

✅ Dark/Light theme toggle
✅ Smooth scrolling navigation
✅ Animated sections on scroll
✅ Responsive design for all devices
✅ Contact form
✅ SEO optimized
✅ Social media links
✅ Fast performance

## 🎨 File Structure at a Glance

```
src/
├── components/          # UI components
├── context/            # Theme context
├── data/               # Portfolio content
└── index.css           # Global styles
```

**Most Important File:** `src/data/portfolioData.js`
- Edit this file to change all your portfolio content
- No need to touch other files for customization

## 🌐 Deploy Your Site

### Free Options:
1. **Vercel** (Recommended)
   - Push to GitHub
   - Connect to Vercel
   - Auto-deploys on push

2. **Netlify**
   - Drag and drop the `dist` folder
   - Or connect to GitHub

3. **Firebase**
   - Install Firebase CLI
   - Run `firebase deploy`

## 📝 Next Steps

1. ✅ Install and run locally
2. ✅ Update `portfolioData.js` with your info
3. ✅ Customize colors in `tailwind.config.js`
4. ✅ Add your projects and experience
5. ✅ Test on mobile devices
6. ✅ Deploy to production

## 🎯 Pro Tips

- Keep image sizes under 500KB for faster loading
- Use high-quality, professional photos
- Update social media links with your profiles
- Add real project links and GitHub repos
- Test the contact form before deploying
- Preview on mobile before going live

## ❓ Need Help?

1. Check `README.md` for detailed documentation
2. Review code comments in components
3. Check browser console for errors
4. Test with different screen sizes

Good luck! 🎉
