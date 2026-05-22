'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingButtons() {
  const phoneNumber = '09678470718';
  const whatsappNumber = '919678470718'; // WhatsApp format without +
  const whatsappMessage = encodeURIComponent(
    'Hi! I would like to book an appointment at TAMS Dental.'
  );

  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Show floating buttons after user scrolls a bit (cinematic delay)
    const handleScroll = () => {
      setShowButtons(window.scrollY > 200);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col gap-3 z-50"
        >
          {/* WhatsApp */}
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping" />

            <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 shadow-2xl shadow-emerald-500/40 group-hover:shadow-emerald-400/60 transition-shadow">
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2.2} />
            </span>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 glass rounded-full text-xs whitespace-nowrap text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
              WhatsApp Us
            </span>
          </motion.a>

          {/* Call */}
          <motion.a
            href={`tel:${phoneNumber}`}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
            aria-label="Call us"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping" style={{ animationDelay: '0.5s' }} />

            <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 shadow-2xl shadow-cyan-500/40 group-hover:shadow-cyan-400/60 transition-shadow">
              <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2.2} />
            </span>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 glass rounded-full text-xs whitespace-nowrap text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
              Call Now
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
