'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Star, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'Certified quality standards ensuring premium materials',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Best quality products with minimum budget and best service',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Shield,
    title: 'Trusted Brand',
    description: 'Established brand with proven track record of quality',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Very good sales staff and store environment',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
            About Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are a premier interior design specialist committed to making your dream space a reality
            with quality craftsmanship and certified materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Customer Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Best quality products with minimum budget and best service",
                author: "Verified Customer"
              },
              {
                text: "You will find best quality brands at most reasonable prices",
                author: "Happy Client"
              },
              {
                text: "Very good sales staff, and store environment is very good",
                author: "Satisfied Customer"
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="text-sm font-semibold text-slate-800">- {review.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
