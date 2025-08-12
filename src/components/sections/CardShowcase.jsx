import React from 'react';
import { Button } from '../ui/button';

const CardShowcase = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Lightning-fast load times with optimized React and Vite configuration.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Stunning UI components built with Tailwind CSS and modern design principles.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📱',
      title: 'Responsive Layout',
      description: 'Perfectly responsive design that works seamlessly across all devices.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: '📊' },
    { label: 'Happy Clients', value: '98%', icon: '😊' },
    { label: 'Code Quality', value: 'A+', icon: '⭐' },
    { label: 'Response Time', value: '<1s', icon: '⚡' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      avatar: '👩‍💻',
      quote: 'This showcase demonstrates excellent React development practices and beautiful design patterns.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'UI/UX Designer',
      avatar: '👨‍🎨',
      quote: 'The attention to detail and smooth animations make this a standout example of modern web development.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Card Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore different card layouts and designs that bring your content to life
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Feature Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <Button variant="outline" className="group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Statistics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Testimonials</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-1 shadow-2xl">
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Join thousands of developers who are building amazing applications with modern tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Button>
                <Button variant="outline" className="px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardShowcase;