import React, { useState } from 'react';
import { 
  Heart, 
  Download, 
  Share2, 
  ShoppingCart, 
  Play, 
  Pause, 
  Star,
  ArrowRight,
  Plus,
  Check,
  X,
  Settings,
  User,
  Mail
} from 'lucide-react';

const ButtonShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Button Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of beautifully crafted buttons with smooth animations and modern designs
          </p>
        </div>

        {/* Primary Buttons */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Primary Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
              <ArrowRight size={20} />
              Get Started
            </button>
            
            <button 
              onClick={() => setLiked(!liked)}
              className={`${liked ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-600 hover:bg-gray-700'} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2`}
            >
              <Heart size={20} fill={liked ? 'white' : 'none'} />
              {liked ? 'Liked' : 'Like'}
            </button>

            <button 
              onClick={handleDownload}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              ) : (
                <Download size={20} />
              )}
              {loading ? 'Downloading...' : 'Download'}
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Secondary Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <User size={20} />
              Profile
            </button>

            <button className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Settings size={20} />
              Settings
            </button>

            <button className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Check size={20} />
              Approve
            </button>

            <button className="border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <X size={20} />
              Decline
            </button>
          </div>
        </div>

        {/* Gradient Buttons */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Gradient Effects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Gradient Magic
            </button>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Ocean Wave
            </button>

            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Sunset Glow
            </button>
          </div>
        </div>

        {/* Interactive Buttons */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Interactive Elements</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              {isPlaying ? 'Pause' : 'Play'}
            </button>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3 hover:rotate-12">
              <Star size={24} />
              Rate Us
            </button>

            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3 group">
              <ShoppingCart size={24} className="group-hover:animate-bounce" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Size Variants */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Size Variants</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 hover:shadow-md">
              Small
            </button>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
              Medium
            </button>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl">
              Large
            </button>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 hover:shadow-2xl">
              Extra Large
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-pulse hover:animate-none flex items-center gap-3 mx-auto">
            <Plus size={24} />
            Create Your Button
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ButtonShowcase;