import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CVForm from './CVForm';
import CommercialForm from './CommercialForm';

const ChatBot = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const chatbotVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  const optionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={chatbotVariants}
            className="bg-white rounded-2xl shadow-2xl p-6 mb-4 w-[320px] absolute bottom-full right-0 mb-4"
          >
            <div className="flex justify-between items-center mb-6">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg font-bold text-[#0263A5]"
              >
                ¿Cómo podemos ayudarte?
              </motion.h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </motion.button>
            </div>
            
            {!selectedOption ? (
              <div className="space-y-4">
                <motion.button
                  variants={optionVariants}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect('cv')}
                  className="w-full bg-[#0263A5] text-white py-3 px-6 rounded-xl hover:bg-[#0263A5]/90 transition-colors font-medium"
                >
                  Cargar CV
                </motion.button>
                <motion.button
                  variants={optionVariants}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect('commercial')}
                  className="w-full bg-[#0263A5] text-white py-3 px-6 rounded-xl hover:bg-[#0263A5]/90 transition-colors font-medium"
                >
                  Contacto Comercial
                </motion.button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {selectedOption === 'cv' ? (
                  <CVForm onBack={() => setSelectedOption(null)} />
                ) : (
                  <CommercialForm onBack={() => setSelectedOption(null)} />
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0263A5] text-white p-4 rounded-full hover:bg-[#0263A5]/90 shadow-lg flex items-center justify-center relative group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
          1
        </span>
      </motion.button>
    </div>
  );
};

export default ChatBot; 