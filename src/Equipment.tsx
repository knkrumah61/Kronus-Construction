import React, { useState } from 'react';
import { Building2, Home, Truck, Phone, Mail, MapPin, ChevronRight, CheckCircle2, Instagram, ArrowLeft, Settings, Wrench, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function InventoryCard({ item }: { item: any }) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = item.images && item.images.length > 0 ? item.images : [item.fallbackImage];

  const nextImage = () => setImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <div className="h-48 relative group">
        <img 
          src={images[imageIndex]?.startsWith('/') ? '.' + images[imageIndex] : images[imageIndex]} 
          alt={item.name} 
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            e.currentTarget.src = item.fallbackImage;
          }}
        />
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full font-bold text-xs shadow-sm ${item.status === 'FOR SALE' ? 'bg-[#D48816] text-white' : 'bg-slate-900 text-white'}`}>
          {item.status}
        </div>

        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
              {images.map((_: any, idx: number) => (
                <button 
                  key={idx}
                  onClick={() => setImageIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === imageIndex ? 'bg-[#D48816]' : 'bg-white/50 hover:bg-white'}`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h4 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h4>
        {item.details && <p className="text-sm text-slate-500 mb-3">{item.details}</p>}
      </div>
    </div>
  );
}

function Equipment() {
  const [jcbImageIndex, setJcbImageIndex] = useState(0);
  const jcbImages = [
    '/jcb-1.jpg',
    '/jcb-2.jpg',
    '/jcb-3.jpg',
    '/jcb-4.jpg'
  ];

  const [catImageIndex, setCatImageIndex] = useState(0);
  const catImages = [
    '/Cat-428F-1.jpg',
    '/Cat-428F-2.jpg',
    '/Cat-428F-3.jpg'
  ];

  const nextJcbImage = () => setJcbImageIndex((prev) => (prev + 1) % jcbImages.length);
  const prevJcbImage = () => setJcbImageIndex((prev) => (prev - 1 + jcbImages.length) % jcbImages.length);

  const nextCatImage = () => setCatImageIndex((prev) => (prev + 1) % catImages.length);
  const prevCatImage = () => setCatImageIndex((prev) => (prev - 1 + catImages.length) % catImages.length);

  const inventory = {
    excavators: [
      { name: 'Cat 307', status: 'FOR SALE', images: ['/Cat 307 (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'Cat 320 GC', status: 'FOR SALE', images: ['/Cat 320 GC (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'Cat 320 GX', status: 'FOR SALE', images: ['/Cat 320-1 GX (Sale).jpg', '/Cat 320-2 GX (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'Cat 323 GX', status: 'FOR SALE', images: ['/Cat 323-1 GX (Sale).jpg', '/Cat 323-2 GX (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'China XCMG 215', status: 'FOR SALE', images: ['/china XCMG 215C-1 (sale).jpg', '/china XCMG 215C-2 (sale).jpg', '/china XCMG 215C-3 (sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'Sany 215 India', status: 'FOR RENT', details: '8 hours minimum', images: ['/Sany 215 India-1 (Rent -8 hours minimum).jpg', '/Sany 215 India-2 (Rent -8 hours minimum).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'Sany 215 India', status: 'FOR SALE', images: ['/Sany 215 india-1 (Sale).jpg', '/Sany 215 india-2 (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'JCB 215', status: 'FOR SALE', images: ['/JCB 215-1 (Sale).jpg', '/JCB 215-2 (Sale).jpg', '/JCB 215-3 (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'Luigong 922E', status: 'FOR SALE', images: ['/Luigong 922E-1 (Sale).jpg', '/Luigong 922E-2 (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'Luigong 933E', status: 'FOR SALE', images: ['/Luigong 933E-1 (Sale).jpg', '/Luigong 933E-2 (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'Sany China 215', status: 'FOR SALE', images: ['/Sany 215-1 (Sale).jpg', '/Sany 215-2 (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'Sany China 335', status: 'FOR SALE', images: ['/Sany 335 (sale).jpg', '/Sany 335-2 (sale).jpg', '/Sany 335-3 (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
      { name: 'SDLG', status: 'FOR SALE', images: ['/SDLG (Sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80' },
    ],
    payLoaders: [
      { name: 'Shantui', status: 'FOR SALE', images: ['/Shantui-1.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80' },
      { name: 'SDLG', status: 'FOR SALE', images: ['/SDLG-1.jpg', '/SDLG (Rent).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80' },
    ],
    tipperTrucks: [
      { name: 'Shacman', status: 'FOR SALE', images: ['/Shacman-1 (sale).jpg', '/Shacman-2 (sale).jpg', '/Shacman-3 (sale).jpg', '/Shacman-4 (sale).jpg', '/Shacman-5 (sale).jpg', '/Shacman-16 (sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80' },
      { name: 'Shacman', status: 'FOR RENT', images: ['/Shacman-1 (rent).jpg', '/Shacman-2 (rent).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80' },
      { name: 'Sinotruck', status: 'FOR SALE', images: ['/sinotruck-1 (sale).jpg', '/sinotruck-2 (sale).jpg', '/sinotruck-3 (sale).jpg'], fallbackImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80' },
    ],
    other: [
      { name: 'Concrete Mixers', status: 'AVAILABLE', images: ['/concrete mixer-a1.jpg', '/concrete mixer-b1.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80' },
      { name: 'Pavement Roller', status: 'AVAILABLE', images: ['/pavement roller-1.jpg', '/pavement roller-2.jpg', '/pavement roller t-1.jpg', '/pavement roller -t2.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80' },
    ],
    parts: [
      { name: '4 Cylinder Engines', status: 'AVAILABLE', images: ['/4 cylinder engine-1.jpg', '/4 cylinder engine-2.jpg', '/4 cylinder engine-3.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80' },
      { name: '6 Cylinder Engines', status: 'AVAILABLE', images: ['/6 cylinder engine-1 with pulley.jpg', '/6 cylinder engine-2 with pulley.jpg', '/6 cylinder engine-3 with pulley.jpg', '/6 cylinder engine-4 with pulley.jpg', '/6 cylinder engine-5 with pulley.jpg', '/6 cylinder engine-6 with pulley.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80' },
      { name: 'Bucket Cylinder', status: 'AVAILABLE', images: ['/bucket cylinder all type-1.jpg', '/bucket cylinder all type-2.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' },
      { name: 'Circle Tunner', status: 'AVAILABLE', images: ['/circle tunner all type-1.jpg', '/circle tunner all type-2.jpg', '/circle tunner all type-3.jpg', '/circle tunner all type-4.jpg', '/circle tunner all type-5.jpg', '/circle tunner all type-6.jpg', '/circle tunner all type-7.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' },
      { name: 'Hydraulic & Engine Oil', status: 'AVAILABLE', images: ['/hydraulic and engine oil.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1622219809260-ce065fc5277f?auto=format&fit=crop&q=80' },
      { name: 'Excavator Monitors', status: 'AVAILABLE', images: ['/excavator monitors-1.jpg', '/excavator monitors-2.jpg', '/excavator monitors-3.jpg', '/excavator monitors-4.jpg', '/excavator monitors-5.jpg', '/excavator monitors-6.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' },
      { name: 'Sprocket', status: 'AVAILABLE', images: ['/sproket.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' },
      { name: 'Track Shoe & Teeth', status: 'AVAILABLE', images: ['/track shoe-1.jpg', '/teeth-1.jpg', '/teeth-2.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' },
      { name: 'Swinging Motor', status: 'AVAILABLE', images: ['/swinging motor-1.jpg', '/swinging motor-2.jpg', '/swinging motor-3.jpg'], fallbackImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' },
    ]
  };

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
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80" 
            alt="Heavy Equipment" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Heavy <span className="text-[#D48816]">Equipment</span> Solutions
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Sales, rentals, and comprehensive servicing for all your heavy machinery needs across Ghana.
          </p>
        </div>
      </section>

      {/* Equipment Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Equipment Fleet</h2>
            <div className="w-24 h-1 bg-[#D48816] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              Kronus Construction maintains a robust fleet of heavy machinery available for sale or rent. We also provide expert maintenance and repair services to keep your projects moving.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Sales */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
              <div className="w-16 h-16 bg-[#D48816]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-[#D48816]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Equipment Sales</h3>
              <p className="text-slate-600">
                Purchase top-tier, reliable heavy machinery. We offer both new and certified pre-owned equipment, ensuring you get the best value for your investment.
              </p>
            </div>

            {/* Rentals */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
              <div className="w-16 h-16 bg-[#D48816]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-[#D48816]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Flexible Rentals</h3>
              <p className="text-slate-600">
                Short-term and long-term rental options available for our entire fleet. Perfect for scaling your operations without the overhead of ownership.
              </p>
            </div>

            {/* Services */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
              <div className="w-16 h-16 bg-[#D48816]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-[#D48816]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Maintenance & Repair</h3>
              <p className="text-slate-600">
                Our expert mechanics provide on-site servicing and major repairs to minimize downtime and keep your equipment running at peak performance.
              </p>
            </div>
          </div>

          {/* Featured Equipment */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Featured Equipment</h3>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* JCB For Sale */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col">
                <div className="h-64 relative group">
                  <img 
                    src={jcbImages[jcbImageIndex]?.startsWith('/') ? '.' + jcbImages[jcbImageIndex] : jcbImages[jcbImageIndex]} 
                    alt={`JCB Backhoe for Sale - View ${jcbImageIndex + 1}`} 
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-[#D48816] text-white px-4 py-1 rounded-full font-bold text-sm shadow-md z-10">
                    FOR SALE
                  </div>
                  
                  {/* Image Navigation */}
                  <button 
                    onClick={prevJcbImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextJcbImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {jcbImages.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setJcbImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === jcbImageIndex ? 'bg-[#D48816]' : 'bg-white/50 hover:bg-white'}`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">JCB Backhoe Loader</h4>
                  <p className="text-[#D48816] font-medium mb-4">Excellent Condition • Ready for Work</p>
                  <p className="text-slate-600 mb-6 flex-grow">
                    High-performance JCB backhoe loader available for immediate sale. Well-maintained and perfect for construction, excavation, and material handling tasks.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-2 shrink-0" />
                      <span>4x4 Drive</span>
                    </li>
                    <li className="flex items-center text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-2 shrink-0" />
                      <span>Multi-purpose front bucket</span>
                    </li>
                    <li className="flex items-center text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-2 shrink-0" />
                      <span>Heavy-duty rear excavator</span>
                    </li>
                  </ul>
                  <a href="#contact" className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors w-full">
                    Inquire About Pricing
                  </a>
                </div>
              </div>

              {/* Cat 428F For Rent */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col">
                <div className="h-64 relative group">
                  <img 
                    src={catImages[catImageIndex]?.startsWith('/') ? '.' + catImages[catImageIndex] : catImages[catImageIndex]} 
                    alt={`Cat 428F Backhoe for Rent - View ${catImageIndex + 1}`} 
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-slate-900 text-white px-4 py-1 rounded-full font-bold text-sm shadow-md z-10">
                    FOR RENT
                  </div>

                  {/* Image Navigation */}
                  <button 
                    onClick={prevCatImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextCatImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {catImages.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCatImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === catImageIndex ? 'bg-[#D48816]' : 'bg-white/50 hover:bg-white'}`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Caterpillar 428F Backhoe</h4>
                  <p className="text-slate-500 font-medium mb-4">Available for Short & Long-term Rent</p>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Versatile and powerful Cat 428F backhoe loader. Ideal for trenching, back-filling, and material handling. Comes with a certified operator.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-2 shrink-0" />
                      <span>Operator included</span>
                    </li>
                    <li className="flex items-center text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-2 shrink-0" />
                      <span>Fuel options available</span>
                    </li>
                    <li className="flex items-center text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-[#D48816] mr-2 shrink-0" />
                      <span>Regular maintenance included</span>
                    </li>
                  </ul>
                  <a href="#contact" className="inline-flex items-center justify-center bg-[#D48816] text-white px-6 py-3 rounded-md font-medium hover:bg-[#B87512] transition-colors w-full">
                    Request Rental Rates
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Full Inventory Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Inventory</h2>
              <div className="w-24 h-1 bg-[#D48816] mx-auto rounded-full"></div>
              <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                Browse our extensive selection of heavy machinery available for your next project.
              </p>
            </div>

            {/* Excavators */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2 flex items-center">
                <Wrench className="h-6 w-6 text-[#D48816] mr-3" /> Excavators
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {inventory.excavators.map((item, idx) => (
                  <InventoryCard key={idx} item={item} />
                ))}
              </div>
            </div>

            {/* Pay Loaders */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2 flex items-center">
                <Truck className="h-6 w-6 text-[#D48816] mr-3" /> Pay Loaders
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {inventory.payLoaders.map((item, idx) => (
                  <InventoryCard key={idx} item={item} />
                ))}
              </div>
            </div>

            {/* Tipper Trucks */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2 flex items-center">
                <Truck className="h-6 w-6 text-[#D48816] mr-3" /> Tipper Trucks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {inventory.tipperTrucks.map((item, idx) => (
                  <InventoryCard key={idx} item={item} />
                ))}
              </div>
            </div>

            {/* Other Equipment */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2 flex items-center">
                <Settings className="h-6 w-6 text-[#D48816] mr-3" /> Other Equipment
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {inventory.other.map((item, idx) => (
                  <InventoryCard key={idx} item={item} />
                ))}
              </div>
            </div>

            {/* Parts & Accessories */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2 flex items-center">
                <Wrench className="h-6 w-6 text-[#D48816] mr-3" /> Parts & Accessories
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {inventory.parts.map((item, idx) => (
                  <InventoryCard key={idx} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Fleet List */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Available Machinery & Parts</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-[#D48816] mr-4 shrink-0" />
                <span className="text-lg font-medium">Excavators</span>
              </div>
              <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-[#D48816] mr-4 shrink-0" />
                <span className="text-lg font-medium">Bulldozers</span>
              </div>
              <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-[#D48816] mr-4 shrink-0" />
                <span className="text-lg font-medium">Backhoes</span>
              </div>
              <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-[#D48816] mr-4 shrink-0" />
                <span className="text-lg font-medium">Payloaders</span>
              </div>
              <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-[#D48816] mr-4 shrink-0" />
                <span className="text-lg font-medium">Tipper Trucks</span>
              </div>
              <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-[#D48816] mr-4 shrink-0" />
                <span className="text-lg font-medium">Concrete Mixers</span>
              </div>
              <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-[#D48816] mr-4 shrink-0" />
                <span className="text-lg font-medium">Pavement Rollers</span>
              </div>
              <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-[#D48816] mr-4 shrink-0" />
                <span className="text-lg font-medium">Engines & Motors</span>
              </div>
              <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-[#D48816] mr-4 shrink-0" />
                <span className="text-lg font-medium">Parts & Accessories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-[#D48816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Need Heavy Machinery?</h2>
          <p className="text-amber-100 text-xl mb-10 max-w-2xl mx-auto">
            Contact our equipment division today for sales inquiries, rental rates, or to schedule a service appointment.
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

export default Equipment;
