import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Magnetic from './Magnetic';
import { SITE_NAME, SITE_STUDIO_NAME } from '../config/siteMode';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'System', href: '/system' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] px-6 md:px-12 py-6 md:py-8 flex justify-between items-center bg-transparent backdrop-blur-sm border-b border-white/5">
      <Link to="/" onClick={() => setIsOpen(false)}>
        <Magnetic>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-display font-bold tracking-[0.3em] text-ivory flex items-center gap-3 md:gap-4 p-2"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 border border-gold/40 flex items-center justify-center">
              <div className="w-1 h-1 bg-gold" />
            </div>
            {SITE_NAME}
          </motion.div>
        </Magnetic>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 xl:gap-12 items-center">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Magnetic>
              <Link
                to={link.href}
                className={`text-[10px] uppercase tracking-[0.4em] font-bold hover:text-gold transition-all duration-500 relative group p-4 ${location.pathname === link.href ? 'text-gold' : 'text-ivory/60'}`}
              >
                {link.name}
                <span className={`absolute bottom-2 left-4 right-4 h-[1px] bg-gold transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100 ${location.pathname === link.href ? 'scale-x-100' : ''}`} />
              </Link>
            </Magnetic>
          </motion.div>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden text-ivory p-2 z-[1001] relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-[100dvh] bg-ink backdrop-blur-2xl z-[1000] flex flex-col items-center justify-center lg:hidden overflow-y-auto py-20"
          >
            <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-5xl sm:text-6xl font-display font-bold tracking-tighter transition-all duration-500 block py-2 ${
                      location.pathname === link.href ? 'text-gold' : 'text-ivory hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 flex flex-col items-center gap-8"
            >
              <div className="flex gap-10">
                {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                  <span key={social} className="text-[10px] font-bold tracking-[0.3em] text-ivory/40 hover:text-gold cursor-pointer transition-colors uppercase">
                    {social}
                  </span>
                ))}
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-[1px] bg-gold/30" />
                <span className="text-[8px] uppercase tracking-[0.4em] text-ivory/20 font-bold">
                  {SITE_STUDIO_NAME} © 2026
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
