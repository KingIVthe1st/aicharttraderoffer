'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-black to-accent-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/40 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-300">
            Your Next Step
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            You're at a decision point that separates casual interest from real commitment. Most people will read this entire page, nod along, and do nothing—then wonder in six months why they're still stuck.
          </p>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            The traders who develop genuine skill aren't necessarily smarter or more talented—they're decisive, committed, and willing to invest in structured learning rather than expensive trial and error. They recognize quality education when they see it and act before spots fill. This program won't be available forever at this price—as the platform scales, pricing will reflect market value.
          </p>

          {/* Dual CTA */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border-2 border-primary-500 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary-300 mb-4">Ready to Start?</h3>
              <p className="text-gray-300 mb-6">
                Join the program today and begin your development journey toward trading competence.
              </p>
              <Button variant="primary" size="lg" className="w-full" onClick={() => window.location.href = 'https://buy.stripe.com/3cI8wP44BfahdZ13cc'}>
                Enroll for $1,000
              </Button>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>Start within 24 hours</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>Money back guarantee</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-accent-400 mb-4">Want to See It First?</h3>
              <p className="text-gray-300 mb-6">
                Book a free 20-minute demo to see the platform and ask questions.
              </p>
              <Button variant="secondary" size="lg" className="w-full" onClick={() => window.location.href = '#demo'}>
                Book Free Demo
              </Button>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>No sales pressure</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Final urgency */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: 'spring' }}
            className="inline-block"
          >
            <div className="px-8 py-4 bg-red-500/20 border-2 border-red-500 rounded-xl backdrop-blur-sm">
              <p className="text-red-400 font-bold text-xl">
                ⚠️ Only 2 spots left this month
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Next cohort opens December 1st (waitlist only)
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
