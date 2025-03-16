import React, { useRef, useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, liveLink } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  isMobile,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-[350px] h-full'
        tiltEnable={!isMobile}
      >
        <div className='relative w-full h-[250px] overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-inner'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-contain rounded-2xl transition-transform duration-300 hover:scale-105 p-2'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
                title="View Live Demo"
              >
                <img
                  src={liveLink}
                  alt='live demo'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
            {source_code_link && source_code_link.length > 0 && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                title="View Source Code"
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Add listener for changes to screen size
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400; // Adjust scroll amount as needed
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setActiveIndex(Math.max(0, activeIndex - 1));
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setActiveIndex(Math.min(projects.length - 3, activeIndex + 1));
      }
    }
  };

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Check if we can scroll left
      setCanScrollLeft(container.scrollLeft > 0);
      
      // Check if we can scroll right
      const canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth - 10);
      setCanScrollRight(canScrollRight);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      // Initial check
      checkScrollability();
      
      return () => {
        container.removeEventListener('scroll', checkScrollability);
      };
    }
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[18px] max-w-3xl leading-[30px] text-center font-medium'
        >
          <span className="blue-text-gradient font-semibold">Transforming ideas</span> into <span className="green-text-gradient font-semibold">innovative solutions</span> with code.
        </motion.p>
      </div>

      <div className="mt-20 relative">
        {/* Scroll buttons */}
        <button 
          onClick={() => handleScroll('left')}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-tertiary p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          aria-label="Scroll left"
          disabled={!canScrollLeft}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => handleScroll('right')}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-tertiary p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          aria-label="Scroll right"
          disabled={!canScrollRight}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-10 pb-8 px-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={checkScrollability}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`} 
              index={index} 
              {...project} 
              isMobile={isMobile}
            />
          ))}
        </div>
        
        {/* Project counter */}
        <div className="flex justify-center mt-8">
          <div className="bg-tertiary px-4 py-2 rounded-full">
            <p className="text-white text-sm">
              {activeIndex + 1}-{Math.min(activeIndex + 3, projects.length)} of {projects.length} projects
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
