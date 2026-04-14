/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Building2, Home, Truck, Phone, Mail, MapPin, ChevronRight, CheckCircle2, Instagram, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <img src="./logo.png" alt="Kronus Construction" className="h-12 mr-3" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling!.classList.remove('hidden');
              }} />
              <Building2 className="h-8 w-8 text-[#D48816] hidden mr-2" />
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                KRONUS <span className="text-[#D48816]">CONSTRUCTION</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/properties" className="text-slate-600 hover:text-[#D48816] font-medium transition-colors">Properties</Link>
              <Link to="/construction" className="text-slate-600 hover:text-[#D48816] font-medium transition-colors">Construction</Link>
              <Link to="/equipment" className="text-slate-600 hover:text-[#D48816] font-medium transition-colors">Equipment</Link>
              <a href="#contact" className="bg-[#D48816] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#B87512] transition-colors">
                Get a Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 hover:text-[#D48816] focus:outline-none">
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 space-y-4 shadow-lg absolute w-full left-0">
            <Link to="/properties" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-[#D48816] font-medium text-lg">Properties</Link>
            <Link to="/construction" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-[#D48816] font-medium text-lg">Construction</Link>
            <Link to="/equipment" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-[#D48816] font-medium text-lg">Equipment</Link>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block bg-[#D48816] text-white px-6 py-3 rounded-md font-medium hover:bg-[#B87512] text-center text-lg mt-4">
              Get a Quote
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80" 
            alt="Construction Site in Ghana" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Building Ghana's <span className="text-[#D48816]">Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D48816] font-medium mb-4">
              Building tomorrow, shaping dreams today.
            </p>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
              Premier construction, real estate, and heavy equipment solutions across Accra and Kumasi. We deliver excellence from the ground up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#D48816] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#B87512] transition-colors text-center flex items-center justify-center">
                Start Your Project <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-colors text-center">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Three Pillars of Excellence</h2>
            <div className="w-24 h-1 bg-[#D48816] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored for the Ghanaian market, ensuring quality, reliability, and value in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Pillar 1 */}
            <div id="properties" className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="w-16 h-16 bg-[#D48816]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Home className="h-8 w-8 text-[#D48816]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Properties</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-600">1-4 bedroom estate houses for sale & rent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Sale of titled lands with verified deed documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Prime locations in Accra & Kumasi</span>
                </li>
              </ul>
              <Link to="/properties" className="inline-flex items-center font-medium text-[#D48816] hover:text-[#B87512] transition-colors mt-auto">
                View Properties <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div id="construction" className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="w-16 h-16 bg-[#D48816]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="h-8 w-8 text-[#D48816]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Construction</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Construction of 1-4 bedroom houses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Commercial & industrial construction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Expert renovations & remodeling</span>
                </li>
              </ul>
              <Link to="/construction" className="inline-flex items-center font-medium text-[#D48816] hover:text-[#B87512] transition-colors mt-auto">
                View Construction Services <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div id="equipment" className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="w-16 h-16 bg-[#D48816]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="h-8 w-8 text-[#D48816]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Equipment</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Sales of heavy machinery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Equipment rentals (Excavators, payloaders, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-600">Comprehensive servicing and maintenance</span>
                </li>
              </ul>
              <Link to="/equipment" className="inline-flex items-center font-medium text-[#D48816] hover:text-[#B87512] transition-colors mt-auto">
                View Equipment <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Kronus?</h2>
              <div className="w-24 h-1 bg-[#D48816] rounded-full mb-8"></div>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Navigating the real estate and construction landscape in Ghana requires a trusted partner. We bring transparency, international standards, and local expertise to every project.
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#D48816]/20 text-[#D48816]">
                      <span className="font-bold text-xl">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold">Verified Documentation</h4>
                    <p className="mt-2 text-slate-400">All our lands and properties come with rigorous title checks and complete, authentic documentation.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#D48816]/20 text-[#D48816]">
                      <span className="font-bold text-xl">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold">Uncompromising Quality</h4>
                    <p className="mt-2 text-slate-400">From materials to craftsmanship, we adhere to strict quality control standards on all construction sites.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#D48816]/20 text-[#D48816]">
                      <span className="font-bold text-xl">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold">Reliable Equipment</h4>
                    <p className="mt-2 text-slate-400">Our well-maintained fleet ensures your project stays on schedule without unexpected breakdowns.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
                alt="Modern Architecture" 
                className="rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#D48816] p-8 rounded-lg shadow-xl hidden sm:block">
                <p className="text-4xl font-bold text-white mb-2">Half a decade+</p>
                <p className="text-amber-100 font-medium">Years of Excellence<br/>in Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-[#D48816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Build Your Future?</h2>
          <p className="text-amber-100 text-xl mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation on your next property purchase, construction project, or equipment rental needs.
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

export default App;

