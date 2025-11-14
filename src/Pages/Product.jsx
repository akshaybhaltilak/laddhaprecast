import React from 'react';

// Export the products data so it can be imported in other components
export const productsData = [
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

const Products = () => {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Products</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Premium quality reinforced precast concrete products for infrastructure development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 hover:-translate-y-2 transform overflow-hidden"
              style={{ borderTopColor: product.borderColor.replace('border-', '') }}
            >
              {/* Product Image - Centered and Properly Scaled */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE1MCAyMDBIMjUwTDIwMCAxNTBaIiBmaWxsPSIjOEU5MEEwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QzcyNzkiPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo=";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Product Content - Below Image */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {product.description}
                </p>
                
                {/* Product Specifications */}
                <div className="mb-2">
                  <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Key Features:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.specs.map((spec, specIndex) => (
                      <span 
                        key={specIndex}
                        className={`text-xs px-2.5 py-1 rounded-full ${
                          product.borderColor === "border-blue-600" 
                            ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                            : 'bg-orange-50 text-orange-700 border border-orange-200'
                        } font-medium`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;