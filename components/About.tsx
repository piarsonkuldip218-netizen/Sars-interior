'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Star, Users, Stethoscope, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Certified Dentist',
    description: 'BDS qualified with 10+ years of clinical experience',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Sparkles,
    title: 'Modern Equipment',
    description: 'Latest dental technology for precise, painless treatments',
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Sterile Environment',
    description: 'Hospital-grade hygiene and complete sterilization protocol',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Caring Staff',
    description: 'Friendly, professional team committed to patient comfort',
    gradient: 'from-amber-400 to-orange-500',
  },
];

const reviews = [
  {
    text: 'Really nice experience.. well certified and great service.',
    author: 'Verified Google Review',
    rating: 4,
  },
  {
    text: 'His treatment and behaviour is very nice. Found him the best doctor for us.',
    author: 'Patient Family',
    rating: 5,
  },
  {
    text: 'I had a very pleasant experience with Dr. Hussain and his staff.',
    author: 'Happy Patient',
    rating: 5,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-cyan border border-cyan-400/30 text-cyan-300 text-sm tracking-widest uppercase mb-6">
            About Us
          </span>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            <span className="gradient-text-premium">Excellence in</span>
            <br />
            <span className="text-white/90 italic font-light">Every Smile</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            At TAMS Dental, Dr. T. Hussain combines clinical expertise with a gentle approach.
            From routine check-ups to advanced cosmetic procedures, every patient receives
            care worthy of a 4.8-star reputation.
          </p>
        </motion.div>

        {/* Doctor highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden border border-cyan-400/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 via-teal-500 to-amber-500 p-1 pulse-glow">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <Stethoscope className="w-20 h-20 text-cyan-300" strokeWidth={1.2} />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-xs font-bold rounded-full whitespace-nowrap shadow-lg">
                  Lead Dentist
                </div>
              </div>
            </div>

            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                Dr. T. Hussain
              </h3>
              <p className="text-cyan-300 text-sm uppercase tracking-widest mb-4">BDS · Dental Surgeon</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Known for his certified expertise and exceptionally gentle behaviour,
                Dr. Hussain has built TAMS Dental into one of Rangapara&apos;s most trusted
                clinics. His patients consistently highlight a pleasant experience and
                his commitment to thorough, painless care.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {['Certified', 'Gentle Care', 'Modern Tech', 'Hospital Hygiene'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 glass-cyan rounded-full text-xs text-cyan-200 border border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 group hover:border-cyan-400/40 transition-all duration-300 border border-white/5"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Patient reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              What Our <span className="gradient-text-cyan">Patients Say</span>
            </h3>
            <p className="text-slate-400">Real reviews from verified Google patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-cyan-400/30 transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4 text-cyan-400/20 text-6xl leading-none font-serif">&ldquo;</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-amber-400 fill-current' : 'text-slate-700'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-slate-200 mb-4 italic leading-relaxed relative z-10">
                  {review.text}
                </p>
                <p className="text-xs text-cyan-300/80 uppercase tracking-wider">— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
