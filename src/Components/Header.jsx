import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`transition-all duration-300 sticky top-0 z-50 ${
      isScrolled 
        ? 'bg-white shadow-xl backdrop-blur-lg bg-white/95' 
        : 'bg-gradient-to-r from-blue-900 to-blue-800'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-xl ${
              isScrolled 
                ? 'bg-blue-700 text-white shadow-lg' 
                : 'bg-white text-blue-900'
            } transition-all duration-300`}>
              <span className="text-xl font-bold tracking-tight">LP</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${
                isScrolled ? 'text-blue-900' : 'text-white'
              } transition-colors duration-300`}>
                Laddha Precast
              </span>
              <span className={`text-xs ${
                isScrolled ? 'text-blue-600' : 'text-blue-200'
              } transition-colors duration-300 font-medium`}>
                Building Tomorrow, Today
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`font-semibold transition-all duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-blue-900 hover:text-orange-500' : 'text-white hover:text-orange-300'
              } relative group`}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className={`font-semibold transition-all duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-blue-900 hover:text-orange-500' : 'text-white hover:text-orange-300'
              } relative group`}
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#products" 
              className={`font-semibold transition-all duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-blue-900 hover:text-orange-500' : 'text-white hover:text-orange-300'
              } relative group`}
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#applications" 
              className={`font-semibold transition-all duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-blue-900 hover:text-orange-500' : 'text-white hover:text-orange-300'
              } relative group`}
            >
              Applications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#clients" 
              className={`font-semibold transition-all duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-blue-900 hover:text-orange-500' : 'text-white hover:text-orange-300'
              } relative group`}
            >
              Clients
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isScrolled 
                  ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg' 
                  : 'bg-white text-blue-900 hover:bg-blue-50'
              } hover:scale-105`}
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-blue-900 hover:bg-blue-50' 
                : 'text-white hover:bg-blue-700'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 rounded-xl transition-all duration-300 ${
            isScrolled ? 'bg-white/90 backdrop-blur-lg' : 'bg-blue-800/90 backdrop-blur-lg'
          }`}>
            <div className="flex flex-col space-y-1 p-4">
              <a 
                href="#home" 
                className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-blue-900 hover:bg-blue-50 hover:text-orange-500' 
                    : 'text-white hover:bg-blue-700 hover:text-orange-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-blue-900 hover:bg-blue-50 hover:text-orange-500' 
                    : 'text-white hover:bg-blue-700 hover:text-orange-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#products" 
                className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-blue-900 hover:bg-blue-50 hover:text-orange-500' 
                    : 'text-white hover:bg-blue-700 hover:text-orange-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#applications" 
                className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-blue-900 hover:bg-blue-50 hover:text-orange-500' 
                    : 'text-white hover:bg-blue-700 hover:text-orange-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Applications
              </a>
              <a 
                href="#clients" 
                className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-blue-900 hover:bg-blue-50 hover:text-orange-500' 
                    : 'text-white hover:bg-blue-700 hover:text-orange-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </a>
              <a 
                href="#contact" 
                className={`py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 mt-2 ${
                  isScrolled 
                    ? 'bg-orange-500 text-white hover:bg-orange-600' 
                    : 'bg-white text-blue-900 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header