import React from 'react';
import { motion } from 'motion/react';

export function ContactSection() {
  return (
    <section id="contact" className="h-screen flex items-center justify-center px-10 md:px-20">
      <div className="max-w-lg w-full text-center">
        <h2 className="section-title">CONTACT</h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-panel p-8"
        >
          <p className="text-white/40 text-sm mb-8 font-mono">
            [System]: Establishing secure communication channel...
          </p>
          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="IDENTIFIER" className="glass-input" />
              <input type="email" placeholder="ENCRYPTION_KEY@MAIL" className="glass-input" />
            </div>
            <textarea placeholder="TRANSMISSION_BODY" rows={4} className="glass-input w-full resize-none" />
            <button className="w-full py-3 bg-accent text-bg font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-colors">
              SEND TRANSMISSION
            </button>
          </form>
          <div className="mt-8 flex justify-center gap-6 opacity-40">
            <a href="#" className="hover:text-accent transition-colors font-mono text-[10px] tracking-widest">GITHUB</a>
            <a href="#" className="hover:text-accent transition-colors font-mono text-[10px] tracking-widest">LINKEDIN</a>
            <a href="#" className="hover:text-accent transition-colors font-mono text-[10px] tracking-widest">TWITTER</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
