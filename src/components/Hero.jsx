import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(true);

  useEffect(() => {
    // Check if device is mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Add listener for changes to screen size
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Reduced delay for better initial experience
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setShowLoadingIndicator(false);
    }, 300); // Reduced from 800ms to 300ms
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      clearTimeout(timer);
    };
  }, []);

  // Improved text animation variants with better transitions
  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.6 to 0.4
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Container animation variants with better staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2 to 0.1
        delayChildren: 0.1, // Reduced from 0.3 to 0.1
        ease: "easeOut"
      }
    }
  };

  // Role animation variants
  const roleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + (i * 0.1), // Reduced from 0.5 to 0.2
        duration: 0.5, // Reduced from 0.7 to 0.5
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Badge and button animation variants
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4, // Reduced from 1.0 to 0.4
        duration: 0.4, // Reduced from 0.5 to 0.4
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Roles with plain white text
  const roles = [
    { text: "Programmer" },
    { text: "Developer" },
    { text: "Enthusiast" }
  ];

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Stars background */}
      <div className="absolute inset-0 z-[-1]">
        <StarsCanvas />
      </div>
      
      {/* Loading indicator */}
      {showLoadingIndicator && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-primary bg-opacity-80">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-[#915EFF] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-white text-sm">Loading your portfolio...</p>
          </div>
        </div>
      )}
      
      <div
        className={`absolute inset-0 ${isMobile ? 'top-[100px]' : 'top-[120px]'} max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.4, // Reduced from 0.5 to 0.4
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1 // Reduced from 0.2 to 0.1
            }}
            className='w-4 h-4 rounded-full bg-[#915EFF]' 
          />
          <motion.div 
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ 
              duration: 0.6, // Reduced from 0.8 to 0.6
              ease: [0.22, 1, 0.36, 1], 
              delay: 0.2 // Reduced from 0.4 to 0.2
            }}
            className='w-[2px] sm:h-70 h-40 violet-gradient' 
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col"
        >
          <motion.h1 
            className={`${styles.heroHeadText} text-white text-[28px] xs:text-[36px] sm:text-[48px] font-bold leading-tight`}
            variants={textVariants}
          >
            Hi, I'm{" "}
            <motion.span 
              className='text-[#915EFF] inline-block'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, // Reduced from 0.7 to 0.5
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3 // Reduced from 0.7 to 0.3
              }}
            >
              Chetan Shankar
            </motion.span>
          </motion.h1>
          
          <div className="flex flex-wrap items-center mt-3 gap-x-3 gap-y-2">
            {roles.map((role, index) => (
              <motion.div
                key={role.text}
                custom={index}
                variants={roleVariants}
                initial="hidden"
                animate="visible"
                className={`${index === 0 ? 'ml-0' : ''} flex items-center`}
              >
                {index !== 0 && (
                  <span className="inline-block mx-2 text-[#915EFF] text-2xl font-light">•</span>
                )}
                <span className="text-white text-[16px] sm:text-[20px] font-medium">
                  {role.text}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Available for Hiring Badge and Resume Download Button */}
          <motion.div 
            className="flex flex-wrap items-center mt-6 gap-4"
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-full shadow-lg">
                <span className="w-2 h-2 mr-2 bg-white rounded-full animate-pulse"></span>
                Available for Hiring
              </span>
            </div>
            
            <a 
              href="/AMMANABROLU CHETAN SHANKAR RESUME.pdf" 
              download
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#915EFF] rounded-lg shadow-lg hover:bg-[#7d4edb] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Earth model with animation - centered in hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }} // Reduced from 1.5 to 1.0
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          top: isMobile ? '180px' : '150px',
          transform: isMobile ? 'scale(0.85)' : 'scale(1)'
        }}
      >
        <div className={isLoaded ? `model-fade-in ${isMobile ? 'w-[90%] h-[90%]' : 'w-[80%] h-[80%]'} max-w-[600px] max-h-[600px]` : ""}>
          <EarthCanvas />
        </div>
      </motion.div>

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6, // Reduced from 1.2 to 0.6
              duration: 0.6, // Reduced from 0.8 to 0.6
              ease: [0.22, 1, 0.36, 1]
            }}
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
