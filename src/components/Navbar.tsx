import { motion } from 'framer-motion';
import { useScrolled } from '../hooks/useScrolled';

export default function Navbar() {
  const { scrolled } = useScrolled();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
      <button onClick={() => scrollToSection('home')} className="font-syne font-extrabold text-lg text-text tracking-tight cursor-pointer">
        SR<span className="text-accent">.</span>
      </button>
      <ul className="flex gap-10 list-none">
        {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-muted text-xs uppercase tracking-wider transition-colors duration-200 hover:text-accent cursor-pointer"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
