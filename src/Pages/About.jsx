import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-0 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full -translate-y-48 translate-x-48 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full translate-y-48 -translate-x-48 opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-50 to-transparent rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-2 mt-30 animate-fade-in">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 ">
            About <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Laddha Precast Industries</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-2"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Legacy of excellence in precast concrete manufacturing since 1982
          </p>
        </div>

        {/* Founders Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders behind our success story
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Founder 1 */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative">
                  <div className="flex mx-auto w-70 h-70 overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
                    <img
                      src="subhash.jpeg"
                      alt="Shri Subhashchandra Laddha"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Shri Subhashchandra Laddha
                  </h4>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <p className="text-orange-600 font-semibold text-sm">Founder & Chairman</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Visionary leader with 40+ years of experience in construction industry.
                    Founded Pankaj Pipes in 1982 and established the Laddha legacy.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative">
                  <div className="flex mx-auto w-60 h-70 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src="manish.JPG"
                      alt="Mr. Manish Laddha"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Mr. Manish Laddha
                  </h4>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <p className="text-orange-600 font-semibold text-sm">Managing Director</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Driving force behind strategic partnerships and business expansion.
                    Expert in precast concrete technology and market development.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder 3 */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative">
                  <div className="flex mx-auto w-70 h-70 overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
                    <img
                      src="yash.png"
                      alt="Er. Yash Laddha"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Er. Yash Laddha
                  </h4>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full mb-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <p className="text-orange-600 font-semibold text-sm">Technical Director</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Oversees technical operations and quality control.
                    Brings innovation and modern manufacturing techniques to our processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company History & Legacy */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="space-y-6">
            {/* Legacy Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-orange-200 transition-all duration-500 transform hover:-translate-x-2">
              <div className="flex items-start space-x-5">

                {/* Factory Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* Factory / Industry Icon */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21V10l6 3V10l6 3V7l6 3v11H3zm4-4h2m4 0h2m4 0h2"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    Pankaj Spun Pipes Industries Legacy
                  </h4>
                  <p className="text-orange-600 font-semibold text-sm mb-3">
                    Established 1982
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our journey began in 1982 with Pankaj Spun Pipes Industries in Akola, building a strong foundation
                    in the Infrastructure industry with quality products and trusted relationships.
                  </p>
                </div>

              </div>
            </div>


            {/* Partnership Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-orange-200 transition-all duration-500 transform hover:-translate-x-2">
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    Strategic Partnership
                  </h4>
                  <p className="text-gray-600 font-semibold text-sm mb-3">Parent Firm Association</p>
                  <p className="text-gray-600 leading-relaxed">
                    Our parent firm's strong association with Atul Pipes & Swastik Spun Pipe & M. M. Co, Amravati brings decades of expertise
                    and industry knowledge to deliver superior precast solutions across Maharashtra.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-orange-200 transition-all duration-500 transform hover:-translate-x-2">
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    Laddha Precast Vision
                  </h4>
                  <p className="text-orange-600 font-semibold text-sm mb-3">All Maharashtra Presence</p>
                  <p className="text-gray-600 leading-relaxed">
                    As the new flagship firm, Laddha Precast Industries extends our legacy across
                    Maharashtra, offering comprehensive precast concrete solutions with unmatched quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Growth Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Legacy & Growth</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              From our humble beginnings in 1982 with Pankaj Spun Pipes Industries to becoming Laddha Precast Industries,
              we have consistently evolved while maintaining our core values of <span className="font-semibold text-orange-600">quality, reliability, and innovation</span>.
              Our journey spans four decades of serving Maharashtra's infrastructure needs.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="group text-center p-6 bg-gradient-to-br from-orange-50 via-white to-orange-50/50 rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">40+</div>
                <div className="text-gray-700 font-medium">Years of Legacy</div>
              </div>

              <div className="group text-center p-6 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-700 mb-2">All</div>
                <div className="text-gray-700 font-medium">Maharashtra Presence</div>
              </div>

              <div className="group text-center p-6 bg-gradient-to-br from-orange-50 via-white to-orange-50/50 rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
              </div>

              <div className="group text-center p-6 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0A9 9 0 008 4.067a9 9 0 010 11.866" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-700 mb-2">3</div>
                <div className="text-gray-700 font-medium">Generations Strong</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Laddha Precast?</h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
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

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
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

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
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

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 transition-all duration-300">

              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Concrete / Cement Blocks Icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h8v4H3V7zm10 0h8v4h-8V7zM3 13h8v4H3v-4zm10 0h8v4h-8v-4z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Concrete Material Expertise
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Our strength lies in deep expertise of concrete materials including cement,
                aggregates, and mix design, ensuring superior strength and long-lasting durability.
              </p>
            </div>


            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-white rounded-2xl border border-teal-100 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
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

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
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
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default About;