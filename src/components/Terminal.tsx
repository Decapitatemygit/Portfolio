import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Terminal() {
  const [logs, setLogs] = useState<string[]>([]);
  const messages = [
    "[System]: Initializing Obsidian Vault...",
    "[Success]: Neural link established.",
    "[Status]: Loading project assets...",
    "[Info]: Shaders compiled successfully.",
    "[System]: Ready for exploration.",
    "[Event]: Scroll detected. Adjusting fov...",
    "[Data]: Fetching project 'Alpha' metadata...",
    "[Success]: Connection secure."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-5), messages[i % messages.length]]);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-10 left-10 z-50 pointer-events-none">
      <div className="glass-panel p-4 w-64 h-32 overflow-hidden flex flex-col justify-end">
        <AnimatePresence mode="popLayout">
          {logs.map((log, idx) => (
            <motion.p
              key={idx + log}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="terminal-text mb-1"
            >
              {log}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
