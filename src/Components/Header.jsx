import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Applications', href: '/applications' },
    { name: 'Clients', href: '/clients' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-2xl' 
        : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-4 group">
            <div className={`relative transition-all duration-500 ${
              isScrolled ? 'scale-95' : 'scale-100'
            }`}>
              {/* Logo Container with Gradient Border */}
              <div className={`p-1 rounded-2xl transition-all duration-500 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-orange-500 to-orange-600' 
                  : 'bg-gradient-to-br from-orange-400 to-orange-600'
              }`}>
                <div className={`px-4 py-3 rounded-xl transition-all duration-500 ${
                  isScrolled 
                    ? 'bg-white' 
                    : 'bg-gray-900'
                }`}>
                  <svg 
                    className={`w-8 h-8 transition-all duration-500 ${
                      isScrolled ? 'text-orange-600' : 'text-orange-500'
                    }`} 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    {/* Building/Construction Icon */}
                    <path d="M12 3L2 9v12h20V9L12 3zm0 2.8L19 10v9h-2v-6h-2v6h-2v-6h-2v6H9v-6H7v6H5v-9l7-4.2z"/>
                  </svg>
                </div>
              </div>
              {/* Decorative Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${
                isScrolled ? 'bg-orange-500' : 'bg-orange-400'
              }`}></div>
            </div>
            
            {/* Company Name */}
            <div className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tight transition-all duration-500 ${
                isScrolled 
                  ? 'text-gray-900' 
                  : 'text-white'
              }`}>
                Laddha Precast
              </span>
              <span className={`text-xs font-semibold tracking-wider uppercase transition-all duration-500 ${
                isScrolled 
                  ? 'text-orange-600' 
                  : 'text-orange-400'
              }`}>
                Building Tomorrow, Today
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 rounded-lg font-semibold transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-orange-600' 
                    : 'text-gray-200 hover:text-orange-400'
                }`}
              >
                <span className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isScrolled ? 'bg-orange-50' : 'bg-white/5'
                }`}></span>
                <span className="relative z-10">{link.name}</span>
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 ${
                  isScrolled ? 'bg-orange-600' : 'bg-orange-400'
                }`}></span>
              </a>
            ))}
            
            {/* Contact CTA Button */}
            <a
              href="/contact"
              className={`ml-4 px-6 py-2.5 rounded-full font-bold transition-all duration-300 relative overflow-hidden group ${
                isScrolled 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40' 
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60'
              } hover:scale-105`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center space-x-2">
                <span>Contact Us</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-900 hover:bg-orange-50' 
                : 'text-white hover:bg-gray-800'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 rounded-2xl my-4 transition-all duration-300 ${
            isScrolled 
              ? 'bg-gradient-to-br from-gray-50 to-orange-50' 
              : 'bg-gradient-to-br from-gray-800 to-gray-900'
          }`}>
            <div className="flex flex-col space-y-1 px-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform ${
                    isScrolled 
                      ? 'text-gray-800 hover:bg-white hover:text-orange-600 hover:shadow-md' 
                      : 'text-gray-200 hover:bg-gray-700 hover:text-orange-400'
                  } hover:scale-105 hover:translate-x-2`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 50}ms both` : 'none'
                  }}
                >
                  <span className="flex items-center justify-between">
                    {link.name}
                    <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
              
              {/* Mobile Contact Button */}
              <a
                href="/contact"
                className={`mt-4 py-3 px-6 rounded-xl font-bold text-center transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl'
                } hover:scale-105`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}

export default Header