import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from 'react';
import { useScrollTo } from "~/hooks/useScrollTo";

export const meta: MetaFunction = () => {
  return [
    { title: "AUCTO Games" },
    { name: "description", content: "Your Game, Your Rules" },
  ];
};

export default function Index() {
  const scrollTo = useScrollTo();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'testimonials', label: 'Testimonials' }
  ];

  useEffect(() => {
    // Initialize particle background
    const initParticles = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = () => {
        (window as any).particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
          },
          interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
          },
          retina_detect: true
        });
      };
      document.body.appendChild(script);
    };

    // Initialize 3D cricket ball animation
    const init3DBall = () => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = () => {
        // 3D ball animation code will be initialized here
        const scene = new (window as any).THREE.Scene();
        const camera = new (window as any).THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
        const renderer = new (window as any).THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(200, 200);
        document.getElementById('ball-container')?.appendChild(renderer.domElement);

        const geometry = new (window as any).THREE.SphereGeometry(1, 32, 32);
        const texture = new (window as any).THREE.TextureLoader().load('/images/cricket-ball-texture.jpg');
        const material = new (window as any).THREE.MeshPhongMaterial({ map: texture });
        const ball = new (window as any).THREE.Mesh(geometry, material);
        scene.add(ball);

        const light = new (window as any).THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);

        camera.position.z = 3;

        const animate = () => {
          requestAnimationFrame(animate);
          ball.rotation.x += 0.01;
          ball.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
        animate();
      };
      document.body.appendChild(script);
    };

    initParticles();
    init3DBall();

    // Smooth scroll initialization
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector((this as HTMLAnchorElement).getAttribute('href') || '');
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Particle Background */}
      <div id="particles-js" className="fixed inset-0 z-0"></div>

      {/* Navigation with Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl sm:text-3xl font-bold text-white hover:text-yellow-400 transition-colors duration-300">AUCTO</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm lg:text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-yellow-400 transition-colors duration-300 p-2"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}>
            <div className="py-4 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollTo(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-yellow-400 transition-colors duration-300 px-4 py-2 text-sm hover:bg-white/10 rounded"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <div id="particles-js" className="fixed inset-0 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <div id="ball-container" className="absolute -top-20 sm:-top-32 left-1/2 transform -translate-x-1/2"></div>
            <h1 className="mb-8 relative">
              <span className="block text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400 mb-2 animate-float">
                YOUR GAME,
              </span>
              <span className="block text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 animate-float animation-delay-200">
                YOUR RULES.
              </span>
            </h1>
            <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              DOWNLOAD NOW!
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-600">Experience </span>
              <span className="text-yellow-500">Fantasy Cricket</span>
              <span className="text-blue-600"> Like Never Before</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Join millions of cricket fans and experience the thrill of live IPL auctions
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Feature Cards */}
            <div className="group bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll">
              {/* Feature content */}
            </div>
            {/* ... other feature cards ... */}
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div id="why-us" className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Features */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature cards */}
            </div>

            {/* Right Column - App Preview */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-3xl blur-xl opacity-30 transform rotate-6"></div>
                <img 
                  src="/images/app-preview.png" 
                  alt="AuctoGames App Preview" 
                  className="relative rounded-2xl shadow-2xl border-8 border-white w-full"
                />
                <div className="absolute -bottom-8 -right-8 w-16 sm:w-24 h-16 sm:h-24 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12">
                  <span className="text-white font-bold text-lg sm:text-xl">4.8★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 animate-on-scroll">
            <span className="text-blue-600">What Our </span>
            <span className="text-yellow-500">Users Say</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial cards */}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="container mx-auto px-4">
          {/* Footer content */}
        </div>
      </footer>
    </div>
  );
}
