import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

const featuredProjects = [
  {
    title: "PROJECT ALPHA",
    category: "VOXEL ENGINE",
    description: "High-performance C++ engine with real-time raytraced global illumination.",
    summary: "Project Alpha represents the pinnacle of voxel-based rendering technology. Built from the ground up in C++, it utilizes a custom Sparse Voxel Octree (SVO) structure to handle massive environments with minimal memory overhead. The engine features a real-time path tracer implemented in Vulkan, providing physically accurate lighting, reflections, and soft shadows.",
    image: "https://picsum.photos/seed/voxel/800/450",
    gallery: [
      "https://picsum.photos/seed/voxel1/800/450",
      "https://picsum.photos/seed/voxel2/800/450",
      "https://picsum.photos/seed/voxel3/800/450"
    ],
    videoUrl: "https://player.vimeo.com/video/347119375?h=85a1e7418d&color=00f0ff&title=0&byline=0&portrait=0",
    tech: ["C++", "Vulkan", "HLSL"]
  },
  {
    title: "ENGINE DELTA",
    category: "PHYSICS CORE",
    description: "Custom deterministic physics engine for massive multiplayer environments.",
    summary: "Engine Delta was developed to solve the challenges of synchronization in large-scale multiplayer games. By utilizing a deterministic approach, the engine ensures that physics simulations are identical across all clients, drastically reducing network bandwidth requirements.",
    image: "https://picsum.photos/seed/physics/800/450",
    gallery: [
      "https://picsum.photos/seed/phys1/800/450",
      "https://picsum.photos/seed/phys2/800/450",
      "https://picsum.photos/seed/phys3/800/450"
    ],
    tech: ["Rust", "Wasm", "WebGPU"]
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="h-screen flex items-center justify-end px-10 md:px-20">
      <div className="max-w-2xl w-full">
        <div className="flex justify-between items-end mb-8">
          <h2 className="section-title mb-0">PROJECTS</h2>
          <Link 
            to="/projects" 
            className="terminal-text text-accent hover:text-white transition-colors flex items-center gap-2 group mb-2"
          >
            VIEW ALL ARCHIVES <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="glass-panel overflow-hidden group hover:border-accent/30 transition-all cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bg/60 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-accent text-bg p-2 rounded-full scale-50 group-hover:scale-100 transition-transform">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                  <span className="terminal-text text-accent text-[8px]">{project.category}</span>
                </div>
                <p className="text-white/40 text-xs mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map(t => <span key={t} className="skill-tag text-[8px] px-2 py-0.5">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
