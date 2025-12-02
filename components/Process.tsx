'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const steps = [
  {
    week: 'Week 1',
    title: 'Enroll & Setup',
    icon: '🚀',
    description: `After payment, you'll receive platform access within 24 hours and a scheduling link for our first session. Before we meet, complete the trader profile assessment (identifies your risk tolerance, time availability, and learning style) and watch the 3-part platform orientation. Our first call focuses on expectations: your goals, timeline, and biggest trading frustrations. We'll also set up your trading platform, connect data feeds, and establish a paper trading environment. No live money yet—we build the foundation first.`,
  },
  {
    week: 'Weeks 2-4',
    title: 'Foundations',
    icon: '📚',
    description: `Sessions 2 to 4 focus on essential concepts: market structure, support/resistance, volume analysis, and pattern recognition. Between sessions, you'll complete assignments using the AI mentor—practicing pattern identification, analyzing historical charts, and documenting observations. I review every assignment before our next call. You're building pattern recognition muscle memory and starting to think like a professional trader. We'll also begin live chart review: I'll walk through my analysis process in real time so you see how experienced traders actually evaluate setups.`,
  },
  {
    week: 'Weeks 5-7',
    title: 'Strategy Development',
    icon: '⚙️',
    description: `Now we build YOUR system. Based on your psychology and schedule, we'll develop 2 to 3 core setups you'll trade repeatedly. You'll paper trade these setups between sessions while I monitor your execution. We analyze every trade together: What did you see? What did you miss? Was the loss acceptable or avoidable? This is where transformation happens—you're no longer learning theory; you're refining personal execution. By week 7, you'll have a documented playbook and consistent paper trading results ready for small size live testing.`,
  },
  {
    week: 'Week 8+',
    title: 'Independence & Funding',
    icon: '🎯',
    description: `Our final session is graduation planning. We'll review your complete trading system, establish post program goals, and plan your prop firm evaluation strategy. You'll continue with $24/month platform access and can schedule à la carte follow up sessions if needed (discounted for program graduates). Many students choose to pursue prop firm evaluations within 3 to 6 months after completing the program, though timelines vary based on individual progress, practice consistency, and market conditions. My job isn't to make you dependent on mentorship—it's to make you capable of independent decision making.`,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Track scroll progress through the timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Smooth spring animation for the timeline line
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform progress to height for the animated line
  const lineHeight = useTransform(
    prefersReducedMotion ? scrollYProgress : smoothProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <Section id="process">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
          How It Works
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Your development path from beginner to skilled practitioner follows a structured 8-week mentorship program. Here's what to expect:
        </p>
      </motion.div>

      <div ref={containerRef} className="relative">
        {/* Static background line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700/50 hidden md:block" />

        {/* Animated progress line */}
        <motion.div
          className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block origin-top"
          style={{ height: lineHeight }}
        >
          {/* Glowing dot at the end of progress */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-400 rounded-full shadow-lg shadow-primary-500/50"
            animate={prefersReducedMotion ? {} : {
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`relative mb-16 md:flex md:items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 group"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(14, 165, 233, 0.15)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="text-4xl"
                    whileHover={prefersReducedMotion ? {} : { rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div>
                    <p className="text-primary-400 font-semibold">{step.week}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{step.description}</p>
              </motion.div>
            </div>

            {/* Circle indicator with pulse effect */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 w-16 h-16 -ml-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center border-4 border-black z-10 hidden md:flex"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
            >
              <span className="text-white font-bold text-xl">{index + 1}</span>
              {/* Pulse ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary-400"
                animate={prefersReducedMotion ? {} : {
                  scale: [1, 1.5, 1.5],
                  opacity: [0.8, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: 'easeOut',
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
