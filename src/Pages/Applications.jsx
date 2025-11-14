import React from 'react';

const Applications = () => {
  return (
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
  );
};

export default Applications;