# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, TailwindCSS, and enhanced with Three.js animations and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional layout with dark/light mode support
- **Interactive Animations**: Three.js particle background and Framer Motion transitions
- **Responsive**: Fully responsive design that works on all devices
- **Blog System**: File-based markdown blog with syntax highlighting
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and Open Graph support
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion + Three.js
- **Theme**: next-themes for dark/light mode
- **Blog**: Markdown with gray-matter and react-markdown
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd portfolio-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   \`\`\`env
   # Add your environment variables here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Replace with your actual URLs
   NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
   NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
   NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
   NEXT_PUBLIC_RESUME_URL=/resume.pdf
   \`\`\`

4. **Customize your content**
   - Update personal information in components
   - Replace placeholder images in `/public` folder
   - Add your resume as `/public/resume.pdf`
   - Create blog posts in `/content/blog` (markdown files)

5. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Customization

### Personal Information
Update the following files with your information:
- `components/sections/hero-section.tsx` - Name, title, description
- `components/sections/about-section.tsx` - Bio, skills, profile image
- `components/sections/skills-section.tsx` - Technical skills
- `components/sections/projects-section.tsx` - Portfolio projects
- `components/footer.tsx` - Social links and contact info

### Blog Posts
Create markdown files in `/content/blog/` with the following frontmatter:
\`\`\`markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
description: "Brief description of your post"
category: "Technology"
readTime: "5 min read"
---

Your blog content here...
\`\`\`

### Images
Replace placeholder images in `/public/`:
- Profile image: Update the image URL in AboutSection
- Project images: Add your project screenshots
- Resume: Add your resume as `resume.pdf`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click
4. Add environment variables in Vercel dashboard

### Other Platforms
\`\`\`bash
# Build for production
npm run build

# Start production server
npm run start
\`\`\`

## 🎨 Customization

### Colors
Update the color scheme in `app/globals.css`:
- Modify CSS custom properties for light/dark themes
- Primary color is currently set to purple (`oklch(0.627 0.265 303.9)`)

### Animations
- Three.js background: `components/three-background.tsx`
- Framer Motion animations: Various components use motion components
- Disable animations: Users with `prefers-reduced-motion` will see reduced animations

### Components
All components are modular and can be easily customized:
- `components/sections/` - Main page sections
- `components/ui/` - Reusable UI components (shadcn/ui)
- `components/` - Custom components

## 📱 Features

### Chat Widget
- Floating chat icon (bottom-right)
- Placeholder for future Tawk.to integration
- Easy to replace in `components/chat-icon.tsx`

### Dark Mode
- Persistent theme selection
- System preference detection
- Synced across navbar and footer

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- Reduced motion support

## 🔧 Development

### Linting & Formatting
\`\`\`bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint -- --fix
\`\`\`

### Type Checking
\`\`\`bash
# Run TypeScript compiler
npx tsc --noEmit
\`\`\`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:
- Open an issue on GitHub
- Contact me through the portfolio contact form
- Connect with me on social media

---

**Built with ❤️ using Next.js and modern web technologies**
