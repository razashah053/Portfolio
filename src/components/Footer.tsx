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
                href="https://mail.google.com/mail/?view=cm&fs=1&to=syed.razaurrehman053@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted transition-all hover:border-accent hover:text-accent hover:bg-[rgba(232,255,71,0.05)]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923155783100?text=Hi%20Raza%2C%20I'm%20interested%20in%20discussing%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted transition-all hover:border-accent hover:text-accent hover:bg-[rgba(232,255,71,0.05)]"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
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
