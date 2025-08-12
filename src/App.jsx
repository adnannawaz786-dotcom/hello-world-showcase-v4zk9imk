import React, { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      id: 1,
      title: "Modern Design",
      description: "Built with React, Vite, and Tailwind CSS for optimal performance and beautiful UI.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Responsive Layout",
      description: "Fully responsive design that works perfectly on desktop, tablet, and mobile devices.",
      icon: "📱",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Interactive Elements",
      description: "Engaging buttons, cards, and animations that provide excellent user experience.",
      icon: "⚡",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Fast Performance",
      description: "Lightning-fast loading times and smooth animations powered by Vite build tool.",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    }
  ]

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId)
  }

  const handleGetStarted = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hello World
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Welcome to our modern showcase featuring beautiful layouts, interactive components, and stunning design patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            <div className="text-gray-400 text-lg">
              Current Time: {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Amazing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover what makes our hello world application special with these incredible features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.id}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  activeCard === feature.id ? 'ring-4 ring-purple-500' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleCardClick(feature.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>
                <div className="relative p-6">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                  {activeCard === feature.id && (
                    <div className="mt-4 pt-4 border-t border-gray-600 animate-fade-in">
                      <Button 
                        size="sm"
                        className={`bg-gradient-to-r ${feature.color} text-white hover:shadow-lg transition-all duration-300`}
                      >
                        Explore More
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Interactive Demo
            </h2>
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['Primary', 'Secondary', 'Success', 'Warning'].map((variant, index) => (
                  <Button
                    key={variant}
                    className={`transform hover:scale-105 transition-all duration-300 ${
                      index === 0 ? 'bg-blue-600 hover:bg-blue-700' :
                      index === 1 ? 'bg-gray-600 hover:bg-gray-700' :
                      index === 2 ? 'bg-green-600 hover:bg-green-700' :
                      'bg-yellow-600 hover:bg-yellow-700'
                    }`}
                  >
                    {variant}
                  </Button>
                ))}
              </div>
              <p className="text-gray-300 text-lg">
                Click any button above to see our interactive components in action!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-lg">
            Built with ❤️ using React + Vite + Tailwind CSS
          </p>
          <p className="text-gray-500 mt-2">
            Hello World Showcase © 2024
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App