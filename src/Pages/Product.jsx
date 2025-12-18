import React from "react";

// Products Data
export const productsData = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacLHMTb3TfffG797K2P0G2njrMhSRqWiKhA&s",
    title: "RCC Pipes",
    description:
      "High-strength reinforced concrete pipes for drainage and sewage systems with excellent durability.",
    specs: ["Various diameters", "High strength", "Various Class"],
  },
  {
    image: "https://artoprecast.in/assets/img/products/U-Drains/main.png",
    title: "Precast U Drain",
    description:
      "U-shaped drainage channels for optimal water flow and easy installation in various applications.",
    specs: ["Optimal flow", "Easy installation", "Durable construction"],
  },
  {
    image: "https://drsti.in/images/products/1c818b4beaef71653c0b4141fc0968b1.png",
    title: "Box Culvert",
    description:
      "Structural box culverts for efficient water passage under infrastructure projects.",
    specs: ["Heavy duty", "Structural integrity", "Custom sizes"],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLU8fUZt30dxYc28Rg50FTcZ9nsQzGYyo-2Q&s",
    title: "Jacking Pipes",
    description:
      "Specialized pipes for pipe jacking and microtunneling applications with precision engineering.",
    specs: ["Pipe jacking", "Microtunneling", "Reinforced"],
  },
  {
    image: "https://3.imimg.com/data3/TW/EX/MY-4466033/hdpe-lined-rcc-hume-pipes-1000x1000.jpg",
    title: "HDPE Lining Pipes",
    description:
      "Concrete pipes with HDPE lining for enhanced corrosion resistance and longevity.",
    specs: ["HDPE lining", "Corrosion proof", "Extended lifespan"],
  },
  {
    image: "https://www.brhcpipes.com/product/BRHC_25.products.2.RCCManholeSystem.1.circular.jpg",
    title: "Precast Manholes",
    description:
      "Complete precast manhole systems for urban infrastructure with heavy-duty construction.",
    specs: ["Complete systems", "Weather proof", "Easy access"],
  },
  {
    image: "https://5.imimg.com/data5/SELLER/Default/2024/12/471965499/WR/LN/UU/6295619/concrete-septic-tank-1000x1000.jpg",
    title: "Precast Septic Tanks",
    description:
      "High-quality precast concrete septic tanks for efficient wastewater treatment and management.",
    specs: ["Leak-proof", "Easy installation", "Low maintenance"],
  },
  {
    image: "https://images.jdmagicbox.com/comp/pune/p5/020pxx20.xx20.190313153755.n5p5/catalogue/kalokhe-pipes-and-precast-industries-talegaon-dabhade-pune-rcc-pipe-dealers-qpw9nxb1mw.jpg",
    title: "Customized Products",
    description:
      "Tailored precast concrete solutions designed for specific project requirements.",
    specs: ["Bespoke designs", "Project specific", "Quality assured"],
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 mt-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Products
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Premium quality reinforced precast concrete products for infrastructure development
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500 hover:-translate-y-2 transform overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {product.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                  {product.description}
                </p>

                {/* Key Features */}
                <h4 className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>

                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
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
