'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { useState } from 'react';

const faqs = [
  {
    question: "I'm a complete beginner—is this too advanced?",
    answer: `No. I prefer working with beginners because you haven't developed bad habits yet. This program assumes zero trading knowledge. We start with absolute fundamentals: what futures contracts are, how margin works, why markets move. The AI platform adjusts to your experience level automatically. That said, you DO need prerequisite mindset: commitment to learning, comfort with technology, and realistic expectations (this is education, not get-rich-quick). If you bring the mindset, I'll provide the method.`,
  },
  {
    question: 'How is this different from other trading courses?',
    answer: `Three key differences: (1) Individual mentorship, not group calls or pre-recorded videos. (2) AI-powered practice tool that provides instant feedback 24/7. (3) Taught by the developer who built the platform, not a marketer who licensed it. Most courses teach strategy without teaching you how to adapt it to your unique psychology and schedule. We build YOUR system, not my system. Also, I'm transparent about my background—I'm a developer who trades, not a trading guru who quit trading to sell courses.`,
  },
  {
    question: "What if I don't get funded by a prop firm?",
    answer: `Prop firm funding is a goal, not a guarantee. This program teaches you to trade competently—funding is a potential outcome of competence, not the program's responsibility. That said, I'll work to improve your odds: we'll practice specifically for evaluation requirements, optimize your strategy for funding rules, and I'll review your evaluation approach. If you consistently execute the system we build with discipline and proper risk management, you'll have developed the skills that prop firms look for. That doesn't guarantee funding—evaluation performance depends on many factors including market conditions and psychological resilience—but you'll be positioned far better than traders who approach evaluations unprepared.`,
  },
  {
    question: 'Do you guarantee profits?',
    answer: `Absolutely not. Anyone guaranteeing trading profits is lying. Trading involves risk, and losses are inevitable—even for professionals. What I guarantee is this: you'll learn a systematic approach, understand risk management, and develop skills that are fundable by prop firms. Profits depend on execution, discipline, and market conditions—variables I can influence but not control. My goal is making you competent enough that over time, with proper risk management, you have positive expectancy. But short-term profits? No one can guarantee those.`,
  },
  {
    question: 'What happens after the 8 sessions?',
    answer: `You keep lifetime platform access ($20/month) and can continue independent trading. Most students don't need additional mentorship after completing the program—that's the goal. However, if you want periodic check-ins or advanced strategy development, I offer discounted à la carte sessions for graduates ($200/session vs. standard $600). You're also welcome to join the private graduate community where alumni share setups, prop firm updates, and continued learning. Think of this as building a skill that lasts forever, not a dependency relationship.`,
  },
  {
    question: 'Can I use this with any broker?',
    answer: `Yes. The strategies and platform work with any broker offering futures trading (TD Ameritrade, Interactive Brokers, TradeStation, NinjaTrader, etc.). I'll help you evaluate broker options based on your needs: data fees, commission structure, platform features. I don't have affiliate relationships with brokers, so recommendations are genuinely unbiased. Most students use NinjaTrader or Tradovate for live trading and the AI platform for analysis and learning.`,
  },
  {
    question: 'Is the $20/month required?',
    answer: `Yes, but it's worth understanding why. The AI platform requires ongoing server costs, data feeds, and continuous model training. $20/month barely covers infrastructure costs—I'm subsidizing this significantly for program students. If you complete the 8 sessions and decide the platform isn't valuable, you can cancel anytime. No long-term commitment. However, 98% of graduates maintain their subscription because having 24/7 AI mentorship is like having a senior trader on speed dial.`,
  },
  {
    question: "What if I can't attend all sessions?",
    answer: `Life happens—I get it. Sessions are scheduled flexibly around your availability, and we can reschedule if emergencies arise. The program doesn't expire; it completes when you finish all 8 sessions, whether that takes 8 weeks or 12 weeks. That said, consistency matters for learning. If you can't commit to roughly one session every 7-10 days, you should wait until your schedule allows it. Sporadic engagement produces sporadic results.`,
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
          Common Questions
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Everything you need to know before making your decision.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary-400 text-2xl flex-shrink-0"
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
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 border-t border-gray-700">
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
