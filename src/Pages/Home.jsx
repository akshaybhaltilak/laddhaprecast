import React, { useState, useEffect } from 'react'
import ContactForm from '../Components/ContactForm'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://5.imimg.com/data5/SELLER/Default/2021/12/EN/CP/SP/2555778/banner-500x500.jpg",
    "https://www.brhcpipes.com/blog/brhc%20rcc%20pipe%20(4).jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4306PTk8QKVeZ0Sy3p_4V51ut4pmguaCf5ylZ7kZzNcLnQNDA3Khl_bGmUoz8R8HeWOU&usqp=CAU"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Simplified Hero Section with Image Carousel */}
      <section id="home" className="relative bg-gray-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url("${image}")` }}
            >
              <div className="absolute inset-0 bg-white-900/70 mix-blend-multiply"></div>
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">Trusted by 500+ Construction Companies</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Laddha Precast
              <span className="block text-orange-400 mt-2">Concrete Solutions</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Premium quality reinforced concrete pipes and precast products for all your construction needs
            </p>

            {/* Simple Stats */}
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-orange-400">12+</div>
                <div className="text-xs opacity-90">Years Experience</div>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-orange-400">500+</div>
                <div className="text-xs opacity-90">Clients</div>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-orange-400">1000+</div>
                <div className="text-xs opacity-90">Projects</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                <span>View Products</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                <span>Get Quote</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
            
            {/* Image Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-orange-400' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 rounded-full -translate-y-36 translate-x-36 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full translate-y-48 -translate-x-48 opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Laddha Precast</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Supreme manufacturer of concrete pipes and precast concrete products since 2012
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">L</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Laddha Group</h4>
                    <p className="text-orange-600 font-semibold mb-3">Founder & Visionary</p>
                    <p className="text-gray-700 leading-relaxed">
                      With over 12 years in precast concrete manufacturing, Laddha Group leads our strategic vision 
                      and drives business growth through innovative solutions and industry expertise.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">T</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Technical Team</h4>
                    <p className="text-blue-600 font-semibold mb-3">Engineering Excellence</p>
                    <p className="text-gray-700 leading-relaxed">
                      Our expert engineers ensure superior quality control, innovative product development, 
                      and maintain our commitment to international standards and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Mission & Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                At Laddha Precast, we're committed to delivering premium quality precast concrete solutions 
                with <span className="font-semibold text-orange-600">high tensile strength, sturdiness, and ductility</span>. 
                We envision being the supreme manufacturer of concrete pipes and precast products for infrastructure development.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">12+</div>
                  <div className="text-gray-700 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-700 font-medium">Clients Served</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                  <div className="text-gray-700 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-700 font-medium">Product Variants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section id="products" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Products</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Reinforced precast concrete products for infrastructure development and construction management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Concrete Pipes",
                description: "Premium quality reinforced concrete pipes with high tensile strength and durability for drainage and sewage systems.",
                borderColor: "border-blue-700",
                bgColor: "bg-blue-100",
                specs: ["Various diameters", "Reinforced construction", "Corrosion resistant"]
              },
              {
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Precast Slabs & Panels",
                description: "Structural precast elements with excellent load-bearing capacity and seismic resistance for modern construction.",
                borderColor: "border-orange-500",
                bgColor: "bg-orange-100",
                specs: ["High strength", "Quick installation", "Seismic resistant"]
              },
              {
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Manhole Covers & Frames",
                description: "Durable precast manhole components with high strength and corrosion resistance for urban infrastructure.",
                borderColor: "border-blue-700",
                bgColor: "bg-blue-100",
                specs: ["Heavy duty", "Weather proof", "Long lasting"]
              },
              {
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Boundary Walls",
                description: "Precast boundary walls and fencing solutions offering security, durability, and quick installation.",
                borderColor: "border-orange-500",
                bgColor: "bg-orange-100",
                specs: ["Modular design", "Easy installation", "Low maintenance"]
              },
              {
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Culverts & Bridges",
                description: "Heavy-duty precast culverts and bridge components designed for infrastructure and transportation projects.",
                borderColor: "border-blue-700",
                bgColor: "bg-blue-100",
                specs: ["Load bearing", "Durable", "Custom sizes"]
              },
              {
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Custom Solutions",
                description: "Tailored precast concrete products designed to meet specific project requirements and specifications.",
                borderColor: "border-orange-500",
                bgColor: "bg-orange-100",
                specs: ["Bespoke designs", "Project specific", "Quality assured"]
              }
            ].map((product, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 hover:-translate-y-2 transform overflow-hidden"
                style={{ borderTopColor: product.borderColor.replace('border-', '') }}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 ${product.bgColor} rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                      {product.borderColor === "border-blue-700" ? (
                        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Product Specifications */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">KEY FEATURES:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, specIndex) => (
                        <span 
                          key={specIndex}
                          className={`text-xs px-3 py-1 rounded-full ${
                            product.borderColor === "border-blue-700" 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-orange-100 text-orange-700'
                          } font-medium`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group/btn">
                    <span>View Product Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Call-to-Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Need Custom Precast Solutions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We specialize in manufacturing bespoke precast concrete products tailored to your specific project requirements.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Applications Section */}
      <section id="applications" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Applications</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Our precast concrete products serve various sectors of infrastructure, construction and landscaping industry
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Infrastructure Development",
                description: "Our reinforced precast concrete products are extensively used in national highways, bridges, tunnels, and urban infrastructure projects owing to their high tensile strength and durability.",
                features: ["Road Construction", "Bridge Components", "Tunnel Linings", "Retaining Walls"]
              },
              {
                title: "Urban Development",
                description: "Precast solutions for smart cities including drainage systems, sewage networks, manholes, and utility tunnels that ensure long-term reliability and minimal maintenance.",
                features: ["Drainage Systems", "Sewage Networks", "Utility Tunnels", "Public Works"]
              },
              {
                title: "Industrial Construction",
                description: "Heavy-duty precast elements for industrial plants, warehouses, and manufacturing facilities that require robust structural components and quick installation.",
                features: ["Factory Buildings", "Warehouses", "Industrial Floors", "Loading Docks"]
              },
              {
                title: "Commercial & Residential",
                description: "Architectural precast components for modern buildings offering aesthetic appeal, structural integrity, and faster project completion timelines.",
                features: ["Building Facades", "Parking Structures", "Boundary Walls", "Landscaping"]
              }
            ].map((application, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-blue-700 mb-4">{application.title}</h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{application.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {application.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Clients Section */}
      <section id="clients" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Clients</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Trusted by leading construction companies and government agencies across the region
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Government Infrastructure Projects",
                projects: "National Highways, Urban Development, Public Works",
                satisfaction: "100% Quality Compliance"
              },
              {
                name: "Private Construction Giants",
                projects: "Commercial Complexes, Residential Townships, Industrial Parks",
                satisfaction: "95% Repeat Business"
              },
              {
                name: "Municipal Corporations",
                projects: "Drainage Systems, Sewage Networks, Public Utilities",
                satisfaction: "98% On-time Delivery"
              },
              {
                name: "Real Estate Developers",
                projects: "High-rise Buildings, Township Projects, Commercial Spaces",
                satisfaction: "100+ Projects Completed"
              },
              {
                name: "Industrial Plants",
                projects: "Manufacturing Units, Warehouses, Factory Buildings",
                satisfaction: "Custom Solutions Delivered"
              },
              {
                name: "Infrastructure Contractors",
                projects: "Bridge Construction, Road Projects, Tunnel Works",
                satisfaction: "500+ Clients Served"
              }
            ].map((client, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-4">{client.name}</h3>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Projects:</div>
                  <div className="text-gray-700 font-medium">{client.projects}</div>
                </div>
                
                <div className="flex items-center text-green-600 font-semibold">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {client.satisfaction}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Ready to discuss your precast concrete requirements? Contact us today for a free consultation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-blue-800 mb-8">Let's Build Together</h3>
              
              <div className="space-y-8">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: "Phone",
                    content: "+91 XXXXX XXXXX",
                    subcontent: "Mon-Sat: 8AM - 6PM"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Factory Address",
                    content: "Laddha Precast Manufacturing Unit",
                    subcontent: "Industrial Area, Akola, Maharashtra - 444001"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Business Hours",
                    content: "Monday - Saturday: 8:00 AM - 6:00 PM",
                    subcontent: "Sunday: Closed"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-700 font-medium">{item.content}</p>
                      <p className="text-gray-600 mt-1">{item.subcontent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home