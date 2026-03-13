import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrolled } from '../hooks/useScrolled';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const { scrolled } = useScrolled();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = ['About', 'Projects', 'Experience', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 lg:py-6 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-[20px] border-b border-border'
            : 'border-b border-transparent'
        }`}
      >
        <button onClick={() => scrollToSection('home')} className="font-syne font-extrabold text-lg text-text tracking-tight cursor-pointer z-50">
          SR<span className="text-accent">.</span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-10 list-none">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted button-text transition-colors duration-200 hover:text-accent cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Button - Mobile Only - Decreasing Width Lines */}
        <motion.button
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer z-50 relative bg-subtle border border-border rounded-sm hover:border-accent transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <div className="flex flex-col gap-1 w-5 relative">
            {/* Top line - Full width */}
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: 45, y: 5.5, width: '100%' }
                  : { rotate: 0, y: 0, width: '100%' }
              }
              transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
              className="h-[1.5px] bg-accent rounded-full block ml-auto"
              style={{
                boxShadow: '0 0 6px rgba(232, 255, 71, 0.3)',
              }}
            />
            {/* Middle line - Medium width (75%) */}
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { opacity: 0, x: -15 }
                  : { opacity: 1, x: 0 }
              }
              transition={{ duration: 0.2 }}
              className="h-[1.5px] bg-accent rounded-full block ml-auto"
              style={{
                width: '75%',
                boxShadow: '0 0 6px rgba(232, 255, 71, 0.3)',
              }}
            />
            {/* Bottom line - Short width (50%) */}
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: -45, y: -5.5, width: '100%' }
                  : { rotate: 0, y: 0, width: '50%' }
              }
              transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
              className="h-[1.5px] bg-accent rounded-full block ml-auto"
              style={{
                boxShadow: '0 0 6px rgba(232, 255, 71, 0.3)',
              }}
            />
          </div>
          
          {/* Subtle glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: 'radial-gradient(circle at center, rgba(232, 255, 71, 0.1), transparent 70%)',
            }}
          />
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              id="mobile-navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#0a0a0a] border-l border-border z-40 lg:hidden"
            >
              {/* Menu Content */}
              <div className="flex flex-col px-8 pt-24 pb-8 h-full">
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <button
                          onClick={() => scrollToSection(item.toLowerCase())}
                          className="w-full text-left py-4 px-4 text-text text-lg font-medium transition-all duration-200 hover:text-accent hover:bg-subtle hover:border-l-2 hover:border-accent rounded-sm cursor-pointer block"
                        >
                          {item}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="border-t border-border pt-6 mt-auto"
                >
                  {/* Profile Section */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 shrink-0 rounded-full border-2 border-accent flex items-center justify-center text-accent font-bold text-sm bg-[#1a1f0a]">
                      SR
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white tracking-wide">SYED RAZA UR REHMAN SHAH</p>
                      <p className="text-[10px] text-accent tracking-widest mt-0.5">SOFTWARE ENGINEER</p>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div>
                    <div className="small-text text-muted mb-3 uppercase tracking-wider">Get in touch</div>
                    <a
                      href="mailto:syed.razaurrehman053@gmail.com"
                      className="text-xs text-muted hover:text-accent transition-colors block mb-4 break-all"
                    >
                      syed.razaurrehman053@gmail.com
                    </a>
                    
                    {/* Social Icons */}
                    <div className="flex gap-3">
                      {/* GitHub */}
                      <a
                        href="https://github.com/razashah053"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 border border-border flex items-center justify-center text-muted transition-all hover:border-accent hover:text-accent hover:bg-[rgba(232,255,71,0.05)]"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      {/* LinkedIn */}
                      <a
                        href="https://linkedin.com/in/razashah053"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 border border-border flex items-center justify-center text-muted transition-all hover:border-accent hover:text-accent hover:bg-[rgba(232,255,71,0.05)]"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>

                      {/* Email */}
                      <a
                        href="mailto:syed.razaurrehman053@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 border border-border flex items-center justify-center text-muted transition-all hover:border-accent hover:text-accent hover:bg-[rgba(232,255,71,0.05)]"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>

                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/923155783100?text=Hi%20Raza%2C%20I'm%20interested%20in%20discussing%20a%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 border border-border flex items-center justify-center text-muted transition-all hover:border-accent hover:text-accent hover:bg-[rgba(232,255,71,0.05)]"
                        aria-label="WhatsApp"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
