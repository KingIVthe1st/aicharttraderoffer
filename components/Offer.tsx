'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { useState } from 'react';

const components = [
  {
    title: '8 Private Strategy Sessions',
    value: '$4,000',
    icon: '🎓',
    description: `One on one Zoom calls, 60 to 90 minutes each, scheduled around your availability. We'll review your actual trades, analyze your decision making patterns, and build strategies aligned with your psychology and schedule. No group calls where you compete for attention. No generic feedback that applies to everyone. These sessions are diagnostic: I identify exactly where your trading breaks down (entry timing? position sizing? exit discipline?) and build custom protocols to fix it. By session eight, you'll have a documented trading plan, practiced setups you've validated through simulation, and a framework for independent decision making. What you do with that foundation determines your results.`,
    features: ['2x weekly for 1 month', 'Screen-share chart analysis', 'Custom strategy development', 'Q&A on your specific setup'],
  },
  {
    title: 'AI Chart Traders Platform Access',
    value: 'Founding Member: $20/mo',
    icon: '🤖',
    description: `Lifetime access to the platform for $20/month—a founding member rate locked in permanently. Professional grade market analysis platforms typically range from $200 to $1,000+ monthly. This includes all future platform updates, new pattern libraries, and feature releases. Use it to prepare for sessions, analyze trades between calls, and continue learning after our formal program ends. The AI becomes your permanent trading partner—always available, never judging, constantly helping you improve.`,
    features: ['Unlimited chart analysis', 'Mentor mode explanations', 'Pattern recognition alerts', 'Psychology training modules'],
  },
  {
    title: 'Complete Prop Firm Setup',
    value: '$500',
    icon: '🏢',
    description: `I'll walk you through the entire prop firm funding process: choosing the right firm (Apex vs. TopStep vs. others), understanding evaluation rules, optimizing your strategy for funded account requirements, and even setting up proper risk management within their platforms. Most traders fail prop evaluations because they don't understand the specific constraints (max drawdown, daily loss limits, minimum trading days). We'll build a strategy that fits evaluation rules BEFORE you pay $200+ for an evaluation. I'll also share direct contacts at major prop firms—relationships that took me years to build.`,
    features: ['Apex Trader Funding guidance', 'Platform connections', 'Chart configuration optimization', 'Automation strategy setup'],
  },
  {
    title: 'Futures Trading Blueprint',
    value: '$1,500',
    icon: '📋',
    description: `A documented strategy manual built specifically for YOUR trading style. This isn't a generic PDF—it's a collaborative document we develop together across our sessions. It includes your setup criteria, entry/exit rules, position sizing formulas, maximum daily loss parameters, and psychological triggers to watch for. Think of it as your trading constitution: rules you've agreed to follow when emotions run hot. Many traders tell me this document alone is worth the entire program investment—it's the difference between gambling and executing a tested system.`,
    features: ['Custom strategy playbook', 'Risk management frameworks', 'Order flow analysis', 'Institutional behavior patterns'],
  },
];

export default function Offer() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Section id="offer" dark>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
          What You Actually Get
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          This isn't a course. It's a structured mentorship program with real-time feedback, premium tool access, and hands-on strategy development. You're not buying information—you're investing in a structured development program designed to build the skills, discipline, and strategic thinking that competent traders possess. Where you take those skills is up to you.
        </p>
      </motion.div>

      <div className="space-y-4">
        {components.map((component, index) => (
          <motion.div
            key={component.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="text-4xl">{component.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-300 mb-1">{component.title}</h3>
                  <p className="text-sm text-gray-400">Value: {component.value}</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary-400 text-2xl"
              >
                ▼
              </motion.div>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: expandedIndex === index ? 'auto' : 0,
                opacity: expandedIndex === index ? 1 : 0,
              }}
              transition={{
                height: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                },
                opacity: {
                  duration: 0.25,
                  delay: expandedIndex === index ? 0.1 : 0,
                },
              }}
              className="overflow-hidden"
            >
              <motion.div
                className="p-6 pt-0 border-t border-gray-700"
                initial={false}
                animate={{
                  y: expandedIndex === index ? 0 : -20,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <motion.p
                  className="text-gray-300 leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: expandedIndex === index ? 1 : 0 }}
                  transition={{ delay: expandedIndex === index ? 0.15 : 0 }}
                >
                  {component.description}
                </motion.p>
                <ul className="space-y-2">
                  {component.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2 text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: expandedIndex === index ? 1 : 0,
                        x: expandedIndex === index ? 0 : -20,
                      }}
                      transition={{
                        delay: expandedIndex === index ? 0.2 + featureIndex * 0.05 : 0,
                        type: 'spring',
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      <motion.span
                        className="text-primary-400"
                        animate={expandedIndex === index ? {
                          scale: [1, 1.2, 1],
                        } : {}}
                        transition={{
                          delay: expandedIndex === index ? 0.3 + featureIndex * 0.05 : 0,
                          duration: 0.3,
                        }}
                      >
                        ✓
                      </motion.span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Value Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 bg-gradient-to-r from-primary-900/30 to-accent-900/30 border-2 border-primary-500/50 rounded-2xl p-8 text-center"
      >
        <div className="mb-4">
          <p className="text-gray-400 text-lg mb-2">Total Program Value:</p>
          <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400 line-through opacity-60">
            $13,376+
          </p>
        </div>
        <div className="text-6xl font-bold mb-2 text-white">↓</div>
        <div>
          <p className="text-gray-400 text-lg mb-2">Your Investment:</p>
          <p className="text-5xl font-bold text-primary-400 mb-2">$997</p>
          <p className="text-xl text-gray-300">+ $20/month platform access</p>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="mt-6 inline-block px-6 py-3 bg-accent-500 text-black font-bold rounded-lg text-xl"
        >
          85% SAVINGS
        </motion.div>
      </motion.div>
    </Section>
  );
}
