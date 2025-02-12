import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Stadium Background */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/images/Cricket-Stadium-Wallpaper-for-Wall.jpg")',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-900/80"></div>
        
        {/* Navigation */}
        <nav className="relative z-10 p-6">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-white">AUCTO</div>
            <div className="flex-grow"></div>
            <button className="lg:hidden">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"/>
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4">
          <div className="text-center">
            <h1 className="mb-8">
              <span className="block text-5xl md:text-7xl font-bold text-yellow-400 mb-2">
                YOUR GAME,
              </span>
              <span className="block text-5xl md:text-7xl font-bold text-white">
                YOUR RULES.
              </span>
            </h1>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              DOWNLOAD NOW!
            </button>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 200" 
            xmlns="http://www.w3.org/2000/svg"
            className="fill-blue-600"
          >
            <path 
              d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,133.3C672,139,768,117,864,101.3C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
