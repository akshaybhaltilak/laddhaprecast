import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6 group">
              <div className="p-1 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 transition-all duration-300 group-hover:scale-105">
                <div className="px-4 py-3 rounded-xl bg-gray-900">
                  <svg 
                    className="w-8 h-8 text-orange-500" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 3L2 9v12h20V9L12 3zm0 2.8L19 10v9h-2v-6h-2v6h-2v-6h-2v6H9v-6H7v6H5v-9l7-4.2z"/>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <div className="text-xl font-bold text-white">Laddha Precast</div>
                <div className="text-xs text-orange-400 font-semibold tracking-wider uppercase">Building Tomorrow, Today</div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Laddha Precast delivers high-quality precast concrete solutions for infrastructure,
              residential and industrial projects. Durable, reliable and built with precision.
            </p>

            {/* WhatsApp Only */}
            <div className="flex space-x-3">
              <a 
                href="https://wa.me/919021133383" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp" 
                className="p-3 rounded-xl bg-gray-800 text-gray-300 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-orange-500 mr-3 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-orange-500 transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-gray-300 hover:text-orange-500 transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/products" 
                  className="text-gray-300 hover:text-orange-500 transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="/applications" 
                  className="text-gray-300 hover:text-orange-500 transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Applications
                </a>
              </li>
              <li>
                <a 
                  href="/clients" 
                  className="text-gray-300 hover:text-orange-500 transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Clients
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-gray-300 hover:text-orange-500 transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-orange-500 mr-3 rounded-full"></span>
              Contact Info
            </h3>
            <div className="space-y-4">
              {/* Office Address */}
              <div className="flex items-start group">
                <div className="p-2 rounded-lg bg-gray-800 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Office</p>
                  <p className="text-gray-200 font-semibold text-sm">Amrut Housing Society,</p>
                  <p className="text-gray-200 font-semibold text-sm">Building No. 3, Jatharpeth,</p>
                  <p className="text-gray-200 font-semibold text-sm">Akola - 444005</p>
                </div>
              </div>

              {/* Factory Address */}
              <div className="flex items-start group">
                <div className="p-2 rounded-lg bg-gray-800 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Factory</p>
                  <p className="text-gray-200 font-semibold text-sm">Plot No. J-50, M.I.D.C. Phase III,</p>
                  <p className="text-gray-200 font-semibold text-sm">Shivni, Akola - 444104</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start group">
                <div className="p-2 rounded-lg bg-gray-800 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone Numbers</p>
                  <p className="text-gray-200 font-semibold text-sm">Mobile: 9326883292</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start group">
                <div className="p-2 rounded-lg bg-gray-800 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <p className="text-gray-200 font-semibold">+91 9021133383</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="p-2 rounded-lg bg-gray-800 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-gray-200 font-semibold">laddhaprecast@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Laddha Precast. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Developed with <span className="text-orange-500">❤</span> by{' '}
              <a 
                href="#" 
                className="text-orange-500 font-semibold hover:text-orange-400 transition-colors duration-300"
              >
                Webreich Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer