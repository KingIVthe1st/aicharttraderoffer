'use client';

import { motion } from 'framer-motion';
import Section from './Section';

const benefits = [
  {
    title: 'Transparent Pricing & Execution',
    icon: '📊',
    description: `Futures contracts trade on centralized exchanges with Level 2 market data. You see every buyer and seller. No market makers gaming your stop losses. No payment for order flow sending your trades to the highest bidder. Just transparent price discovery and fair execution.`,
  },
  {
    title: 'Superior Leverage Structure',
    icon: '⚡',
    description: `With futures, you can control $100,000 in notional value with a $5,000 margin requirement. This isn't gambling. It's efficient capital deployment. Unlike borrowing on margin (with interest and margin calls), futures leverage is built into the contract structure. Learn to manage this responsibly, and you'll trade like institutions do.`,
  },
  {
    title: 'Prop Firm Compatibility',
    icon: '🏆',
    description: `ES, NQ, and CL futures are the primary instruments used in prop firm evaluations. Traders who pass these evaluations may gain access to funded accounts ranging from $50K-$250K in buying power. While results vary and success is never guaranteed, learning futures with prop firm evaluation in mind can give you a structured goal to work toward. Many professional traders began their careers through this pathway.`,
  },
  {
    title: '24/7 Market Access',
    icon: '🌍',
    description: `Futures markets trade nearly around the clock. Whether you're a night owl or early riser, you can trade quality setups on your schedule. No waiting for market open. No gaps that blow through your stops. Continuous price action means continuous opportunity.`,
  },
  {
    title: 'Tax Efficiency',
    icon: '💰',
    description: `Under Section 1256, futures trades receive favorable 60/40 tax treatment (60% long-term, 40% short-term capital gains), regardless of holding period. For active traders, this can save thousands annually compared to equity or options taxation.`,
  },
  {
    title: 'Risk-Defined Position Sizing',
    icon: '🧮',
    description: `Futures contracts offer standardized margin requirements that let you calculate exact risk before any trade. Know precisely how much capital each ES or NQ contract requires. This is critical for prop firm evaluations where miscalculated positions can end your account. Learn the position sizing formulas that separate funded traders from failed evaluations.`,
  },
];

export default function FuturesFoundation() {
  return (
    <Section id="futures">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
          Why Futures First
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Futures trading is where professionals start, and for good reason. Unlike options, futures contracts are straightforward: you're agreeing to buy or sell an asset at a specific price on a future date. No Greeks to decode. No theta decay eating your position overnight. Just pure directional conviction with defined leverage.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10"
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-primary-300">{benefit.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Prop Firm Flow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-gradient-to-r from-primary-900/20 to-accent-900/20 border border-primary-500/30 rounded-2xl p-8 mt-12"
      >
        <h3 className="text-2xl font-bold mb-4 text-center text-primary-300">
          The Prop Firm Evaluation Path
        </h3>
        <p className="text-sm text-gray-400 text-center mb-6 italic">
          Individual results vary. Passing evaluations requires demonstrated skill, discipline, and consistency. Success is never guaranteed.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex-1">
            <div className="text-3xl mb-2">📚</div>
            <p className="font-semibold text-white">Learn Futures Trading</p>
            <p className="text-sm text-gray-400">Master the fundamentals</p>
          </div>
          <div className="text-primary-400 text-3xl">→</div>
          <div className="flex-1">
            <div className="text-3xl mb-2">🎯</div>
            <p className="font-semibold text-white">Pass Prop Firm Evaluation</p>
            <p className="text-sm text-gray-400">Demonstrate consistency</p>
          </div>
          <div className="text-primary-400 text-3xl">→</div>
          <div className="flex-1">
            <div className="text-3xl mb-2">💼</div>
            <p className="font-semibold text-white">Trade $50K to $250K</p>
            <p className="text-sm text-gray-400">Their capital, not yours</p>
          </div>
          <div className="text-primary-400 text-3xl">→</div>
          <div className="flex-1">
            <div className="text-3xl mb-2">💸</div>
            <p className="font-semibold text-white">Keep 80 to 90% of Profits</p>
            <p className="text-sm text-gray-400">Potential funding opportunity</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
