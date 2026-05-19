import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export const GrainOverlay = () => (
  <div className="grain-overlay">
    <svg width="100%" height="100%" style={{ opacity: 0.025 }}>
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
    </svg>
  </div>
);

export const CursorDot = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // No spring per instructions: "framer-motion spring for position... wait, instruction says 
  // 'CursorDot — olive green cursor follower (10px dot, framer-motion spring for position)'
  const cursorXSpring = useSpring(cursorX, { stiffness: 400, damping: 28, mass: 0.5 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 400, damping: 28, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 5);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[10px] h-[10px] bg-primary rounded-full pointer-events-none z-[99999]"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    />
  );
};

export const StickyNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = ['Profile', 'Expertise', 'Works', 'Credentials'];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex justify-center items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Desktop links */}
        <div className="hidden md:flex gap-12 font-teko uppercase tracking-[0.2em] text-primary">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="relative group hover:text-foreground transition-colors duration-300">
              {link}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-teko uppercase tracking-[0.2em] text-primary w-full text-center cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center gap-6 py-8 font-teko uppercase tracking-[0.2em] text-primary text-xl">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-foreground transition-colors duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const PosterRule = () => <div className="poster-rule" />;
export const ThinRule = () => <div className="thin-rule" />;
export const OrnamentalDivider = () => <div className="ornamental-divider">─── ✦ ───</div>;

export const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
