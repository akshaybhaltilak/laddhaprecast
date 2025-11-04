import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-white text-blue-900 shadow-lg">
                <span className="text-xl font-bold">LP</span>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold">Laddha Precast</div>
                <div className="text-xs text-blue-200 font-medium">Building Tomorrow, Today</div>
              </div>
            </div>

            <p className="text-blue-100 mb-4 max-w-md">
              Laddha Precast delivers high-quality precast concrete solutions for infrastructure,
              residential and industrial projects. Durable, reliable and built with precision.
            </p>

            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-blue-100 hover:text-orange-400 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.864-3.059-1.864 0-2.149 1.454-2.149 2.959v5.704h-3v-10h2.879v1.367h.041c.401-.758 1.379-1.558 2.838-1.558 3.036 0 3.6 1.998 3.6 4.593v5.598z"/>
                </svg>
              </a>

              <a href="#" aria-label="Twitter" className="text-blue-100 hover:text-orange-400 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>

              <a href="#" aria-label="Facebook" className="text-blue-100 hover:text-orange-400 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.595-1.325 1.326v21.348c0 .731.593 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.767v2.311h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.595 1.324-1.326v-21.349c0-.731-.594-1.326-1.324-1.326z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-orange-400 transition duration-300">Home</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-orange-400 transition duration-300">About Us</a></li>
              <li><a href="#products" className="text-blue-100 hover:text-orange-400 transition duration-300">Products</a></li>
              <li><a href="#applications" className="text-blue-100 hover:text-orange-400 transition duration-300">Applications</a></li>
              <li><a href="#clients" className="text-blue-100 hover:text-orange-400 transition duration-300">Clients</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-orange-400 transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-blue-100">
              <p>📞 +91 9022153595</p>
              <p>🏭 Laddha Precast, Nagar Road</p>
              <p>Wardha / Akola Region</p>
              <p>📧 info@laddhaprecast.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} Laddha Precast. All rights reserved. | Developed by <span className="text-orange-400">Webreich Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
