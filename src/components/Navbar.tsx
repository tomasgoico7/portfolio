'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState, useCallback } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LocaleToggle } from './LocaleToggle';
import { IconLock } from '@tabler/icons-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const SECTIONS = ['home', 'impact', 'experience', 'education', 'stack', 'contact'] as const;

const NAVBAR_HEIGHT = 88;

export function Navbar() {
  const t = useTranslations('nav');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const scrollProgress = useMotionValue(0);
  const springProgress = useSpring(scrollProgress, { stiffness: 200, damping: 30 });
  const progressWidth = useTransform(springProgress, [0, 1], ['0%', '100%']);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.set(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [scrollProgress]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/60 border-b border-border/30 shadow-[0_1px_40px_rgb(83,74,183,0.08)] dark:shadow-[0_1px_40px_rgb(83,74,183,0.15)]'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'blur(0px)' } as React.CSSProperties}
    >
      {/* Top utility bar */}
      <div className={`border-b transition-colors duration-300 ${
        scrolled ? 'border-border/20 bg-bg-primary/30' : 'border-border/40 bg-bg-tertiary/50'
      }`}>
        <div className="max-w-6xl mx-auto flex items-center gap-3 px-5 py-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ED93B1]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FAC775]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#97C459]" />
          </div>
          <div className="flex-1 max-w-md mx-auto">
            <div className="bg-bg-primary/70 border border-border/60 rounded-md px-3 py-0.5 flex items-center gap-1.5 text-[11px] text-fg-tertiary font-mono">
              <IconLock size={10} aria-hidden="true" />
              <span>tomasgoicoechea.dev</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LocaleToggle />
            <span className="w-px h-3.5 bg-border" />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-5 sm:px-6 py-3.5">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleAnchorClick(e, 'home')} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-[13px] font-mono group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 animated-gradient shadow-[0_4px_14px_rgb(83,74,183,0.4)]">
            tg
          </div>
          <span className="font-mono text-[13px] text-fg-secondary hidden sm:inline group-hover:text-fg-primary transition-colors">
            tomas.goicoechea()
          </span>
        </a>

        {/* Nav links */}
        <div className="flex gap-1 sm:gap-1 text-[12px] sm:text-[13px] overflow-x-auto max-w-[calc(100vw-100px)] whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleAnchorClick(e, id)}
              className={`relative transition-all duration-200 px-3 py-1.5 rounded-md ${
                activeSection === id
                  ? 'text-accent font-semibold bg-accent/8 dark:bg-accent/10'
                  : 'text-fg-secondary hover:text-fg-primary hover:bg-bg-tertiary'
              }`}
            >
              {t(id)}
              {activeSection === id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-1 -bottom-px h-[2px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, #534AB7, #8B7CF6)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* Scroll progress — gradient animado */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] origin-left"
        style={{
          width: progressWidth,
          background: 'linear-gradient(90deg, #534AB7, #8B7CF6, #1D9E75, #ED93B1)',
          boxShadow: '0 0 8px rgb(83 74 183 / 0.6)',
        }}
      />
    </motion.header>
  );
}
