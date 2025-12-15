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
    image: "https://drsti.in/images/products/1c818b4beaef71653c0b4141fc0968b1.png",
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
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
  const heroImages = [
    "https://images.jdmagicbox.com/quickquotes/images_main/spun-pipe-2021564125-oieo56za.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTne3zwTjpdXRPTxmSYOww1iKDVLfCqWLszTg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10KHP6eInXi0z7u2b6WVQIWE7NMlluHEyVg&s"
  ];

  // Use first 3 products as featured products
  const featuredProducts = productsData.slice(0, 3).map(product => ({
    name: product.title,
    description: product.description,
    features: product.specs,
    image: product.image,
    borderColor: product.borderColor,
    bgColor: product.bgColor
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
      {/* Hero Section - Clean with full image display */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Carousel - Full image display */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Content with dark background for readability */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Company Badge */}
                <div className="inline-block mb-6 animate-fade-in">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-orange-500">
                    <span className="text-sm font-semibold text-white">Since 1982 • Trusted Across Maharashtra</span>
                  </div>
                </div>
                
                {/* Main Heading */}
                <div className="overflow-hidden">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="block text-white animate-slide-up">Laddha Precast</span>
                    <span className="block text-orange-400 mt-2 animate-slide-up-delayed">
                      Industries
                    </span>
                  </h1>
                </div>
                
                {/* Subtitle */}
                <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-delayed">
                  Premium quality reinforced concrete pipes, U Drains, Box Culverts, and complete precast solutions engineered for durability, strength, and excellence in every project.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {[
                    { text: "ISO Certified", icon: "✓", color: "bg-green-500" },
                    { text: "Premium Quality", icon: "★", color: "bg-yellow-500" },
                    { text: "Fast Delivery", icon: "⚡", color: "bg-orange-500" },
                    { text: "40+ Years", icon: "🕒", color: "bg-blue-500" }
                  ].map((feature, idx) => (
                    <div 
                      key={idx}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-orange-500 text-white text-sm font-medium flex items-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <span className={`w-6 h-6 ${feature.color} rounded-full flex items-center justify-center text-white text-xs mr-2`}>
                        {feature.icon}
                      </span>
                      {feature.text}
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="#featured-products"
                    className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <span className="relative z-10">Explore Products</span>
                    <svg className="w-5 h-5 ml-2 relative z-10 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="group bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white text-white hover:text-gray-900 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-md"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Get Free Quote</span>
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-12">
                  {[
                    { value: "40+", label: "Years", desc: "Experience", color: "text-orange-400" },
                    { value: "1000+", label: "Projects", desc: "Completed", color: "text-orange-400" },
                    { value: "All", label: "Maharashtra", desc: "Coverage", color: "text-orange-400" }
                  ].map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-orange-500 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredProduct(idx)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-sm text-white font-medium">{stat.label}</div>
                      <div className="text-xs text-gray-300 mt-1">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Product Highlights */}
              <div className="grid grid-cols-1 gap-6">
                {featuredProducts.map((product, index) => (
                  <div 
                    key={index}
                    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg group cursor-pointer ${
                      hoveredProduct === index ? 'scale-105 border-orange-500' : ''
                    }`}
                    onMouseEnter={() => setHoveredProduct(index)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    onClick={() => window.location.href = '/products'}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Product Image Thumbnail */}
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-white/30 group-hover:border-orange-500 bg-white p-1">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                            {product.name}
                          </h3>
                          <div className={`w-3 h-3 rounded-full ${product.borderColor.replace('border-', 'bg-')}`}></div>
                        </div>
                        
                        <p className="text-gray-200 text-sm leading-relaxed mb-3">
                          {product.description}
                        </p>
                        
                        {/* Features Tags */}
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-lg text-xs font-medium border border-orange-500/30"
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
            <div className="flex justify-center lg:justify-start space-x-4 mt-16">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className="flex flex-col items-center group cursor-pointer"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`w-12 h-1.5 rounded-full mb-2 transition-all duration-500 ${
                    index === currentImageIndex 
                      ? 'w-16 bg-orange-500' 
                      : 'bg-white/50 group-hover:bg-white/70'
                  }`}></div>
                  <span className={`text-xs transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'text-orange-400 font-semibold' 
                      : 'text-white/70 group-hover:text-white'
                  }`}>
                    Slide {index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer"
          onClick={() => document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center group">
            <span className="text-xs font-medium text-white/80 mb-2 tracking-wider group-hover:text-orange-400 transition-colors">
              DISCOVER PRODUCTS
            </span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-orange-500 transition-colors">
              <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
                FEATURED PRODUCTS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-600">Premium Solutions</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our high-quality precast concrete products designed for modern construction needs with superior durability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer"
                onClick={() => window.location.href = '/products'}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide border-b pb-2">
                      KEY FEATURES
                    </h4>
                    <div className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-start hover:bg-orange-50 p-2 rounded-lg transition-colors"
                        >
                          <svg className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-md">
                    <span>View Product Details</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <div className="bg-gray-900 rounded-2xl p-10 text-white shadow-xl">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build with Us?</h3>
                <p className="text-gray-300 mb-8">
                  Explore our complete range of precast concrete products and get expert consultation for your specific requirements
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/products"
                    className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>View All Products</span>
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center bg-white/10 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Contact Our Team</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;