import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <motion.img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />

        <h3 className='text-white text-[22px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const HighlightedText = ({ children, color = "text-[#915EFF]", onClick, className = "" }) => (
  <span 
    className={`${color} font-semibold ${onClick ? 'cursor-pointer hover:underline' : ''} ${className}`}
    onClick={onClick}
  >
    {children}
  </span>
);

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const profileImages = [
    "/profile/1.jpeg",
    "/profile/2.jpeg",
    "/profile/3.jpeg"
  ];
  
  // Image carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, [profileImages.length]);
  
  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center"
      >
        <p className={`${styles.sectionSubText} text-[18px] sm:text-[20px]`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[36px] sm:text-[48px] font-bold`}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 mt-8 md:items-center">
        {/* Profile Image Carousel */}
        <motion.div 
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative w-full md:w-[300px] h-[300px] flex-shrink-0 mx-auto md:mx-0 md:self-center"
          ref={carouselRef}
        >
          <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_0_20px_rgba(123,90,255,0.7)] hover:shadow-[0_0_30px_rgba(123,90,255,0.9)] transition-all duration-500">
            {profileImages.map((image, index) => (
              <motion.div
                key={image}
                className="absolute inset-0 w-full h-full"
                initial="hidden"
                animate={index === currentImageIndex ? "show" : "hidden"}
                variants={imageVariants}
                style={{ display: index === currentImageIndex ? 'block' : 'none' }}
              >
                <img 
                  src={image} 
                  alt={`Profile ${index + 1}`} 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {profileImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-[#915EFF] w-4' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Overview Text */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="md:flex-1"
        >
          <div className="space-y-4 text-secondary text-[18px] sm:text-[20px] leading-[30px] sm:leading-[34px] text-justify">
            <p>
              Passionate <HighlightedText>full-stack developer</HighlightedText> with expertise in modern web technologies and a knack for creating immersive digital experiences.
            </p>
            
            <p>
              My technical toolkit includes <HighlightedText>MERN Stack</HighlightedText> (<HighlightedText>MongoDB</HighlightedText>, <HighlightedText>Express</HighlightedText>, <HighlightedText>React</HighlightedText>, <HighlightedText>Node.js</HighlightedText>), <HighlightedText>DevOps</HighlightedText> practices, and <HighlightedText>System Design</HighlightedText> principles for building scalable applications.
            </p>
            
            <p>
              What sets me apart is my ability to <HighlightedText color="text-green-400">rapidly adapt</HighlightedText> to new technologies and <HighlightedText color="text-green-400">collaborate seamlessly</HighlightedText> with clients to transform complex requirements into elegant solutions.
            </p>
            
            <p>
              Strong foundation in <HighlightedText color="text-orange-400">Data Structures & Algorithms</HighlightedText> and core Computer Science subjects including <HighlightedText>Operating Systems</HighlightedText>, <HighlightedText>Database Management</HighlightedText>, <HighlightedText>Computer Networks</HighlightedText>, and <HighlightedText color="text-purple-text-gradient">System Design</HighlightedText>. I apply these fundamentals to create <HighlightedText color="text-blue-text-gradient">efficient</HighlightedText> and <HighlightedText color="text-green-text-gradient">optimized</HighlightedText> solutions.
            </p>
          </div>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
      {/* Call to Action */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-16 text-center"
      >
        <p className="text-secondary text-[20px] sm:text-[24px] leading-[30px] sm:leading-[36px] max-w-3xl mx-auto pt-4 border-t border-gray-700 text-justify">
          Ready to build something extraordinary? {" "}
          <HighlightedText 
            color="text-orange-400" 
            onClick={scrollToContact}
            className="inline-flex items-center transition-all duration-300 hover:text-orange-300"
          >
            Let's join forces
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </HighlightedText> and bring your innovative ideas to life!
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
