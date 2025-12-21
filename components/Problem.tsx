'use client';

import { motion } from 'framer-motion';
import Section from './Section';

const problems = [
  {
    title: 'The Course Collector',
    icon: '📚',
    image: '/images/problem-course-collector.png',
    description: `You've bought three trading courses. Maybe five. Each promised "the secret." Each delivered 47 pre-recorded videos, a Discord you never check, and strategies that don't work when real money's on the line. The problem isn't you. It's that generic courses teach generic strategies to generic audiences. You're not generic. Your risk tolerance, schedule, and psychology are unique. You need personalized guidance, not another video library.`,
  },
  {
    title: 'The Trial-and-Error Trap',
    icon: '💸',
    image: '/images/problem-losses.png',
    description: `You're learning by losing. Every mistake costs real money. You don't know if your strategy is wrong, your execution is off, or you just hit bad luck. Without expert feedback on YOUR specific trades, you're driving blind. Most traders quit after blowing their third account. Not because they can't learn, but because they're learning the most expensive way possible. What if someone could analyze your actual trades and show you exactly what's breaking down?`,
  },
  {
    title: "The Broker's Advantage",
    icon: '🏦',
    image: '/images/problem-broker.png',
    description: `Every trade you place, someone's making money, and it's not you. Retail brokers profit from spreads, commissions, and your mistakes. Meanwhile, prop firms are literally paying traders to trade their capital. You're funding your education with your own dwindling account while professional traders use other people's money. The smartest move in trading isn't just learning strategy. It's learning how to access leverage without risking your savings.`,
  },
];

export default function Problem() {
  return (
    <Section id="problem" dark>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">
          Why Most Traders Fail
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          You're stuck in one of these patterns. Let's break the cycle.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden h-full hover:border-red-500/50 transition-colors duration-300">
              {/* Problem image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/90 via-gray-800/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl">{problem.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-red-400">{problem.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{problem.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-xl text-primary-400 font-semibold">
          There's a better way. Let me show you.
        </p>
      </motion.div>
    </Section>
  );
}
