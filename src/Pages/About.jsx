import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full -translate-y-32 translate-x-32 opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full translate-y-40 -translate-x-40 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-4 py-2 rounded-full">
              ABOUT US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Laddha Precast Industries</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Legacy of excellence in precast concrete manufacturing since 1982
          </p>
        </div>

        {/* Founders Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-600">Leadership</span>
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Meet the visionary leaders behind our success story
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-6">
                <div className="relative mb-5 mx-auto w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Shri Subhashchandra Laddha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1 text-center">Shri Subhashchandra Laddha</h4>
                <p className="text-orange-600 font-semibold mb-3 text-center text-sm">Founder & Chairman</p>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Visionary leader with 40+ years experience in construction industry. Founded Pankaj Pipes in 1982.
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-6">
                <div className="relative mb-5 mx-auto w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Mr. Manish Laddha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1 text-center">Mr. Manish Laddha</h4>
                <p className="text-blue-600 font-semibold mb-3 text-center text-sm">Managing Director</p>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Driving force behind strategic partnerships and business expansion across Maharashtra.
                </p>
              </div>
            </div>

            {/* Founder 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-6">
                <div className="relative mb-5 mx-auto w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Er. Yash Laddha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1 text-center">Er. Yash Laddha</h4>
                <p className="text-green-600 font-semibold mb-3 text-center text-sm">Technical Director</p>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Oversees technical operations and brings innovation to manufacturing processes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Legacy & Growth</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              From our humble beginnings in 1982 with Pankaj Pipes to becoming <span className="font-semibold text-orange-600">Laddha Precast Industries</span>, we have consistently evolved while maintaining our core values of <span className="font-semibold">quality, reliability, and innovation</span>. Our journey spans four decades of serving Maharashtra's infrastructure needs.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-600 mb-1">40+</div>
                <div className="text-gray-700 text-sm font-medium">Years of Legacy</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">All</div>
                <div className="text-gray-700 text-sm font-medium">Maharashtra Presence</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-1">1000+</div>
                <div className="text-gray-700 text-sm font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                <div className="text-gray-700 text-sm font-medium">Generations Strong</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1982</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Pankaj Pipes Legacy</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our journey began in 1982 with Pankaj Pipes in Akola, building a strong foundation in the construction industry.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Strategic Partnership</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Strong association with industry leaders brings decades of expertise to deliver superior precast solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">→</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Laddha Precast Vision</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Extending our legacy across Maharashtra with comprehensive precast concrete solutions and unmatched quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-600">Laddha Precast?</span>
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover what sets us apart in the precast concrete industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "We Build Quality",
                description: "Precisely manufactured products ensuring highest standards of quality and sustainability with first-rate materials.",
                color: "bg-blue-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Complete Solutions",
                description: "One-stop destination for all precast concrete needs with wide range of products for every application.",
                color: "bg-orange-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Expert Knowledge",
                description: "Decades of experience assisting customers from product selection to specifications and diagrammatic assistance.",
                color: "bg-green-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Raw Material Expertise",
                description: "Advanced knowledge of raw materials ensures only finest materials are used in manufacturing processes.",
                color: "bg-purple-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
                title: "Competitive Pricing",
                description: "Reasonable quotation structures with premium quality deliverance ensuring customer satisfaction.",
                color: "bg-red-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "On-time Delivery",
                description: "Timely deliverance with real-time services essential for overall customer satisfaction.",
                color: "bg-indigo-600"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 group">
                <div className="flex items-start space-x-4">
                  <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build with Us?</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Partner with Laddha Precast Industries for your next construction project and experience excellence in every detail.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>Get in Touch</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;