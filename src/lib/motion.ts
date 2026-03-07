import type { Variants } from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.10, delayChildren: 0.05 },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const goldLine: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: 64, opacity: 1, transition: { duration: 0.8, ease } },
};

export const navVariants: Variants = {
  top: { backgroundColor: 'rgba(15,32,65,0)', backdropFilter: 'blur(0px)' },
  scrolled: {
    backgroundColor: 'rgba(15,32,65,0.96)',
    backdropFilter: 'blur(12px)',
    transition: { duration: 0.3 },
  },
};
