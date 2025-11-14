import React, { useState, useEffect } from 'react';

// Import the products data from Products component
const productsData = [
  {
    image: "https://www.brhcpipes.com/product/BRHC.products.logo.1.RCCPipes.jpg",
    title: "RCC Pipes",
    description: "High-strength reinforced concrete pipes for drainage and sewage systems with excellent durability.",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-100",
    specs: ["Various diameters", "High strength", "Corrosion resistant"]
  },
  {
    image: "https://artoprecast.in/assets/img/products/U-Drains/main.png",
    title: "Precast U Drain",
    description: "U-shaped drainage channels for optimal water flow and easy installation in various applications.",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-100",
    specs: ["Optimal flow", "Easy installation", "Durable construction"]
  },
  {
    image: "https://civilcast.com.au/wp-content/uploads/Box-Culverts1.jpg",
    title: "Box Culvert",
    description: "Structural box culverts for efficient water passage under infrastructure projects.",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-100",
    specs: ["Heavy duty", "Structural integrity", "Custom sizes"]
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdqLIW0xaQUb4-Z_rVRlq0E-Ini2BosH1bg&s",
    title: "Jacking Pipes",
    description: "Specialized pipes for pipe jacking and microtunneling applications with precision engineering.",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-100",
    specs: ["Pipe jacking", "Microtunneling", "Reinforced"]
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIOG_v9WL-xnNppsl1nYrCabPF1fa6M0KHQ&s",
    title: "HDPE Lining Pipes",
    description: "Concrete pipes with HDPE lining for enhanced corrosion resistance and longevity.",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-100",
    specs: ["HDPE lining", "Corrosion proof", "Extended lifespan"]
  },
  {
    image: "https://www.brhcpipes.com/product/BRHC_25.products.2.RCCManholeSystem.1.circular.jpg",
    title: "Precast Manholes",
    description: "Complete precast manhole systems for urban infrastructure with heavy-duty construction.",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-100",
    specs: ["Complete systems", "Weather proof", "Easy access"]
  },
  {
    image: "https://images.jdmagicbox.com/comp/pune/p5/020pxx20.xx20.190313153755.n5p5/catalogue/kalokhe-pipes-and-precast-industries-talegaon-dabhade-pune-rcc-pipe-dealers-qpw9nxb1mw.jpg",
    title: "Customized Products",
    description: "Tailored precast concrete solutions designed for specific project requirements.",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-100",
    specs: ["Bespoke designs", "Project specific", "Quality assured"]
  }
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://media.istockphoto.com/id/618225484/photo/stack-of-concrete-drainage-pipes-for-wells-and-water-discharges.jpg?s=2048x2048&w=is&k=20&c=OgevDnJQ2z85TlIDNhLdKS-Vs-BOGL1vdkiln3BTiPQ=",
    "https://media.istockphoto.com/id/845506412/photo/asbestos-cement-pipes.jpg?s=2048x2048&w=is&k=20&c=bGeEWSFwTuarB-XX-FgQT-PSz0jv6C96_dF5BYm7lL8=",
    "https://media.istockphoto.com/id/872309564/photo/large-concrete-pipe-stacked-in-the-open-for-storage-for-big-construction.jpg?s=2048x2048&w=is&k=20&c=C3UFJzFmMZBFGkafBVuHmgJVpEoRM_v22dLToWPejtg="
  ];

  // Use first 3 products as featured products
  const featuredProducts = productsData.slice(0, 3).map(product => ({
    name: product.title,
    description: product.description,
    features: product.specs,
    image: product.image
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center overflow-hidden">
        {/* Background Image Carousel with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
                index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              style={{ backgroundImage: `url("${image}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-orange-900/70"></div>
            </div>
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Main Heading with Animation */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="block text-white">Laddha Precast</span>
                  <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mt-2">
                    Industries
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Premium quality reinforced concrete pipes, precast slabs, and construction solutions engineered for durability, strength, and excellence in every project.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-orange-500/30 text-sm font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ISO Certified
                  </div>
                  <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-orange-500/30 text-sm font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Premium Quality
                  </div>
                  <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-orange-500/30 text-sm font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fast Delivery
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="#featured-products"
                    className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center"
                  >
                    <span>Explore Products</span>
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Request Quote</span>
                  </a>
                </div>
              </div>

              {/* Right Content - Product Highlights */}
              <div className="grid grid-cols-1 gap-6">
                {featuredProducts.map((product, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-orange-500/50 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {product.features.slice(0, 2).map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center lg:justify-start space-x-3 mt-12">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentImageIndex 
                      ? 'w-12 bg-gradient-to-r from-orange-400 to-orange-600' 
                      : 'w-8 bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-xs font-medium mb-2">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Featured Products</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of high-quality precast concrete products designed for modern construction needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">KEY FEATURES:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-700">
                          <svg className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href="/products"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group/btn shadow-lg shadow-orange-500/30"
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Explore All Products
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We offer a comprehensive range of precast concrete products including RCC Pipes, U Drains, Box Culverts, and custom solutions for all your construction needs.
              </p>
              <a 
                href="/products"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>View All Products</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;