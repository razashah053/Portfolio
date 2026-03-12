import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrolled } from '../hooks/useScrolled';

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
          className="lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer z-50 relative bg-subtle border border-border rounded-sm hover:border-accent transition-colors group"
          aria-label="Toggle menu"
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
                  <div className="small-text text-muted mb-2">Get in touch</div>
                  <a
                    href="mailto:syed.razaurrehman053@gmail.com"
                    className="text-sm text-accent hover:underline block mb-3"
                  >
                    syed.razaurrehman053@gmail.com
                  </a>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/razashah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="small-text text-muted hover:text-accent transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/razashah053"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="small-text text-muted hover:text-accent transition-colors"
                    >
                      LinkedIn
                    </a>
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
