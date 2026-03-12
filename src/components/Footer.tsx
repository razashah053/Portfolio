import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    'Full-Stack Development',
    'Video Communication Platforms',
    'Real-Time Chat Systems',
    'WebRTC Integration',
    'API Development',
  ];

  const technologies = [
    'React & Angular',
    'Node.js & Express',
    'WebRTC & Socket.IO',
    'MySQL & Redis',
    'Docker & AWS',
  ];

  const navigation = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Projects', href: 'projects' },
    { label: 'Experience', href: 'experience' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8 mb-12">
          {/* Brand Section */}
          <div className="max-w-md">
            <div className="font-syne text-3xl font-extrabold mb-6">
              SR<span className="text-accent">.</span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-8">
              Building scalable full-stack applications with React, Angular, Node.js, and real-time technologies.
              Specializing in video communication platforms and production-ready solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/razashah053"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted transition-all hover:border-accent hover:text-accent hover:bg-[rgba(232,255,71,0.05)]"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/razashah053"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted transition-all hover:border-accent hover:text-accent hover:bg-[rgba(232,255,71,0.05)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:syed.razaurrehman053@gmail.com"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted transition-all hover:border-accent hover:text-accent hover:bg-[rgba(232,255,71,0.05)]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium mb-6 relative">
              Services
              <span className="absolute left-0 bottom-0 w-8 h-px bg-accent" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-muted text-sm transition-colors hover:text-accent hover:translate-x-1 block cursor-pointer text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Column */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium mb-6 relative">
              Technologies
              <span className="absolute left-0 bottom-0 w-8 h-px bg-accent" />
            </h3>
            <ul className="space-y-3">
              {technologies.map((tech) => (
                <li key={tech}>
                  <span className="text-muted text-sm block">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate Column */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium mb-6 relative">
              Navigate
              <span className="absolute left-0 bottom-0 w-8 h-px bg-accent" />
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted text-sm transition-colors hover:text-accent hover:translate-x-1 block cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-muted text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-accent font-medium">Syed Raza</span>. All rights reserved.
          </div>
          <div className="text-muted text-center">
            Designed & built by <span className="text-accent font-medium">Syed Raza Ur Rehman Shah</span>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-muted text-xs uppercase tracking-[0.15em] transition-colors hover:text-accent"
            aria-label="Back to top"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform group-hover:-translate-y-1"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
