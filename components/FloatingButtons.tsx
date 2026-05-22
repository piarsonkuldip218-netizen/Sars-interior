'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingButtons() {
  const phoneNumber = '0000000000';
  const whatsappNumber = '910000000000'; // WhatsApp format without +

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="glass rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <MessageCircle 
          className="w-7 h-7 text-green-600 group-hover:text-green-500 transition-colors" 
        />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="glass rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Phone 
          className="w-7 h-7 text-blue-600 group-hover:text-blue-500 transition-colors" 
        />
      </motion.a>
    </div>
  );
}
