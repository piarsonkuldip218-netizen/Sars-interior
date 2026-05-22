'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Star, Phone, Calendar, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/30 to-slate-900" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-amber-500/15 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* 3D Scene */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: sceneScale, opacity: useTransform(scrollYProgress, [0, 0.6], [1, 0.3]) }}
      >
        <Scene3D />
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(2,6,23,0.6) 100%)' }} />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
        style={{ opacity, y, scale }}
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-cyan mb-8 border border-cyan-400/30"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium text-cyan-100">4.8 Rating · 68+ Reviews</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold mb-4 leading-none tracking-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          <span className="gradient-text-premium text-glow-cyan">TAMS</span>
          <br />
          <span className="text-white/90 font-light italic text-6xl md:text-8xl">Dental</span>
        </motion.h1>

        {/* Doctor name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-cyan-300/90 mb-3 tracking-wider uppercase font-light"
        >
          By Dr. T. Hussain · BDS
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Premium dental care crafted with precision, delivered with warmth.
          <br className="hidden md:block" />
          Where every smile is a masterpiece.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 rounded-full font-semibold shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all duration-300 lift-on-hover overflow-hidden"
          >
            <span className="absolute inset-0 shimmer" />
            <Calendar className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Book Appointment</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:09678470718"
            className="group inline-flex items-center gap-3 px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 lift-on-hover border border-white/20"
          >
            <Phone className="w-5 h-5 text-cyan-300 group-hover:rotate-12 transition-transform" />
            <span>Call: 096784 70718</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: 'Happy Patients', value: '2000+' },
            { label: 'Google Rating', value: '4.8★' },
            { label: 'Years Experience', value: '10+' },
            { label: 'Procedures', value: '50+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-5 hover:glass-cyan transition-all duration-300 group cursor-default"
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-cyan mb-1 group-hover:text-glow-cyan transition-all">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-cyan-300/60 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-cyan-400/40 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ height: ['30%', '60%', '30%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 bg-gradient-to-b from-cyan-300 to-cyan-500 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
