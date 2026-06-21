# Professional Portfolio Website

A modern, fully responsive portfolio website built with React, Tailwind CSS, and Framer Motion animations.

## 🎨 Features

- ✅ **Fully Responsive Design** - Works perfectly on mobile, tablet, laptop, and desktop
- ✅ **Dark/Light Theme Toggle** - User-friendly theme switching with persistent storage
- ✅ **Smooth Animations** - Engaging animations using Framer Motion and AOS
- ✅ **Modular Code Structure** - Well-organized file structure for easy maintenance
- ✅ **SEO Optimized** - Semantic HTML and meta tags for better search rankings
- ✅ **Performance Optimized** - Fast loading with optimized assets
- ✅ **Contact Form** - Functional contact form with validation
- ✅ **Social Integration** - Easy-to-add social media links

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with theme toggle
│   │   ├── Hero.jsx             # Hero section with animations
│   │   ├── About.jsx            # About section with image card
│   │   ├── Skills.jsx           # Skills section with tabbed view
│   │   ├── Experience.jsx       # Experience and education timeline
│   │   ├── Projects.jsx         # Projects showcase with modal
│   │   ├── Achievements.jsx     # Awards and testimonials
│   │   ├── Contact.jsx          # Contact form and info
│   │   └── Footer.jsx           # Footer section
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/light theme context
│   ├── data/
│   │   └── portfolioData.js     # Centralized content data
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Extract the zip file**
   ```bash
   unzip portfolio-website.zip
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Customization Guide

### 1. Update Personal Information

Edit `src/data/portfolioData.js`:

```javascript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    bio: 'Your bio',
    email: 'your.email@example.com',
    phone: '+1234567890',
    location: 'Your City, Country',
    image: 'your-image-url',
    resumeUrl: '/your-resume.pdf',
  },
  // ... more data
};
```

### 2. Update Skills

In `portfolioData.js`, modify the `skills` section:

```javascript
skills: {
  frontend: [
    { name: 'React', icon: 'FaReact', color: '#61DAFB' },
    // Add more skills...
  ],
  // ... other categories
}
```

### 3. Add Your Projects

Update the `projects` array in `portfolioData.js`:

```javascript
projects: [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    image: 'image-url',
    technologies: ['Tech1', 'Tech2'],
    features: ['Feature1', 'Feature2'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com/username/repo',
  },
  // ... more projects
]
```

### 4. Customize Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#FF6B6B',      // Change primary color
      secondary: '#4ECDC4',    // Change secondary color
      dark: '#1a1a2e',         // Change dark theme color
      // ... more colors
    },
  },
},
```

### 5. Add Social Media Links

In `portfolioData.js`, update the `contact.socialLinks`:

```javascript
socialLinks: [
  { platform: 'GitHub', url: 'https://github.com/yourname', icon: 'FaGithub' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'FaLinkedin' },
  // ... more links
],
```

### 6. Update Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="Your keywords">
<meta property="og:title" content="Your Portfolio Title">
<meta property="og:description" content="Your description">
```

## 📱 Responsive Breakpoints

The portfolio is optimized for:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Laptop**: 1025px - 1440px
- **Desktop**: 1441px+
- **Large Desktop**: 1600px+

## 🎨 Animation Features

- **Fade-in animations** on scroll
- **Slide animations** for content reveal
- **Hover effects** on interactive elements
- **Floating animations** for floating elements
- **Smooth scroll** between sections
- **Loading animations** for form submission

## 🔐 Privacy & Security

- Contact form data is handled client-side (no data sent to server by default)
- To enable email sending, integrate with a backend service:
  - EmailJS
  - Formspree
  - Your own backend API

## 🛠️ Technology Stack

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library
- **React Icons 5** - Icon library
- **AOS (Animate On Scroll)** - Scroll animations
- **Vite** - Build tool

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-icons": "^5.0.1",
  "framer-motion": "^10.16.4",
  "aos": "^2.3.4",
  "tailwindcss": "^3.4.0"
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Deploy to Other Platforms

- **GitHub Pages** - Static hosting
- **AWS S3 + CloudFront** - High performance CDN
- **Firebase Hosting** - Fast and reliable
- **Render** - Simple deployment

## ✨ Best Practices

1. **Keep data organized** - Update `portfolioData.js` for all content
2. **Use semantic HTML** - For better SEO
3. **Optimize images** - Use compressed, properly sized images
4. **Test responsiveness** - Check on multiple devices
5. **Update meta tags** - Important for SEO
6. **Regular backups** - Keep your code backed up

## 🐛 Troubleshooting

### Styles not loading?
- Clear cache: `npm run build` then restart
- Check Tailwind config is correct

### Images not showing?
- Ensure image URLs are correct and accessible
- Use absolute URLs for external images

### Animations not working?
- Check browser compatibility
- Ensure Framer Motion is installed: `npm install framer-motion`

### Theme not persisting?
- Check browser localStorage is enabled
- Check for localStorage errors in console

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

For issues or questions:
1. Check the documentation above
2. Review the code comments
3. Test in different browsers
4. Clear cache and rebuild

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

## 🙏 Credits

Built with ❤️ using modern web technologies.

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Compatibility**: All modern browsers (Chrome, Firefox, Safari, Edge)
