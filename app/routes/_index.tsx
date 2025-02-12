import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from 'react';
import { useScrollTo } from "~/hooks/useScrollTo";
import LandingPage from "~/components/LandingPage";

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
    <div className="min-h-screen">
      <LandingPage />
    </div>
  );
}
