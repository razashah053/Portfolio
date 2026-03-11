# Alex Chen - Portfolio

A modern, minimalist portfolio website built with React, TypeScript, and cutting-edge web technologies.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

## 🎨 Features

- ✨ Custom animated cursor with lag effect
- 🌊 Smooth scroll animations with Intersection Observer
- 📱 Fully responsive design
- 🎭 Monochromatic design with accent colors (#e8ff47, #ff6b35)
- 🔥 Terminal-themed code showcase
- 📊 Animated project visualizations
- ⚡ Optimized performance with Vite

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Build and serve
npm run deploy
```

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── Cursor.tsx     # Custom cursor
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Marquee.tsx    # Tech stack ticker
│   │   ├── About.tsx      # About section
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Experience.tsx # Work timeline
│   │   ├── Contact.tsx    # Contact section
│   │   └── Footer.tsx     # Footer
│   ├── hooks/             # Custom React hooks
│   │   ├── useScrolled.ts
│   │   └── useScrollReveal.ts
│   ├── data/              # Static data
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── skills.ts
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies
```

## 🎨 Design Tokens

| Token       | Value       | Usage                   |
|-------------|-------------|-------------------------|
| `--accent`  | `#e8ff47`   | Primary accent color    |
| `--accent2` | `#ff6b35`   | Secondary accent (hover)|
| `--bg`      | `#0a0a0a`   | Page background         |
| `--surface` | `#111111`   | Card backgrounds        |
| `--border`  | `#1e1e1e`   | Borders and dividers    |
| `--text`    | `#f0f0f0`   | Primary text            |
| `--muted`   | `#666666`   | Secondary text          |
| `--subtle`  | `#222222`   | Subtle backgrounds      |

## 📝 Customization

1. **Update personal info**: Edit `src/data/` files
2. **Change colors**: Modify `tailwind.config.js` and `src/index.css`
3. **Add/remove sections**: Update `src/App.tsx`
4. **Adjust animations**: Modify Framer Motion variants in components

## 🌐 Deployment

This project is configured for static hosting. Deploy to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Use `base: '/repo-name/'` in `vite.config.ts`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Credits

Designed and developed by Alex Chen

---

Built with ♥ and too much coffee.
