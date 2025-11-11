'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';

export default function Mentor() {
  return (
    <Section id="mentor">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-900/30 to-accent-900/30 border-2 border-primary-500/30 overflow-hidden relative group">
            <Image
              src="/ivan.jpg"
              alt="Ivanlee Jackson - AI Developer & Trading Educator"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl -z-10" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-lg mb-6">
            <p className="text-accent-400 font-semibold">
              Most trading educators quit their day jobs to sell courses. I built a trading education platform WHILE keeping my day job as an AI developer.
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
            Meet Your Mentor
          </h2>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm <span className="text-primary-400 font-semibold">Ivanlee Jackson</span>, and I didn't set out to teach trading—I set out to solve a problem. Four years ago, I was exactly where you might be: frustrated with inconsistent results, drowning in conflicting information, and convinced there had to be a better way to learn.
            </p>
            <p>
              As a software developer specializing in AI systems, I had access to tools that most traders don't. I started building pattern recognition models for my own use, training algorithms to identify setups I was missing, and creating decision-support systems that removed emotion from my trading.
            </p>
            <p>
              The breakthrough came when I realized the same AI techniques I used professionally could transform trading education. Not just automated signals (those are commodities), but genuine mentorship—systems that could explain reasoning, adapt to individual learning styles, and provide instant feedback on actual trading decisions.
            </p>
            <p>
              Here's what matters: <span className="text-accent-400 font-semibold">I'm not selling you the fantasy of quitting your job to day-trade from a beach.</span> I'm teaching you to build a legitimate skill using professional-grade tools. I still work as a developer. I still trade my own account. I'm not living off course sales—I'm living off actual trading profits and my primary career.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 bg-gradient-to-r from-primary-900/20 to-accent-900/20 border border-primary-500/30 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-3 text-primary-300">The Developer Advantage</h3>
            <p className="text-gray-300 leading-relaxed">
              When you learn from a developer, you learn how systems actually work—not just how to use them. I'll show you what the AI "sees" in a chart, why certain patterns trigger higher confidence scores, and how to think algorithmically about setup selection. You'll understand the logic layer beneath the indicators. This creates genuine edge: while others blindly follow signals, you'll understand the reasoning engine behind them.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
