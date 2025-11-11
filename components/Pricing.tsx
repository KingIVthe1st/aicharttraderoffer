'use client';

import { motion, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import Button from './Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Pricing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="pricing" dark>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
          Investment Details
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
          Quality education costs less than expensive mistakes. Many traders report losing $3,000-$5,000 or more learning through trial and error before either quitting or seeking structured education. Quality mentorship can compress the learning curve and potentially reduce costly mistakes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
        {/* Option A */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          {/* Animated glow border */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-lg"
            animate={prefersReducedMotion ? { opacity: 0.75 } : {
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <div className="relative bg-gray-900 border-2 border-primary-500 rounded-2xl p-6 sm:p-8">
            <div className="text-center mb-6">
              {/* Shimmer badge */}
              <motion.div
                className="inline-block px-4 py-2 bg-primary-500 text-white font-bold rounded-lg mb-4 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={prefersReducedMotion ? {} : {
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: 'easeInOut',
                  }}
                />
                <span className="relative z-10">BEST VALUE</span>
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-2">All-In Today</h3>
              <p className="text-gray-400">Start within 24 hours</p>
            </div>

            <motion.div
              className="text-center mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <motion.div
                className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2"
                whileHover={{ scale: 1.05 }}
              >
                $997
              </motion.div>
              <p className="text-gray-400">one time payment</p>
              <div className="mt-2">
                <span className="text-xl sm:text-2xl font-semibold text-accent-400">+ $20/mo</span>
                <span className="text-gray-400 text-sm ml-2">(platform access)</span>
              </div>
            </motion.div>

            <ul className="space-y-3 mb-8">
              {[
                '8 private 1 on 1 sessions',
                'Lifetime platform access',
                'Complete prop firm setup',
                'Custom trading blueprint',
                'Priority session scheduling',
                'Immediate access to pattern library',
                '$20/mo rate locked forever',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="text-primary-400 text-xl">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary" size="lg" className="w-full" onClick={() => window.location.href = 'https://buy.stripe.com/00w8wP30x3rz6wzbfE4c801'}>
              Enroll Now - $997
            </Button>

            <p className="text-center text-sm text-gray-400 mt-4">
              Money back guarantee after 2 sessions
            </p>
          </div>
        </motion.div>

        {/* Option B */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 transition-all duration-300"
          whileHover={{
            borderColor: 'rgba(14, 165, 233, 0.5)',
            boxShadow: '0 10px 30px rgba(14, 165, 233, 0.1)',
          }}
        >
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">Free Demo Call</h3>
              <p className="text-gray-400">See it before you commit</p>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-accent-400 mb-2">$0</div>
              <p className="text-gray-400">20-minute session</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Platform walkthrough',
                'Live AI analysis demo',
                'Strategy assessment',
                'Q&A with Ivanlee',
                'Personalized recommendations',
                'No sales pressure',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="text-accent-400 text-xl">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div id="demo">
              <Button variant="secondary" size="lg" className="w-full" onClick={() => alert('Calendar booking integration coming soon!')}>
                Book Free Demo
              </Button>
            </div>

            <p className="text-center text-sm text-gray-400 mt-4">
              No credit card required
            </p>
        </motion.div>
      </div>

      {/* Guarantee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 text-center px-4"
      >
        <motion.div
          className="inline-block bg-gradient-to-r from-primary-900/30 to-accent-900/30 border border-primary-500/30 rounded-xl p-4 sm:p-6"
          whileHover={{
            scale: 1.02,
            borderColor: 'rgba(14, 165, 233, 0.5)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              className="text-4xl"
              animate={prefersReducedMotion ? {} : {
                rotate: [0, -5, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              🛡️
            </motion.div>
            <div className="text-center sm:text-left">
              <p className="text-lg sm:text-xl font-bold text-primary-300 mb-1">Money Back Guarantee</p>
              <p className="text-sm sm:text-base text-gray-300">
                If after two sessions you don&apos;t believe this program will transform your trading,
                <br className="hidden lg:block" />
                I&apos;ll refund your entire $997, no questions asked, no hard feelings.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scarcity reminder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 text-center px-4"
      >
        <motion.div
          className="inline-block px-4 sm:px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-lg relative overflow-hidden"
          animate={prefersReducedMotion ? {} : {
            borderColor: ['rgba(239, 68, 68, 0.3)', 'rgba(239, 68, 68, 0.6)', 'rgba(239, 68, 68, 0.3)'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <p className="text-red-400 font-semibold text-base sm:text-lg">
            ⚠️ Only 2 spots remaining this month • Next cohort opens in 30 days
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
