import React from 'react';

// Export the products data so it can be imported in other components
export const productsData = [
  {
    image: "https://tiimg.tistatic.com/fp/1/009/242/rcc-pipes-176.jpg",
    title: "RCC Pipes",
    description: "High-strength reinforced concrete pipes for drainage and sewage systems with excellent durability and corrosion resistance.",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-100",
    specs: ["Various diameters", "High strength", "Corrosion resistant", "Long lifespan"]
  },
  {
    image: "https://5.imimg.com/data5/SELLER/Default/2024/6/429528458/AT/EH/CT/144125779/precast-u-drain-250x250.jpeg",
    title: "Precast U Drain",
    description: "U-shaped drainage channels for optimal water flow and easy installation in various applications.",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-100",
    specs: ["Optimal flow", "Easy installation", "Durable construction", "Quick assembly"]
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbK3IypO2j0zkCmrII6Dn2vYR5iTqbHLh9A&s",
    title: "Box Culvert",
    description: "Structural box culverts for efficient water passage under roads, railways, and infrastructure projects.",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-100",
    specs: ["Heavy duty", "Structural integrity", "Custom sizes", "Easy installation"]
  },
  {
    image: "https://www.nwpipe.com/app/uploads/2023/08/concrete-jacking-pipe-in-row-1040x693.jpg",
    title: "Jacking Pipes",
    description: "Specialized pipes for pipe jacking and microtunneling applications with precision engineering.",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-100",
    specs: ["Pipe jacking", "Microtunneling", "Reinforced", "Precision made"]
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9Q3gwFzkLJ3E8oEm8u_2-r32l-UwEEV0qg&s",
    title: "HDPE Lining Pipes",
    description: "Concrete pipes with HDPE lining for enhanced corrosion resistance and extended longevity.",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-100",
    specs: ["HDPE lining", "Corrosion proof", "Extended lifespan", "Chemical resistant"]
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMqTmaQZ4-OkQVspJzR9MvUi5fq5HdXUVUQ&s",
    title: "Precast Manholes",
    description: "Complete precast manhole systems for urban infrastructure with heavy-duty construction.",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-100",
    specs: ["Complete systems", "Weather proof", "Easy access", "Durable"]
  },
  {
    image: "https://bharatbiotank.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-04-at-15.47.59_2a723774-1024x768.jpg",
    title: "Precast Septic Tank",
    description: "Watertight precast concrete septic tanks for sewage treatment with superior durability and leak-proof design.",
    borderColor: "border-green-600",
    bgColor: "bg-green-100",
    specs: ["Watertight", "Leak-proof", "Easy installation", "Long-lasting", "Eco-friendly"]
  },
  {
    image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/precast-concrete-slab-ixyi9zb-250.jpg",
    title: "Customized Products",
    description: "Tailored precast concrete solutions designed for specific project requirements and unique applications.",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-100",
    specs: ["Bespoke designs", "Project specific", "Quality assured", "Custom sizes"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full -translate-x-32 -translate-y-32 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full translate-x-40 translate-y-40 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-4 py-2 rounded-full">
              OUR PRODUCTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Precast Solutions</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            High-quality reinforced precast concrete products engineered for durability, strength, and excellence 
            in infrastructure development and construction projects across Maharashtra.
          </p>
        </div>

        {/* Products Grid - Same Square Layout as Applications Page */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productsData.map((product, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Square Image Container - Same as Applications */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE1MCAyMDBIMjUwTDIwMCAxNTBaIiBmaWxsPSIjOEU5MEEwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QzcyNzkiPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo=";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Title Badge Overlay - Similar to Applications */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center space-x-2">
                    <div className={`${product.borderColor.replace('border-', 'bg-')} w-10 h-10 rounded-lg flex items-center justify-center shadow-md`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">{product.title}</h3>
                  </div>
                </div>
              </div>
              
              {/* Compact Content Section */}
              <div className="p-5 flex-grow flex flex-col">
                <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow">
                  {product.description}
                </p>
                
                {/* Specifications List - Compact Horizontal */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5">
                    {product.specs.slice(0, 3).map((spec, specIndex) => (
                      <span 
                        key={specIndex}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                          product.borderColor === "border-blue-600" 
                            ? 'bg-blue-50 text-blue-700 border-blue-200' 
                            : product.borderColor === "border-orange-500"
                            ? 'bg-orange-50 text-orange-700 border-orange-200'
                            : 'bg-green-50 text-green-700 border-green-200'
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
                    {product.specs.length > 3 && (
                      <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                        product.borderColor === "border-blue-600" 
                          ? 'bg-blue-100 text-blue-800 border-blue-300' 
                          : product.borderColor === "border-orange-500"
                          ? 'bg-orange-100 text-orange-800 border-orange-300'
                          : 'bg-green-100 text-green-800 border-green-300'
                      }`}>
                        +{product.specs.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Features Section */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Why Our <span className="text-orange-600">Products Stand Out</span>
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm">
              Engineered with precision for superior performance and longevity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/80 rounded-lg border border-orange-100">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">ISO Certified</h4>
              <p className="text-gray-600 text-xs">Highest quality standards</p>
            </div>
            
            <div className="text-center p-4 bg-white/80 rounded-lg border border-orange-100">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Quick Delivery</h4>
              <p className="text-gray-600 text-xs">Statewide across Maharashtra</p>
            </div>
            
            <div className="text-center p-4 bg-white/80 rounded-lg border border-orange-100">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Cost Effective</h4>
              <p className="text-gray-600 text-xs">Competitive pricing</p>
            </div>
            
            <div className="text-center p-4 bg-white/80 rounded-lg border border-orange-100">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">40+ Years Legacy</h4>
              <p className="text-gray-600 text-xs">Trusted expertise</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Need Custom Products?</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
              We specialize in customized precast solutions tailored to your specific project requirements
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Request a Quote</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;