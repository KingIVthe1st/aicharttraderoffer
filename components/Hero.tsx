'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Button from './Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Smooth spring physics for mouse movement
  const springConfig = { stiffness: 150, damping: 30 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Parallax transforms for background elements
  const x1 = useTransform(x, [0, 1], [-30, 30]);
  const y1 = useTransform(y, [0, 1], [-30, 30]);
  const x2 = useTransform(x, [0, 1], [30, -30]);
  const y2 = useTransform(y, [0, 1], [30, -30]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-primary-900/20">
        {/* Floating orbs with parallax */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{ x: x1, y: y1 }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/40 to-primary-600/30 rounded-full blur-3xl"
               style={{
                 animation: prefersReducedMotion ? 'none' : 'float 8s ease-in-out infinite',
               }}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{ x: x2, y: y2 }}
        >
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent-500/40 to-accent-600/30 rounded-full blur-3xl"
               style={{
                 animation: prefersReducedMotion ? 'none' : 'float 10s ease-in-out infinite reverse',
                 animationDelay: '1s'
               }}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            x: useTransform(x, [0, 1], [-15, 15]),
            y: useTransform(y, [0, 1], [-15, 15])
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-400/20 via-accent-400/20 to-primary-500/20 rounded-full blur-3xl"
               style={{
                 animation: prefersReducedMotion ? 'none' : 'pulse-slow 6s ease-in-out infinite',
               }}
          />
        </motion.div>
      </div>

      {/* Animated grid pattern overlay */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"
        animate={prefersReducedMotion ? {} : {
          backgroundPosition: ['0px 0px', '64px 64px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
        >
          {/* Badge with pulse animation */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 200,
              damping: 15
            }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm sm:text-base font-semibold backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/20 to-transparent"
                animate={prefersReducedMotion ? {} : {
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: 'easeInOut',
                }}
              />
              <span className="relative z-10">🔥 Only 2 Spots Left This Month</span>
            </motion.span>
          </motion.div>

          {/* Headline with stagger effect */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: prefersReducedMotion ? 0.3 : 0.8 }}
          >
            <motion.span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-300"
              style={{
                backgroundSize: '200% 200%',
              }}
              animate={prefersReducedMotion ? {} : {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Learn Futures Trading From the Developer Who Built the AI Chart Trader Platform
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: prefersReducedMotion ? 0.3 : 0.8 }}
          >
            Master futures trading with personalized mentorship from Ivanlee Jackson—software developer, AI architect, and active trader. 8 intensive 1 on 1 sessions + lifetime AI platform access + complete strategy development. Learn the systematic approach that professional traders use.
          </motion.p>

          {/* CTAs with stagger */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: prefersReducedMotion ? 0.3 : 0.8 }}
          >
            <Button variant="primary" size="lg" onClick={() => window.location.href = 'https://buy.stripe.com/3cI8wP44BfahdZ13cc'}>
              Secure Your Spot ($1,000)
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '#demo'}>
              Book Free Demo Call
            </Button>
          </motion.div>

          {/* Trust indicators with stagger */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: prefersReducedMotion ? 0.3 : 0.8 }}
          >
            {[
              'Money-Back Guarantee',
              '8 Private Sessions',
              '$20/month Platform (Founding Member Rate)'
            ].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <span className="text-primary-400 text-base sm:text-lg">✓</span>
                <span className="whitespace-nowrap">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with smooth animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:flex"
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
            animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  );
}

// Add custom keyframes to globals.css for additional animations
