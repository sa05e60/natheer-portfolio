import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[10000]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
};

export const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="font-heading text-2xl tracking-widest text-foreground hover:text-primary transition-colors">
          N.W.J
        </a>
        <div className="hidden md:flex gap-8 font-subheading text-lg tracking-widest uppercase">
          <a href="#profile" className="text-foreground hover:text-primary transition-colors">Profile</a>
          <a href="#expertise" className="text-foreground hover:text-primary transition-colors">Expertise</a>
          <a href="#works" className="text-foreground hover:text-primary transition-colors">Works</a>
          <a href="#credentials" className="text-foreground hover:text-primary transition-colors">Credentials</a>
        </div>
      </div>
      <div className="h-[1px] w-full bg-secondary/30 mt-[2px]" />
    </nav>
  );
};

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="mb-16 mt-32 relative">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 right-0 h-[1px] bg-foreground/20 origin-left"
      />
      <div className="text-center relative">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block px-6 bg-background font-heading text-2xl md:text-3xl text-foreground tracking-[0.3em]"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-24 h-[2px] bg-secondary mx-auto mt-4 origin-center"
      />
    </div>
  );
};

export const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);
