'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Stethoscope,
  Smile,
  ShieldCheck,
  Brackets,
  Activity,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatment for a brighter, confident smile in a single visit.',
    features: ['Same-day results', 'Painless procedure', 'Long-lasting effect'],
    gradient: 'from-cyan-400 to-teal-500',
    glow: 'shadow-cyan-500/30',
  },
  {
    icon: Stethoscope,
    title: 'Dental Check-ups',
    description: 'Comprehensive oral examinations with X-rays to detect issues early.',
    features: ['Full mouth exam', 'Digital X-ray', 'Custom care plan'],
    gradient: 'from-teal-500 to-emerald-500',
    glow: 'shadow-teal-500/30',
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    description: 'Smile makeovers including veneers, bonding, and aesthetic corrections.',
    features: ['Veneers', 'Bonding', 'Smile design'],
    gradient: 'from-amber-400 to-orange-500',
    glow: 'shadow-amber-500/30',
  },
  {
    icon: ShieldCheck,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement that looks, feels, and functions naturally.',
    features: ['Titanium implants', 'Lifetime durability', 'Natural appearance'],
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/30',
  },
  {
    icon: Activity,
    title: 'Root Canal Treatment',
    description: 'Painless modern root canal therapy to save your natural tooth.',
    features: ['Painless procedure', 'Single sitting', 'Tooth preservation'],
    gradient: 'from-rose-400 to-pink-500',
    glow: 'shadow-rose-500/30',
  },
  {
    icon: Brackets,
    title: 'Orthodontics',
    description: 'Braces and aligners to perfectly straighten your teeth at any age.',
    features: ['Metal & ceramic braces', 'Clear aligners', 'Custom plans'],
    gradient: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/30',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-cyan border border-cyan-400/30 text-cyan-300 text-sm tracking-widest uppercase mb-6">
            Our Services
          </span>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            <span className="text-white/90">Complete</span>{' '}
            <span className="gradient-text-premium italic font-light">Dental Care</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From routine check-ups to advanced cosmetic procedures —
            everything you need for a healthy, beautiful smile under one roof.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className="group relative glass rounded-3xl p-8 border border-white/5 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl ${service.glow}`}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-10 md:p-14 text-center border border-cyan-400/20 overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ready for your <span className="gradient-text-premium italic">brightest smile</span>?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Book a consultation today. Our team will guide you through the perfect treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 rounded-full font-semibold shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all duration-300 lift-on-hover"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919678470718"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 lift-on-hover border border-white/20"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
