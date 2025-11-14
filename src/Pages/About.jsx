import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 rounded-full -translate-y-36 translate-x-36 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full translate-y-48 -translate-x-48 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Laddha Precast Industries</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Legacy of excellence in precast concrete manufacturing since 1982
          </p>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership</h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Meet the visionary leaders behind our success story
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Shri Ramesh Laddha"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Shri Ramesh Laddha</h4>
              <p className="text-orange-600 font-semibold mb-3">Founder & Chairman</p>
              <p className="text-gray-600 leading-relaxed">
                Visionary leader with 40+ years of experience in construction industry. 
                Founded Pankaj Pipes in 1982 and established the Laddha legacy.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Shri Sanjay Laddha"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Shri Sanjay Laddha</h4>
              <p className="text-blue-600 font-semibold mb-3">Managing Director</p>
              <p className="text-gray-600 leading-relaxed">
                Driving force behind strategic partnerships and business expansion. 
                Expert in precast concrete technology and market development.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Shri Amit Laddha"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Shri Amit Laddha</h4>
              <p className="text-green-600 font-semibold mb-3">Technical Director</p>
              <p className="text-gray-600 leading-relaxed">
                Oversees technical operations and quality control. 
                Brings innovation and modern manufacturing techniques to our processes.
              </p>
            </div>
          </div>
        </div>

        {/* Company History & Founders */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Pankaj Pipes Legacy</h4>
                  <p className="text-orange-600 font-semibold mb-3">Established 1982</p>
                  <p className="text-gray-700 leading-relaxed">
                    Our journey began in 1982 with Pankaj Pipes in Akola, building a strong foundation 
                    in the construction industry with quality products and trusted relationships.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                    alt="Management"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Strategic Partnership</h4>
                  <p className="text-blue-600 font-semibold mb-3">Parent Firm Association</p>
                  <p className="text-gray-700 leading-relaxed">
                    Our parent firm's strong association with Atul Pipes Swastik Spun Pipe & M. M. Co. Amravati brings decades of expertise 
                    and industry knowledge to deliver superior precast solutions across Maharashtra.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                    alt="Leadership"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Laddha Precast Vision</h4>
                  <p className="text-green-600 font-semibold mb-3">All Maharashtra Presence</p>
                  <p className="text-gray-700 leading-relaxed">
                    As the new flagship firm, Laddha Precast Industries extends our legacy across 
                    Maharashtra, offering comprehensive precast concrete solutions with unmatched quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Legacy & Growth</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              From our humble beginnings in 1982 with Pankaj Pipes to becoming Laddha Precast Industries, 
              we have consistently evolved while maintaining our core values of <span className="font-semibold text-orange-600">quality, reliability, and innovation</span>. 
              Our journey spans four decades of serving Maharashtra's infrastructure needs.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">40+</div>
                <div className="text-gray-700 font-medium">Years of Legacy</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">All</div>
                <div className="text-gray-700 font-medium">Maharashtra Presence</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-gray-700 font-medium">Generations Strong</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-2xl border border-gray-100">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Laddha Precast?</h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">We Build Quality</h4>
              <p className="text-gray-700 leading-relaxed">
                All our products are precisely manufactured to ensure highest standards of quality and sustainability. 
                From choosing first-rate raw materials to adopting high-tech processes, we provide nothing less than supreme.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Complete Solutions</h4>
              <p className="text-gray-700 leading-relaxed">
                We serve as a one-stop destination for all precast concrete needs. We offer a wide range of 
                precast concrete products, covering all applications and requirements of the industry.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Expert Knowledge</h4>
              <p className="text-gray-700 leading-relaxed">
                With decades of experience, we are experts in assisting customers in finding their best solutions, 
                from product selection to size specifications and providing diagrammatic assistance for better understanding.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Raw Material Expertise</h4>
              <p className="text-gray-700 leading-relaxed">
                Our key advantage is advanced cognizance of raw materials owing to years of experience. 
                We ensure only the finest materials are used in our manufacturing processes.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Competitive Pricing</h4>
              <p className="text-gray-700 leading-relaxed">
                We endeavor to create win-win situations with reasonable quotation structures and premium quality 
                deliverance, ensuring all our clients are satisfied with both price and quality.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border border-indigo-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">On-time Delivery</h4>
              <p className="text-gray-700 leading-relaxed">
                Timely deliverance is as important as quality deliverance to us. We believe real-time services 
                are essential for overall customer satisfaction and strive to maintain a timely-delivered portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;