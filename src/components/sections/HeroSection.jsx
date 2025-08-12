import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const greetings = [
    'Hello World!',
    'Welcome to React!',
    'Built with Vite!',
    'Styled with Tailwind!'
  ];

  useEffect(() => {
    setIsVisible(true);
    startTypingAnimation();
  }, []);

  const startTypingAnimation = () => {
    setIsTyping(true);
    const text = greetings[currentGreeting];
    let index = 0;
    setDisplayText('');

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        setTimeout(() => {
          eraseText();
        }, 2000);
      }
    }, 100);
  };

  const eraseText = () => {
    const text = displayText;
    let index = text.length;

    const eraseInterval = setInterval(() => {
      if (index > 0) {
        setDisplayText(text.substring(0, index - 1));
        index--;
      } else {
        clearInterval(eraseInterval);
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
        setTimeout(() => {
          startTypingAnimation();
        }, 500);
      }
    }, 50);
  };

  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToShowcase = () => {
    const showcaseSection = document.getElementById('showcase');
    if (showcaseSection) {
      showcaseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-12 animate-pulse">
              <svg className="w-10 h-10 text-white transform -rotate-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Animated Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {displayText}
            <span className={`inline-block w-1 h-16 bg-blue-600 ml-1 ${isTyping ? 'animate-pulse' : 'animate-blink'}`}></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          A modern showcase of{' '}
          <span className="font-semibold text-blue-600">React</span>,{' '}
          <span className="font-semibold text-purple-600">Vite</span>, and{' '}
          <span className="font-semibold text-pink-600">Tailwind CSS</span>
          <br />
          featuring beautiful layouts, interactive components, and smooth animations
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={handleScrollToFeatures}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">Explore Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Button>
          
          <Button 
            onClick={handleScrollToShowcase}
            variant="outline"
            className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Showcase
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">⚡</div>
            <div className="text-sm text-gray-600">Lightning Fast</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2">🎨</div>
            <div className="text-sm text-gray-600">Beautiful Design</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-pink-600 mb-2">📱</div>
            <div className="text-sm text-gray-600">Fully Responsive</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;