'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
  y?: number;
  variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'blur-up';
}

const EASING = [0.16, 1, 0.3, 1] as const;
const EASING_SPRING = [0.22, 1, 0.36, 1] as const;

const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  span: motion.span,
} as const;

export function Reveal({ children, delay = 0, className, as = 'div', y = 30, variant = 'blur-up' }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = MOTION_TAGS[as];

  if (prefersReducedMotion) {
    const Tag = as as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y },
      visible: (d: number = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.75, delay: d, ease: EASING },
      }),
    },
    'fade-left': {
      hidden: { opacity: 0, x: -32 },
      visible: (d: number = 0) => ({
        opacity: 1, x: 0,
        transition: { duration: 0.75, delay: d, ease: EASING },
      }),
    },
    'fade-right': {
      hidden: { opacity: 0, x: 32 },
      visible: (d: number = 0) => ({
        opacity: 1, x: 0,
        transition: { duration: 0.75, delay: d, ease: EASING },
      }),
    },
    'scale': {
      hidden: { opacity: 0, scale: 0.92, y: 16 },
      visible: (d: number = 0) => ({
        opacity: 1, scale: 1, y: 0,
        transition: { duration: 0.8, delay: d, ease: EASING_SPRING },
      }),
    },
    'blur-up': {
      hidden: { opacity: 0, y, filter: 'blur(8px)' },
      visible: (d: number = 0) => ({
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.8, delay: d, ease: EASING },
      }),
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
      variants={variants[variant]}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.05,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const MOTION_STAGGER_TAGS = {
  div: motion.div,
  li: motion.li,
} as const;

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li';
}) {
  const MotionTag = MOTION_STAGGER_TAGS[as];
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
        visible: {
          opacity: 1, y: 0, filter: 'blur(0px)',
          transition: { duration: 0.65, ease: EASING },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, ease: EASING_SPRING }}
    >
      {children}
    </motion.div>
  );
}
