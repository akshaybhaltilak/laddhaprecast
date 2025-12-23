import React from 'react';

const Applications = () => {
const applications = [
  {
    id: 1,
    title: "Roadways",
    description:
      "Precast concrete products are widely used in road infrastructure for safety, drainage, pavement edging, and traffic management, ensuring durability and long service life.",
    image: "https://images.pexels.com/photos/12181725/pexels-photo-12181725.jpeg",
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    products: ["Kerb Stones", "RCC Pipes", "Saucer Drains", "Milestones", "Sign Boards"]
  },
  {
    id: 2,
    title: "Railways",
    description:
      "High-strength precast concrete solutions support railway platforms, drainage, and safety systems, designed to withstand heavy loads and continuous operations.",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/rcc-railway-platform-copping-2216470148-5e6syghb.jpg",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    products: ["Concrete Boards", "Route Markers", "Drain Covers", "RCC Pipes", "Railway Tiles"]
  },
  {
    id: 3,
    title: "Telecommunication",
    description:
      "Concrete products provide secure protection and organized routing for optical fibre and cable networks, ensuring easy maintenance and long-term reliability.",
    image: "https://images.pexels.com/photos/2352277/pexels-photo-2352277.jpeg",
    color: "bg-gradient-to-br from-green-500 to-green-600",
    products: ["RCC Pipes", "Manhole Chambers", "Route Markers", "Trench Covers", "Cable Covers"]
  },
  {
    id: 4,
    title: "Water Industry",
    description:
      "Precast concrete solutions are used for water supply, drainage, and sewage systems, offering leak-proof performance and structural strength.",
    image: "https://www.brhcpipes.com/images/applications/4.BRHC.Water-Supply.jpg",
    color: "bg-gradient-to-br from-teal-500 to-teal-600",
    products: ["Precast Pipes", "Manhole Systems", "Drainage Channels", "Sewage Pipes", "Water Tanks"]
  },
  {
    id: 5,
    title: "Housing",
    description:
      "Residential projects use precast concrete products for paving, boundaries, and decorative elements, combining strength with modern aesthetics.",
    image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    products: ["Paver Blocks", "Interlocking Tiles", "Concrete Walls", "Decorative Jalis", "Boundary Walls"]
  },
  {
    id: 6,
    title: "Other Commercial Sectors",
    description:
      "Precast concrete products support commercial spaces with solutions for parking, safety, landscaping, and traffic control with minimal maintenance.",
    image: "https://images.pexels.com/photos/15893881/pexels-photo-15893881.jpeg",
    color: "bg-gradient-to-br from-gray-700 to-gray-800",
    products: ["Concrete Planters", "Tree Guards", "Bollards", "Wheel Stoppers", "Jersey Barriers"]
  }
];



  return (
    <section id="applications" className="mt-10 py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full -translate-x-32 -translate-y-32 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full translate-x-40 translate-y-40 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-4 py-2 rounded-full">
              OUR APPLICATIONS
            </span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Applications</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Reinforced precast concrete products owing to their various properties like high tensile strength,
            sturdiness, high ductility, find applications in infrastructure development and construction management.
            Laddha Precast supplies its products prominently to the following sectors:
          </p>
        </div>

        {/* Applications Grid - Smaller Image Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {applications.map((app) => (
            <div
              key={app.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Smaller Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Title Overlay on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center space-x-3">
                    {/* <div className={`${app.color} w-8 h-8 rounded-lg flex items-center justify-center shadow-md`}>
                      {app.icon}
                    </div> */}
                    <h3 className="text-lg font-bold text-white">{app.title}</h3>
                  </div>
                </div>
              </div>

              {/* Compact Content Section */}
              <div className="p-5 flex-grow flex flex-col">
                <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow line-clamp-4">
                  {app.description}
                </p>

                {/* Products List - Compact Horizontal */}
                {/* <div className="pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5">
                    {app.products.slice(0, 3).map((product, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-50 text-gray-700 rounded-md text-xs font-medium border border-gray-200"
                      >
                        {product}
                      </span>
                    ))}
                    {app.products.length > 3 && (
                      <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-md text-xs font-medium border border-orange-200">
                        +{app.products.length - 3} more
                      </span>
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section - More Compact */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Why Choose Our <span className="text-orange-600">Precast Solutions?</span>
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm">
              Engineered for superior performance across all applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/80 rounded-lg border border-orange-100">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">High Durability</h4>
              <p className="text-gray-600 text-xs">
                Weather, corrosion & chemical resistant
              </p>
            </div>

            <div className="text-center p-4 bg-white/80 rounded-lg border border-orange-100">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Fast Installation</h4>
              <p className="text-gray-600 text-xs">
                Quick assembly & reduced time
              </p>
            </div>

            <div className="text-center p-4 bg-white/80 rounded-lg border border-orange-100">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Cost Effective</h4>
              <p className="text-gray-600 text-xs">
                Lower maintenance & longer lifespan
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - More Compact */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Have a Specific Application Need?</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
              Our experts provide customized solutions for your project requirements
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Contact Our Experts</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;