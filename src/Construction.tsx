import React from 'react';
import { Building2, Home, Truck, Phone, Mail, MapPin, ChevronRight, CheckCircle2, Instagram, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Construction() {
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
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
            alt="Construction Site" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Expert <span className="text-[#D48816]">Construction</span> Services
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Specializing in the design and construction of premium 1 to 4 bedroom residential homes and commercial projects.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Building Your Vision</h2>
            <div className="w-24 h-1 bg-[#D48816] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              From concept to completion, Kronus Construction delivers unparalleled quality in every build. We specialize in modern, durable, and aesthetically pleasing residential homes ranging from cozy 1-bedroom units to expansive 4-bedroom family estates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Residential Construction (1-4 Bedrooms)</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-[#D48816]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Custom Architectural Design</h4>
                    <p className="text-slate-600">Tailored floor plans to maximize space and natural light, perfectly suited for the Ghanaian climate.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-[#D48816]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Premium Materials</h4>
                    <p className="text-slate-600">We source only the highest grade cement, steel, and finishing materials to ensure structural integrity and longevity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-[#D48816]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Turnkey Solutions</h4>
                    <p className="text-slate-600">From foundation laying to the final coat of paint, we handle every aspect of the build so you can move in hassle-free.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" alt="Construction Worker" className="rounded-lg shadow-md w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80" alt="Fully Furnished Home Front Elevation" className="rounded-lg shadow-md w-full h-48 object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-[#D48816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Start Your Build Today</h2>
          <p className="text-amber-100 text-xl mb-10 max-w-2xl mx-auto">
            Contact our engineering team to discuss your residential or commercial construction project.
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

export default Construction;
