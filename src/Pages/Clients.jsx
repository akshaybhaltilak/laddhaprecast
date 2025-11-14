import React from 'react';

const Clients = () => {
  return (
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
  );
};

export default Clients;