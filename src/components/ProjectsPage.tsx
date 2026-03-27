import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Maximize2 } from 'lucide-react';
import { CustomCursor } from './CustomCursor';
import { ProjectModal } from './ProjectModal';
import { Navbar } from './Navbar';

const allProjects = [
  {
    title: "PROJECT ALPHA",
    category: "VOXEL ENGINE",
    description: "High-performance C++ engine with real-time raytraced global illumination and procedural generation.",
    summary: "Project Alpha represents the pinnacle of voxel-based rendering technology. Built from the ground up in C++, it utilizes a custom Sparse Voxel Octree (SVO) structure to handle massive environments with minimal memory overhead. The engine features a real-time path tracer implemented in Vulkan, providing physically accurate lighting, reflections, and soft shadows. Procedural generation algorithms ensure that no two environments are the same, while SIMD optimizations guarantee smooth performance even on mid-range hardware.",
    image: "https://picsum.photos/seed/voxel/800/450",
    gallery: [
      "https://picsum.photos/seed/voxel1/800/450",
      "https://picsum.photos/seed/voxel2/800/450",
      "https://picsum.photos/seed/voxel3/800/450"
    ],
    videoUrl: "https://player.vimeo.com/video/347119375?h=85a1e7418d&color=00f0ff&title=0&byline=0&portrait=0",
    tech: ["C++", "Vulkan", "HLSL", "SIMD"]
  },
  {
    title: "ENGINE DELTA",
    category: "PHYSICS CORE",
    description: "Custom deterministic physics engine for massive multiplayer environments with sub-millisecond resolution.",
    summary: "Engine Delta was developed to solve the challenges of synchronization in large-scale multiplayer games. By utilizing a deterministic approach, the engine ensures that physics simulations are identical across all clients, drastically reducing network bandwidth requirements. It features a custom GJK/EPA collision detection system and a constraint-based solver optimized for multi-threaded execution. The engine is written in Rust for memory safety and compiled to WebAssembly for high-performance browser-based simulations.",
    image: "https://picsum.photos/seed/physics/800/450",
    gallery: [
      "https://picsum.photos/seed/phys1/800/450",
      "https://picsum.photos/seed/phys2/800/450",
      "https://picsum.photos/seed/phys3/800/450"
    ],
    tech: ["Rust", "Wasm", "WebGPU", "ECS"]
  },
  {
    title: "SHADERCRAFT",
    category: "VISUAL FX",
    description: "A collection of procedural environment shaders for cinematic game worlds, including water and atmosphere.",
    summary: "Shadercraft is a comprehensive library of high-end visual effects shaders designed for modern game engines. It includes advanced water simulation with FFT-based waves, dynamic atmospheric scattering for realistic skies, and a suite of post-processing effects like volumetric lighting and screen-space reflections. Each shader is highly customizable through a node-based interface, allowing artists to achieve specific visual styles without writing a single line of code.",
    image: "https://picsum.photos/seed/shader/800/450",
    gallery: [
      "https://picsum.photos/seed/sh1/800/450",
      "https://picsum.photos/seed/sh2/800/450",
      "https://picsum.photos/seed/sh3/800/450"
    ],
    tech: ["GLSL", "Unity", "Compute", "HLSL"]
  },
  {
    title: "NEURAL NET",
    category: "AI / ML",
    description: "Reinforcement learning framework for procedural NPC behavior in complex environments.",
    summary: "Neural Net is an experimental framework that brings advanced machine learning to game AI. Using Proximal Policy Optimization (PPO), NPCs are trained to navigate complex, dynamic environments and make strategic decisions in real-time. The framework supports seamless integration with existing game engines and provides tools for visualizing the neural network's decision-making process. It is built on PyTorch and optimized for inference using ONNX Runtime.",
    image: "https://picsum.photos/seed/ai/800/450",
    gallery: [
      "https://picsum.photos/seed/ai1/800/450",
      "https://picsum.photos/seed/ai2/800/450",
      "https://picsum.photos/seed/ai3/800/450"
    ],
    tech: ["Python", "PyTorch", "C++", "ONNX"]
  },
  {
    title: "VOID RUNNER",
    category: "GAMEPLAY",
    description: "Fast-paced arcade runner built to test high-speed collision detection and asset streaming.",
    summary: "Void Runner is a high-octane demonstration of asset streaming and collision detection at extreme speeds. The game features an infinite, procedurally generated track that streams in real-time, maintaining a constant 144 FPS. It utilizes Unity's Data-Oriented Technology Stack (DOTS) to handle thousands of active entities simultaneously, while a custom spatial partitioning system ensures pixel-perfect collision detection even at Mach speeds.",
    image: "https://picsum.photos/seed/game/800/450",
    gallery: [
      "https://picsum.photos/seed/game1/800/450",
      "https://picsum.photos/seed/game2/800/450",
      "https://picsum.photos/seed/game3/800/450"
    ],
    tech: ["C#", "Unity", "DOTS", "FMOD"]
  },
  {
    title: "TERRAIN GEN",
    category: "PROCEDURAL",
    description: "Infinite terrain generation system using multi-layered noise and hydraulic erosion simulation.",
    summary: "Terrain Gen is a tool for creating vast, realistic landscapes using GPU-accelerated procedural algorithms. It combines multiple octaves of Perlin and Simplex noise with a sophisticated hydraulic erosion simulation to create natural-looking mountains, valleys, and river systems. The system supports real-time editing and can export high-resolution heightmaps and splatmaps for use in any major game engine. It is implemented in C++ using DirectX 12 compute shaders for maximum performance.",
    image: "https://picsum.photos/seed/terrain/800/450",
    gallery: [
      "https://picsum.photos/seed/terr1/800/450",
      "https://picsum.photos/seed/terr2/800/450",
      "https://picsum.photos/seed/terr3/800/450"
    ],
    tech: ["C++", "Compute Shaders", "DirectX 12"]
  }
];

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-white p-10 md:p-20 cursor-none">
      <CustomCursor />
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <Link 
              to="/" 
              className="terminal-text text-accent hover:text-white transition-colors flex items-center gap-2 group mb-8"
            >
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> BACK TO VAULT
            </Link>
            <h1 className="font-display text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              PROJECT<br />ARCHIVES
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-white/40 text-sm leading-relaxed font-mono uppercase tracking-wider">
              [System]: Accessing encrypted project database...<br />
              [Status]: {allProjects.length} records retrieved from deep storage.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="glass-panel overflow-hidden group hover:border-accent/30 transition-all flex flex-col cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bg/60 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-accent text-bg p-3 rounded-full scale-50 group-hover:scale-100 transition-transform">
                    <Maximize2 size={24} />
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                  <button className="p-2 glass-panel hover:bg-accent hover:text-black transition-colors">
                    <Github size={14} />
                  </button>
                  <button className="p-2 glass-panel hover:bg-accent hover:text-black transition-colors">
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                  <span className="terminal-text text-accent">{project.category}</span>
                </div>
                <p className="text-white/40 text-sm mb-6 flex-1 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => <span key={t} className="skill-tag">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

        <footer className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="terminal-text opacity-20">© 2025 OBSIDIAN VAULT // ALL RIGHTS RESERVED</p>
          <div className="flex gap-8">
            <a href="#" className="terminal-text hover:text-accent transition-colors">GITHUB</a>
            <a href="#" className="terminal-text hover:text-accent transition-colors">LINKEDIN</a>
            <a href="#" className="terminal-text hover:text-accent transition-colors">TWITTER</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
