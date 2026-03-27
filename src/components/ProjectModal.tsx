import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, ZoomIn } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  videoUrl?: string;
  gallery?: string[];
  summary?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!project) return null;

  return (
    <>
      <AnimatePresence>
        {project && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-bg/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass-panel overflow-y-auto custom-scrollbar flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-bg/80 backdrop-blur-md p-6 border-b border-white/5 flex justify-between items-center">
                <div>
                  <span className="terminal-text text-accent text-[10px] mb-1 block tracking-[0.3em]">
                    [ARCHIVE_RECORD]: {project.category}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">
                    {project.title}
                  </h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 md:p-10 space-y-10">
                {/* Media Layout: 1 Video + 3 Images */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Main Video / Featured Image */}
                  <div 
                    className={`lg:col-span-8 aspect-video bg-white/5 rounded-lg overflow-hidden border border-white/5 relative group ${!project.videoUrl ? 'cursor-zoom-in' : ''}`}
                    onClick={() => !project.videoUrl && setLightboxImage(project.image)}
                  >
                    {project.videoUrl ? (
                      <iframe 
                        src={project.videoUrl} 
                        className="w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                          <ZoomIn className="text-accent" size={32} />
                        </div>
                      </>
                    )}
                    <div className="absolute top-4 left-4 bg-accent text-bg text-[8px] font-bold px-2 py-1 tracking-widest uppercase">
                      {project.videoUrl ? 'VIDEO_FEED' : 'PRIMARY_VISUAL'}
                    </div>
                  </div>

                  {/* Side Gallery (3 Images) */}
                  <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                    {(project.gallery || [project.image, project.image, project.image]).slice(0, 3).map((img, i) => (
                      <div 
                        key={i} 
                        className="aspect-video bg-white/5 rounded-lg overflow-hidden border border-white/5 relative group cursor-zoom-in"
                        onClick={() => setLightboxImage(img)}
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} gallery ${i}`} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                          <ZoomIn className="text-accent" size={24} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/5 pt-10">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="terminal-text text-accent mb-4">MISSION_SUMMARY</h4>
                      <p className="text-white/70 leading-relaxed text-lg font-light">
                        {project.summary || project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map(t => (
                        <span key={t} className="skill-tag px-4 py-2 text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="terminal-text text-accent mb-4">ACCESS_POINTS</h4>
                      <div className="space-y-3">
                        <button className="w-full py-3 glass-panel hover:bg-accent hover:text-black transition-all flex items-center justify-center gap-3 text-sm font-bold tracking-widest uppercase">
                          <Github size={16} /> SOURCE_CODE
                        </button>
                        <button className="w-full py-3 bg-white text-black hover:bg-accent transition-all flex items-center justify-center gap-3 text-sm font-bold tracking-widest uppercase">
                          <ExternalLink size={16} /> LIVE_DEPLOYMENT
                        </button>
                      </div>
                    </div>

                    <div className="p-4 glass-panel bg-white/[0.02]">
                      <h4 className="terminal-text text-[10px] opacity-40 mb-2">METADATA</h4>
                      <div className="space-y-1 text-[10px] font-mono opacity-40">
                        <p>STATUS: COMPLETED</p>
                        <p>VERSION: 1.0.4</p>
                        <p>ENCRYPTION: AES-256</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-[20000] flex items-center justify-center p-4 md:p-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-full max-h-full pointer-events-none"
            >
              <img 
                src={lightboxImage} 
                alt="Lightbox view" 
                className="max-w-full max-h-[90vh] object-contain border border-white/10 pointer-events-auto"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors pointer-events-auto"
              >
                <X size={32} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
