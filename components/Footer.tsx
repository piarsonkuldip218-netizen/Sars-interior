'use client';

import { motion } from 'framer-motion';
import { Heart, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white py-16 overflow-hidden border-t border-cyan-500/10">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              <span className="gradient-text-premium">TAMS</span>{' '}
              <span className="text-white/80 italic font-light">Dental</span>
            </h3>
            <p className="text-slate-400 mb-4 max-w-md leading-relaxed">
              Premium dental care by Dr. T. Hussain. Crafting healthy, beautiful smiles
              for the people of Rangapara and beyond.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-cyan rounded-full border border-cyan-400/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-cyan-200 font-medium">4.8★ on Google · 68+ reviews</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-slate-400">
              {[
                { label: 'About Dr. Hussain', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Visit Clinic', href: '#contact' },
                { label: 'Book Appointment', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-cyan-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Naman Bhawan, Rangapara,<br />Assam 784505
                </span>
              </li>
              <li>
                <a
                  href="tel:09678470718"
                  className="flex items-center gap-3 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">096784 70718</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-sm">Mon–Sat · 9 AM – 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-slate-500 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            © {currentYear} TAMS Dental. Crafted with{' '}
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" /> for healthier smiles.
          </motion.p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-cyan-300 transition-colors">Privacy</a>
            <span className="text-slate-700">·</span>
            <a href="#" className="hover:text-cyan-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
