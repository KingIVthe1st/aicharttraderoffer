'use client';

import { useEffect, useState } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Advanced scroll progress hook with smooth spring physics
 * Returns both raw and spring-animated scroll progress
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return { scrollYProgress, smoothProgress };
}

/**
 * Hook to track scroll progress within a specific element
 */
export function useElementScrollProgress(ref: React.RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return { scrollYProgress, smoothProgress };
}
