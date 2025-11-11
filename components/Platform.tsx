'use client';

import { motion } from 'framer-motion';
import Section from './Section';

const features = [
  {
    title: 'Chart Pattern Recognition',
    icon: '🎯',
    description: `Upload any chart, any timeframe. The AI identifies head-and-shoulders, flags, wedges, and 40+ other patterns—then explains confidence levels, invalidation points, and historical win rates. But here's what matters: it teaches you WHY patterns work, not just THAT they work. Within weeks, you'll spot these patterns faster than the AI does.`,
  },
  {
    title: 'Mentor Mode',
    icon: '🧠',
    description: `Ask anything: "Why did this support level fail?" or "How do I size this position given my risk tolerance?" The AI doesn't just answer—it teaches. It breaks down concepts, provides examples, and adjusts explanations based on your experience level. It's Socratic method meets technical analysis. This mode has replaced hundreds of hours of YouTube rabbit holes for our users.`,
  },
  {
    title: 'Psychology Training',
    icon: '💭',
    description: `Trading is 80% psychology. The AI quizzes you on decision-making scenarios: "Price just broke through your stop by 2 ticks then reversed. What do you do?" It analyzes your risk tolerance, identifies emotional patterns, and builds discipline protocols. You'll learn to recognize tilt, FOMO, and revenge trading BEFORE they destroy your account.`,
  },
  {
    title: '24/7 Availability',
    icon: '⏰',
    description: `Markets don't sleep, and neither does your mentor. Asia session at 3 AM? Sunday evening prep? The AI is analyzing markets, answering questions, and helping you prepare. Meanwhile, human mentors are unavailable evenings, weekends, and holidays—exactly when you need guidance most. Standalone, this platform would cost $997/month. As part of this program, you get it for $20/month for life.`,
  },
];

export default function Platform() {
  return (
    <Section id="platform" dark>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-purple-400 to-accent-400">
          Your AI Trading Partner
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
          AI Chart Traders isn't another backtested indicator suite. It's a conversational AI mentor trained on institutional trading patterns, market psychology, and risk management principles. Ask it questions about your setup. Have it analyze your chart. Request explanation of why a pattern works or doesn't. It's like having a senior trader available 24/7 to review your analysis—except it never gets tired, never judges your questions, and learns from millions of pattern iterations.
        </p>
        <div className="inline-block px-6 py-3 bg-accent-500/10 border border-accent-500/30 rounded-lg">
          <p className="text-accent-400 font-semibold">
            This is the tool I built because I wanted it for myself. Now it's yours.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-primary-300 mt-2">{feature.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Developer Positioning */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-10 text-center"
      >
        <div className="text-4xl mb-4">👨‍💻</div>
        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
          Built by a Developer, Not a Marketer
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
          I'm not a trading guru with a rented Lamborghini. I'm a software developer who got frustrated with expensive, mediocre trading tools. So I built something better—using the same AI architecture I develop professionally. No affiliate incentives. No upsells to "secret advanced modules." Just pure technical execution focused on one goal: making you a competent, independent trader.
        </p>
      </motion.div>
    </Section>
  );
}
