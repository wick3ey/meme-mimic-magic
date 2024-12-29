import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedWidget = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const animals = [
    "🐱", "🐶", "🐼", "🦊", "🐨", "🐰"
  ];

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <motion.div
      className="fixed bottom-24 right-4 sm:right-8 z-50 cursor-pointer"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-gradient-to-r from-[#F97316] to-[#D946EF] p-1 rounded-2xl shadow-lg border-4 border-black"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="bg-[#FEF7CD] px-4 py-3 rounded-xl">
          <motion.h3 
            className="text-black font-bold text-lg sm:text-xl mb-2"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              color: isHovered ? '#F97316' : '#000000'
            }}
          >
            Bring back cute animal meta!!
          </motion.h3>
          <div className="flex gap-2 justify-center">
            {animals.map((animal, index) => (
              <motion.span
                key={index}
                className="text-2xl sm:text-3xl"
                animate={{ 
                  y: isHovered ? [-5, 0, -5] : 0,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >
                {animal}
              </motion.span>
            ))}
          </div>
          {clickCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-[#F97316] font-bold"
            >
              {`${clickCount} supporters for animal meta! 🚀`}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};