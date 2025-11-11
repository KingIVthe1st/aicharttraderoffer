'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400 mb-4">
              AI Chart Traders Elite
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Master futures trading with AI-powered mentorship from the developer who built the platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#futures" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Why Futures First
                </a>
              </li>
              <li>
                <a href="#platform" className="text-gray-400 hover:text-primary-400 transition-colors">
                  AI Platform
                </a>
              </li>
              <li>
                <a href="#mentor" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Meet Ivanlee
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@aicharttraders.com</li>
              <li>Platform: <a href="https://aicharttraders.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">aicharttraders.com</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-400">Risk Disclosure:</strong> Trading futures and other financial instruments involves substantial risk and is not suitable for everyone. Past performance is not indicative of future results. You should carefully consider whether trading is suitable for you in light of your circumstances, knowledge, and financial resources. You may lose all or more of your initial investment. Opinions, market data, and recommendations are subject to change at any time. This is educational content only and should not be considered financial advice.
            </p>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AI Chart Traders. All rights reserved.</p>
            <p className="mt-2">Built with technical mastery by Ivanlee Jackson</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
