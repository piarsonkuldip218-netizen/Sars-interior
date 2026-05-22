'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Interior Studio
            </h3>
            <p className="text-slate-300 mb-4">
              Your trusted partner for premium interior design and modular solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="px-3 py-1 bg-slate-700 rounded-full">Quality Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li>[Your Street Address]</li>
              <li>[Area, City]</li>
              <li>[State, PIN Code]</li>
              <li className="pt-2">
                <a href="tel:+910000000000" className="hover:text-blue-400 transition-colors">
                  Phone: +91 00000 00000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p 
            className="text-slate-400 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} Interior Studio. Made with <Heart className="w-4 h-4 text-red-500 fill-current" />
          </motion.p>
          
          <div className="flex gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
