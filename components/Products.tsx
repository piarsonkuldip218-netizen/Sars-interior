'use client';

import { motion } from 'framer-motion';
import { Layers, Home, Frame, Wallpaper, Sparkles, DoorOpen } from 'lucide-react';

const products = [
  {
    icon: Layers,
    title: 'Premium Plywood',
    description: 'High-quality plywood from top brands for all your interior needs',
    features: ['Waterproof', 'Termite Resistant', 'BWP/BWR Grade'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Home,
    title: 'Modular Kitchens',
    description: 'Custom designed modular kitchen accessories and complete solutions',
    features: ['Modern Designs', 'Space Efficient', 'Premium Hardware'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Frame,
    title: 'Glass Solutions',
    description: 'Imported and designer glass for partitions, doors, and decorative purposes',
    features: ['Toughened Glass', 'Designer Patterns', 'Custom Sizes'],
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Wallpaper,
    title: 'Wallpapers',
    description: 'Imported wallpapers with exclusive designs to transform your spaces',
    features: ['Premium Quality', 'Easy Maintenance', 'Diverse Patterns'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Sparkles,
    title: 'Mica & Veneers',
    description: 'Top-grade mica and veneers for elegant furniture finishing',
    features: ['Scratch Resistant', 'Heat Resistant', 'Rich Textures'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: DoorOpen,
    title: 'Aluminum Doors & Windows',
    description: 'Modern aluminum doors and windows with superior durability',
    features: ['Weather Resistant', 'Low Maintenance', 'Sleek Design'],
    gradient: 'from-teal-500 to-emerald-500',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Our Products & Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Shop for premium plywood, glass, imported wallpapers, mica, veneers, aluminum doors & windows, and complete modular kitchen solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {product.title}
                </h3>
                
                <p className="text-slate-600 mb-6">
                  {product.description}
                </p>

                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 w-full py-3 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            DM us for Inquiries
          </h3>
          <p className="text-xl text-slate-600 mb-6">
            Get expert advice and custom quotes for your interior design projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/916000090678"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              WhatsApp Us
            </motion.a>
            <motion.a
              href="tel:06000090678"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
