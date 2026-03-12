# Syed Raza Ur Rehman - Portfolio

A modern, minimalist portfolio website showcasing full-stack development expertise. Built with React, TypeScript, and cutting-edge web technologies, featuring smooth animations and an interactive user experience.

## ✨ Live Demo

[View Live Portfolio](#) <!-- Add your deployed URL here -->

## 🚀 Tech Stack

### Core Technologies
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript for robust development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Professional animations and transitions
- **Lucide React** - Beautiful, customizable icon library

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS transformations and optimizations
- **Autoprefixer** - Automatic vendor prefixing

## 🎨 Features

### Interactive UI/UX
- ✨ Custom animated cursor with smooth lag effect
- 🌊 Scroll-reveal animations using Intersection Observer
- 📱 Fully responsive design (mobile-first approach)
- 🎭 Dark monochromatic theme with vibrant accent colors
- 🔥 Dynamic tech stack marquee ticker
- 🎯 Smooth scroll navigation

### Portfolio Sections
- 👤 **Hero Section** - Dynamic introduction with call-to-actions
- 🛠️ **Skills Showcase** - Organized by Frontend, Backend, Real-Time & Database, Tools & Cloud
- 💼 **Projects** - Interactive project cards with live demos and GitHub links
- 📊 **Experience Timeline** - Professional work history with achievements
- 📧 **Contact Form** - Direct communication channel
- 👣 **Footer** - Social links and additional information

### Performance & Optimization
- ⚡ Lightning-fast page loads with Vite
- 🎯 Code splitting and lazy loading
- 🔄 Optimized animations with Framer Motion
- 🎨 Custom noise texture overlay for visual depth
- 📦 Production-ready build configuration

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Build and serve locally
npm run deploy
```

The development server will start at `http://localhost:5173`

## 🌐 Deployment

This project is optimized for static hosting. Deploy to your preferred platform:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### Netlify
1. Build the project: `npm run build`
2. Drag & drop the `dist/` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### GitHub Pages
1. Update `vite.config.ts` with your repository name:
   ```ts
   base: '/your-repo-name/'
   ```
2. Build and deploy using GitHub Actions or manual deployment

### Other Platforms
The `dist/` folder contains all static files needed for deployment to any hosting service (AWS S3, Firebase Hosting, Cloudflare Pages, etc.)

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

Optimized for modern browsers with ES6+ support.

## 🧩 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI framework |
| typescript | ^5.3.3 | Type safety |
| vite | ^5.0.12 | Build tool |
| tailwindcss | ^3.4.1 | Styling |
| framer-motion | ^11.0.3 | Animations |
| lucide-react | ^0.314.0 | Icons |

## 📁 Project Structure

```
portfolio/
├── public/
│   └── robots.txt         # SEO configuration
├── src/
│   ├── components/        # React components
│   │   ├── Cursor.tsx     # Custom animated cursor
│   │   ├── Navbar.tsx     # Navigation bar with scroll detection
│   │   ├── Hero.tsx       # Hero section with CTA
│   │   ├── Marquee.tsx    # Animated tech stack ticker
│   │   ├── About.tsx      # About/Skills section
│   │   ├── Projects.tsx   # Project showcase cards
│   │   ├── Experience.tsx # Work timeline
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Footer with social links
│   ├── hooks/             # Custom React hooks
│   │   ├── useScrolled.ts      # Scroll position detection
│   │   └── useScrollReveal.ts  # Scroll-based animations
│   ├── data/              # Content data
│   │   ├── projects.ts    # Portfolio projects
│   │   ├── experience.ts  # Work experience
│   │   └── skills.ts      # Technical skills
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles & CSS variables
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite build configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## 🎨 Design Tokens

### Color Palette
| Token       | Value       | Usage                        |
|-------------|-------------|------------------------------|
| `--accent`  | `#e8ff47`   | Primary accent (neon yellow) |
| `--accent2` | `#ff6b35`   | Secondary accent (coral)     |
| `--bg`      | `#0a0a0a`   | Page background              |
| `--surface` | `#111111`   | Card/section backgrounds     |
| `--border`  | `#1e1e1e`   | Borders and dividers         |
| `--text`    | `#f0f0f0`   | Primary text                 |
| `--muted`   | `#666666`   | Secondary text               |
| `--subtle`  | `#222222`   | Subtle backgrounds           |

### Typography
- **Font Family**: Monospace (system font stack for consistent rendering)
- **Font Weights**: Regular (400), Medium (500), Bold (700)

### Spacing
Following Tailwind's spacing scale (4px base units)

## 📝 Customization

### 1. Personal Information
Update your details in the data files:
- `src/data/projects.ts` - Add your projects with descriptions, tech stack, and links
- `src/data/experience.ts` - Add your work experience and achievements
- `src/data/skills.ts` - List your technical skills by category

### 2. Color Scheme
Modify the color palette in two places:
- **Tailwind Config**: `tailwind.config.js` - Update theme colors
- **CSS Variables**: `src/index.css` - Modify CSS custom properties

### 3. Content Sections
- **Add/Remove Sections**: Edit `src/App.tsx` to include or exclude sections
- **Section Order**: Rearrange component imports in `src/App.tsx`
- **Custom Sections**: Create new components in `src/components/`

### 4. Animations
- Adjust Framer Motion variants in individual components
- Modify scroll reveal behavior in `src/hooks/useScrollReveal.ts`
- Customize cursor behavior in `src/components/Cursor.tsx`

### 5. SEO & Metadata
- Update `index.html` - Title, meta description, and favicon
- Create `public/robots.txt` for search engine instructions

## 🛠️ Development Tips

- **Hot Module Replacement**: Vite provides instant feedback during development
- **TypeScript**: Type checking happens in your IDE and at build time
- **CSS**: Use Tailwind utility classes for rapid styling
- **Components**: Keep components focused and reusable
- **Hooks**: Leverage custom hooks for shared logic

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 5173 or use a different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and reinstall dependencies
rm -rf node_modules dist
npm install
npm run build
```

### TypeScript Errors
Check `tsconfig.json` and ensure all dependencies have type definitions installed.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Connect

- **Portfolio**: [Add your deployed URL]
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]
- **Email**: [Your Email]

## 🤝 Credits

Designed and developed by **Syed Raza Ur Rehman Shah**

---

Built with ♥ and too much coffee ☕
