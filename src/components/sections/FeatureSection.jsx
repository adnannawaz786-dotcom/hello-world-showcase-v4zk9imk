import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const FeatureSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Built with Vite for blazing fast development and optimized production builds.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:border-blue-400',
      stats: '99.9% Uptime'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Crafted with Tailwind CSS for stunning, responsive, and modern user interfaces.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:border-purple-400',
      stats: '100+ Components'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Interactive Elements',
      description: 'Smooth animations and micro-interactions that delight users and enhance UX.',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      hoverColor: 'hover:border-amber-400',
      stats: '60fps Animations'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Seamlessly adapts to all screen sizes from mobile phones to desktop displays.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverColor: 'hover:border-green-400',
      stats: 'Mobile First'
    },
    {
      id: 5,
      icon: '🔧',
      title: 'Developer Friendly',
      description: 'Clean, maintainable code with modern React patterns and best practices.',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      hoverColor: 'hover:border-indigo-400',
      stats: 'TypeScript Ready'
    },
    {
      id: 6,
      icon: '🌟',
      title: 'Premium Quality',
      description: 'Production-ready components with attention to detail and user experience.',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      hoverColor: 'hover:border-rose-400',
      stats: 'Enterprise Grade'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Built for Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge technologies and thoughtful design decisions that make this showcase truly exceptional.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`relative group cursor-pointer transition-all duration-300 ${feature.bgColor} ${feature.borderColor} ${feature.hoverColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl`}
              onMouseEnter={() => setActiveCard(feature.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
              
              {/* Icon */}
              <div className="relative mb-6">
                <motion.div
                  animate={activeCard === feature.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-4xl mb-4"
                >
                  {feature.icon}
                </motion.div>
                <div className={`absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Stats Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${feature.color} text-white mb-4`}>
                  {feature.stats}
                </div>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={activeCard === feature.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-700 border-gray-300 hover:bg-gray-50"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-gray-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border border-gray-200 rounded-full opacity-10 group-hover:opacity-30 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Features
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;