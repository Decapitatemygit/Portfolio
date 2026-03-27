import React from 'react';
import { motion } from 'motion/react';

const skillGroups = [
  {
    name: "CORE SYSTEMS",
    skills: ["C++", "Rust", "C#", "Python", "Assembly"]
  },
  {
    name: "GRAPHICS",
    skills: ["Vulkan", "DirectX 12", "HLSL", "GLSL", "Ray Tracing"]
  },
  {
    name: "ENGINES",
    skills: ["Unreal Engine 5", "Unity", "Godot", "Custom Engines"]
  },
  {
    name: "TOOLS",
    skills: ["Blender", "Substance", "Houdini", "Git", "Docker"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="h-screen flex items-center justify-start px-10 md:px-20">
      <div className="max-w-2xl w-full">
        <h2 className="section-title">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="terminal-text text-accent mb-4 block">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-tag text-xs py-2 px-4">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
