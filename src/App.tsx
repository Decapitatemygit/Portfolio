import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars as LucideStars, Download } from 'lucide-react';
import { Stars } from '@react-three/drei';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Monolith } from './components/Monolith';
import { Terminal } from './components/Terminal';
import { CustomCursor } from './components/CustomCursor';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectsPage } from './components/ProjectsPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';

function Loading() {
  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0B0B0C', zIndex: 9999 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '40px', height: '40px', border: '2px solid #00F0FF', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
        <p style={{ fontFamily: 'monospace', fontSize: '10px', color: '#00F0FF', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Initializing Vault...</p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function Scene({ scrollY, scrollOffset }: { scrollY: number, scrollOffset: number }) {
  return (
    <>
      <color attach="background" args={['#1A1A1D']} />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={5} />
      
      {/* HIGH VISIBILITY TEST CUBE - BASIC MATERIAL */}
      <mesh position={[2, 0, 0]} rotation={[scrollY * 0.005, scrollY * 0.005, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#FF0000" />
      </mesh>

      <group rotation={[0, scrollY * 0.001, 0]}>
        <Monolith scrollOffset={scrollOffset} />
      </group>
      <Stars radius={100} depth={50} count={5000} factor={6} saturation={0} fade speed={1} />
    </>
  );
}

function Portfolio() {
  const [isReady, setIsReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 500);
    const handleScroll = () => {
      const y = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(y);
      setScrollOffset(height > 0 ? y / height : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isReady && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [isReady, location.state]);

  if (!isReady) return <Loading />;

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      minHeight: '400vh', 
      color: 'white',
      cursor: 'none'
    }}>
      <CustomCursor />
      <Navbar />
      
      {/* System Status Bar */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        padding: '8px 0', 
        background: '#00F0FF', 
        color: 'black', 
        textAlign: 'center', 
        zIndex: 2000, 
        fontSize: '10px', 
        fontWeight: 'bold', 
        textTransform: 'uppercase', 
        letterSpacing: '0.5em' 
      }}>
        VAULT SYSTEM ONLINE // SECURE CONNECTION
      </div>

      {/* Fixed Background Canvas */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }}>
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 45 }} 
          style={{ width: '100%', height: '100%' }}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
        >
          <React.Suspense fallback={null}>
            <Scene scrollY={scrollY} scrollOffset={scrollOffset} />
          </React.Suspense>
        </Canvas>
      </div>

      {/* Standard Scrollable Content */}
      <div style={{ position: 'relative', zIndex: 100, pointerEvents: 'none' }}>
        <section style={{ 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          textAlign: 'center',
          pointerEvents: 'auto'
        }}>
          <h1 style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            fontSize: 'clamp(3rem, 10vw, 6rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.05em', 
            lineHeight: 0.9, 
            marginBottom: '24px',
            textTransform: 'uppercase',
            color: 'white'
          }}>
            OBSIDIAN<br />VAULT
          </h1>
          <p style={{ color: '#00F0FF', fontFamily: 'monospace', letterSpacing: '0.3em', fontSize: '14px' }}>
            GAME DEVELOPER & ENGINE ARCHITECT // 2025
          </p>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <button 
              style={{ 
                padding: '12px 24px', 
                background: 'transparent', 
                border: '1px solid #00F0FF', 
                color: '#00F0FF', 
                fontFamily: 'monospace', 
                fontSize: '12px', 
                letterSpacing: '0.2em', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00F0FF';
                e.currentTarget.style.color = '#0B0B0C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00F0FF';
              }}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download size={14} /> DOWNLOAD_RESUME.PDF
            </button>
            <p style={{ fontSize: '10px', opacity: 0.5, letterSpacing: '0.2em' }}>SCROLL TO EXPLORE</p>
          </div>
        </section>

        <div style={{ background: 'rgba(11, 11, 12, 0.8)', pointerEvents: 'auto' }}>
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </div>

      <Terminal />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </ErrorBoundary>
  );
}
