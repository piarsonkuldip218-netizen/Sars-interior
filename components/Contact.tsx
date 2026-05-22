'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-blob animation-delay-2000" />
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
            Visit Us
          </span>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            <span className="text-white/90">Your Smile</span>
            <br />
            <span className="gradient-text-premium italic font-light">Starts Here</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Conveniently located in Rangapara. Drop in, call, or message us — we&rsquo;re here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact info cards */}
          <div className="space-y-6">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-8 border border-white/5 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Clinic Address
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Ground floor, Naman Bhawan,<br />
                    Opposite Joydev Cinema Hall,<br />
                    Rangapara, No.1 Thakurbari T.E.,<br />
                    Assam 784505
                  </p>
                  <a
                    href="https://maps.google.com/?q=TAMS+Dental+Dr+T+Hussain+Rangapara+Assam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    Get Directions <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-8 border border-white/5 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Call Us
                  </h3>
                  <a
                    href="tel:09678470718"
                    className="text-2xl font-semibold gradient-text-cyan hover:opacity-80 transition-opacity inline-block"
                  >
                    096784 70718
                  </a>
                  <p className="text-sm text-slate-400 mt-1">Tap to call instantly</p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-8 border border-white/5 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/30">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Open Hours
                  </h3>
                  <div className="space-y-1.5 text-slate-300">
                    <div className="flex justify-between">
                      <span>Monday – Saturday</span>
                      <span className="text-cyan-300 font-medium">9:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-300 font-medium">Open Now</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-3xl p-8 border border-white/5"
            >
              <h3 className="text-xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://wa.me/919678470718"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/30"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-7 h-7 text-white" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/30"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7 text-white" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30"
                  aria-label="Facebook"
                >
                  <Facebook className="w-7 h-7 text-white" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-3 border border-white/5 hover:border-cyan-400/30 transition-all duration-300 min-h-[600px] lg:min-h-full overflow-hidden relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.123!2d92.6692!3d26.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ5JzAwLjAiTiA5MsKwNDAnMDkuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.5rem', minHeight: '600px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl filter grayscale-[20%] contrast-110"
              title="TAMS Dental Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
