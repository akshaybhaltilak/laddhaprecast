import React, { useState, useEffect } from 'react';

const productsData = [
  {
    image: "https://media.istockphoto.com/id/618225484/photo/stack-of-concrete-drainage-pipes-for-wells-and-water-discharges.jpg?s=612x612&w=0&k=20&c=_OWmkjcja0C6im50UbYnhFucYdxGq5M98dhyZ9Qir3g=",
    title: "RCC Pipes",
    description: "High-strength reinforced concrete pipes for drainage and sewage systems with excellent durability.",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-100",
    specs: ["Various diameters", "High strength", "Various Class"]
  },
  {
    image: "https://pacificprecastgroup.com/wp-content/uploads/2024/04/a5bd67b5-e685-448d-a5cd-ed4e9f7aefc4-e1726574239994-1024x449.jpeg",
    title: "Precast U Drain",
    description: "U-shaped drainage channels for optimal water flow and easy installation in various applications.",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-100",
    specs: ["Optimal flow", "Easy installation", "Durable construction"]
  },
  {
    image: "https://media.istockphoto.com/id/1267470753/photo/box-culverts.jpg?s=612x612&w=0&k=20&c=Sf0BGTLTX4j3D_NWUeIKzIl-6PnQBb6tW2kEkkbVu_I=",
    title: "Box Culvert",
    description: "Structural box culverts for efficient water passage under infrastructure projects.",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-100",
    specs: ["Heavy duty", "Structural integrity", "Custom sizes"]
  }
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  
  const heroImages = [
    "https://media.istockphoto.com/id/618225484/photo/stack-of-concrete-drainage-pipes-for-wells-and-water-discharges.jpg?s=612x612&w=0&k=20&c=_OWmkjcja0C6im50UbYnhFucYdxGq5M98dhyZ9Qir3g=",
    "https://media.istockphoto.com/id/845506412/photo/asbestos-cement-pipes.jpg?s=2048x2048&w=is&k=20&c=bGeEWSFwTuarB-XX-FgQT-PSz0jv6C96_dF5BYm7lL8=",
    "https://media.istockphoto.com/id/872309564/photo/large-concrete-pipe-stacked-in-the-open-for-storage-for-big-construction.jpg?s=2048x2048&w=is&k=20&c=C3UFJzFmMZBFGkafBVuHmgJVpEoRM_v22dLToWPejtg="
  ];

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

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image Carousel */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Loading Skeleton */}
            {!imageLoaded[index] && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 animate-pulse" />
            )}
            
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
              onLoad={() => handleImageLoad(index)}
              style={{ display: imageLoaded[index] ? 'block' : 'none' }}
            />
            
            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-gray-700/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-orange-500/10" />
          </div>
        ))}

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in">
                {/* Company Badge */}
              

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Laddha
                    <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent mt-2">
                      Precast Industries
                    </span>
                  </h1>
                  
                  <div className="h-1 w-32 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full" />
                </div>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Premium quality reinforced concrete pipes, box culverts, and allied precast products engineered for 
                  <span className="text-orange-400 font-semibold"> durability</span>, 
                  <span className="text-orange-300 font-semibold"> strength</span>, and 
                  <span className="text-white font-semibold"> excellence</span> in every construction project.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: "✓", text: "ISO Certified", color: "from-orange-600 to-orange-700" },
                    { icon: "★", text: "Premium Quality", color: "from-gray-700 to-gray-800" },
                    { icon: "⚡", text: "Fast Delivery", color: "from-orange-500 to-orange-600" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`px-5 py-2.5 bg-gradient-to-r ${item.color} rounded-full border border-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <span className="text-white font-medium flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-xl shadow-2xl shadow-orange-900/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-orange-400/30">
                    <span className="flex items-center gap-2">
                      Explore Products
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  
                  <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:border-orange-400/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                    Request Quote
                  </button>
                </div>
              </div>

              {/* Right Content - Product Highlights */}
              <div className="hidden lg:grid grid-cols-1 gap-4">
                {featuredProducts.map((product, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Product Image */}
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-orange-400/30 shadow-lg flex-shrink-0">
                        {!imageLoaded[`product-${index}`] && (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse" />
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onLoad={() => handleImageLoad(`product-${index}`)}
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                          }}
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-orange-300 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <svg className="w-6 h-6 text-orange-400 group-hover:translate-x-2 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentImageIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-orange-600'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/80 text-sm font-medium">Scroll Down</span>
          <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Featured Products Section */}
     <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50/40 to-slate-100">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
        <span className="text-orange-600 font-semibold text-sm">OUR PRODUCTS</span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
        Our Featured Products
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Premium quality reinforced concrete products engineered for durability, strength, and excellence
      </p>
    </div>

  

    {/* View All Products CTA */}
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50/40 to-slate-100">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
        <span className="text-orange-600 font-semibold text-sm">OUR PRODUCTS</span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
        Our Featured Products
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Premium quality reinforced concrete products engineered for durability, strength, and excellence
      </p>
    </div>

    {/* Product Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProducts.map((product, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-orange-300 transform hover:-translate-y-2"
        >
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden bg-slate-200">
            {!imageLoaded[`card-${index}`] && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onLoad={() => handleImageLoad(`card-${index}`)}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80";
              }}
            />
            
            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
              FEATURED
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-gradient-to-r from-orange-50 to-slate-100 text-orange-700 text-sm rounded-lg border border-orange-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg">
              View Product Details
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* View All Products CTA */}
    <div className="mt-16 text-center relative">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-200 to-slate-200 rounded-3xl opacity-10" />
  
  <div className="relative py-12 px-6">
    <h3 className="text-3xl font-bold text-slate-900 mb-4">
      Explore Our Complete Product Range
    </h3>
    <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
      We offer a comprehensive range of premium precast concrete products including RCC Pipes, U-Drains,
      Box Culverts, and custom engineering solutions for all your construction and infrastructure requirements.
    </p>
    <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      Browse All Products
    </button>
  </div>
</div>
</div>
</div>
</div>

</div>
    </div>
  );
};

export default Home;