import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for critical resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // 4.5s preloader
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
        >
          <div className="relative flex flex-col items-center">
            {/* Elegant spinning rings */}
            <div className="relative w-24 h-24 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary-600 dark:border-primary-400"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-b-2 border-l-2 border-indigo-600 dark:border-indigo-400 opacity-70"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full" />
              </motion.div>
            </div>
            
            {/* Brand text with elegant letter reveal */}
            <motion.div
              className="text-center mb-6 flex overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
              }}
            >
              {"Axle Solutions".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="text-2xl font-bold tracking-widest text-gray-900 dark:text-white uppercase inline-block"
                  style={{ marginRight: char === " " ? "0.4em" : "0.05em" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Loading Strip */}
            <div className="w-48 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mt-4">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 4.0, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400 rounded-full"
              />
            </div>
            
            <div className="flex gap-1 justify-center mt-4">
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="w-1.5 h-1.5 rounded-full bg-primary-500"
                />
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-primary-500"
                />
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="w-1.5 h-1.5 rounded-full bg-primary-500"
                />
              </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;