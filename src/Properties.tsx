import React from 'react';
import { Building2, Home, Truck, Phone, Mail, MapPin, ChevronRight, CheckCircle2, Instagram, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Properties() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-slate-600 hover:text-[#D48816] transition-colors mr-6">
                <ArrowLeft className="h-6 w-6 mr-2" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <img src="./logo.png" alt="Kronus Construction" className="h-12 mr-3" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling!.classList.remove('hidden');
              }} />
              <Building2 className="h-8 w-8 text-[#D48816] hidden mr-2" />
              <span className="text-2xl font-bold tracking-tight text-slate-900 hidden sm:block">
                KRONUS <span className="text-[#D48816]">CONSTRUCTION</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#contact" className="bg-[#D48816] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#B87512] transition-colors">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" 
            alt="Luxury Property" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Premium <span className="text-[#D48816]">Properties</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover our exclusive range of 1 to 4 bedroom houses available for sale and rent in prime locations.
          </p>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Available Units</h2>
              <div className="w-16 h-1 bg-[#D48816] rounded-full"></div>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <button className="px-6 py-2 bg-[#D48816] text-white rounded-md font-medium">All</button>
              <button className="px-6 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-md font-medium transition-colors">For Sale</button>
              <button className="px-6 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-md font-medium transition-colors">For Rent</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" alt="4 Bedroom Villa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-[#D48816] text-white px-3 py-1 rounded-full text-sm font-bold">For Sale</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">4 Bedroom Executive Villa</h3>
                <p className="text-slate-500 mb-4 flex items-center"><MapPin className="h-4 w-4 mr-1" /> East Legon, Accra</p>
                <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                  <span className="text-xl font-bold text-[#D48816]">Contact for Price</span>
                  <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-[#D48816] flex items-center">View Details <ChevronRight className="h-4 w-4 ml-1" /></a>
                </div>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" alt="3 Bedroom House" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-bold">For Rent</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">3 Bedroom Townhouse</h3>
                <p className="text-slate-500 mb-4 flex items-center"><MapPin className="h-4 w-4 mr-1" /> Ahodwo, Kumasi</p>
                <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                  <span className="text-xl font-bold text-[#D48816]">Contact for Price</span>
                  <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-[#D48816] flex items-center">View Details <ChevronRight className="h-4 w-4 ml-1" /></a>
                </div>
              </div>
            </div>

            {/* Property 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80" alt="2 Bedroom Apartment" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-[#D48816] text-white px-3 py-1 rounded-full text-sm font-bold">For Sale</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">2 Bedroom Luxury Apt</h3>
                <p className="text-slate-500 mb-4 flex items-center"><MapPin className="h-4 w-4 mr-1" /> Cantonments, Accra</p>
                <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                  <span className="text-xl font-bold text-[#D48816]">Contact for Price</span>
                  <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-[#D48816] flex items-center">View Details <ChevronRight className="h-4 w-4 ml-1" /></a>
                </div>
              </div>
            </div>

            {/* Property 4 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80" alt="1 Bedroom Apartment" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-bold">For Rent</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">1 Bedroom Studio</h3>
                <p className="text-slate-500 mb-4 flex items-center"><MapPin className="h-4 w-4 mr-1" /> Osu, Accra</p>
                <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                  <span className="text-xl font-bold text-[#D48816]">Contact for Price</span>
                  <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-[#D48816] flex items-center">View Details <ChevronRight className="h-4 w-4 ml-1" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-[#D48816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Interested in a Property?</h2>
          <p className="text-amber-100 text-xl mb-10 max-w-2xl mx-auto">
            Contact us today to schedule a viewing or discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+2330550268204" className="bg-white text-[#D48816] px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" /> Call Us Now
            </a>
            <a href="mailto: constructionkronus@gmail.com" className="bg-[#B87512] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#9A620F] transition-colors flex items-center justify-center border border-[#E59A18]">
              <Mail className="mr-2 h-5 w-5" /> Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-6">
                <img src="./logo.png" alt="Kronus Construction" className="h-10 mr-3" onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.classList.remove('hidden');
                }} />
                <Building2 className="h-8 w-8 text-[#D48816] hidden mr-2" />
                <span className="text-2xl font-bold tracking-tight text-white">
                  KRONUS <span className="text-[#D48816]">CONSTRUCTION</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-xs mb-4">
                Building Ghana's Future through premium real estate, expert construction, and reliable equipment rentals.
              </p>
              <p className="text-[#D48816] italic font-medium">
                "Building tomorrow, shaping dreams today."
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Our Offices</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#D48816] mr-3 shrink-0" />
                  <span><strong>Kumasi:</strong> Pakyi No. 1</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-[#D48816] mr-3" />
                  <span>+233 (0) 55 026 8204 / +233 (0) 594551724</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-[#D48816] mr-3" />
                  <span> constructionkronus@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Instagram className="h-5 w-5 text-[#D48816] mr-3" />
                  <a href="https://instagram.com/kronusconstructiongh" target="_blank" rel="noopener noreferrer" className="hover:text-[#D48816] transition-colors">
                    @kronusconstructiongh
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Kronus Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Properties;
