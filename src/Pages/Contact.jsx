import React from 'react';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
  return (
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
              {/* Office Address */}
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Office Address</h4>
                  <p className="text-gray-700 font-medium">Amrut Housing Society, Building No. 3</p>
                  <p className="text-gray-600 mt-1">Jatharpeth, Akola - 444005</p>
                </div>
              </div>

              {/* Factory Address */}
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Factory Address</h4>
                  <p className="text-gray-700 font-medium">Plot No. J-50, M.I.D.C. Phase III</p>
                  <p className="text-gray-600 mt-1">Shivni, Akola - 444104</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Phone Numbers</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-700 font-medium">Office: 0249-2490205</p>
                      <p className="text-gray-600 text-sm">Landline</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Factory: 0724-2258132, 2259132</p>
                      <p className="text-gray-600 text-sm">Factory Lines</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Mobile: 9326883292</p>
                      <p className="text-gray-600 text-sm">Direct Contact</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h4>
                  <p className="text-gray-700 font-medium">+91 9021133383</p>
                  <p className="text-gray-600 mt-1">Quick responses for business inquiries</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-700 font-medium">laddhaprecast@gmail.com</p>
                  <p className="text-gray-600 mt-1">Send us your requirements and inquiries</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;