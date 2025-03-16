import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education, index }) => {
  // Define different gradient colors for each institution
  const gradientColors = [
    "from-blue-500 to-purple-600", // For SRM IST
    "from-green-500 to-teal-600",  // For BIIT JR COLLEGE
    "from-orange-500 to-pink-600"  // For BHASHYAM HIGH SCHOOL
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        delay: 0.2 + (index * 0.1),
        ease: [0.22, 1, 0.36, 1]
      }}
      className="bg-tertiary p-8 rounded-2xl w-full relative education-card"
    >
      {/* Education level indicator */}
      <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-purple-500 z-10 flex items-center justify-center">
        <span className="text-xs font-bold text-white">{index + 1}</span>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-white text-[24px] font-bold">{education.degree}</h3>
          <p className="text-purple-300 text-[14px] bg-purple-900/30 px-3 py-1 rounded-full">
            {education.date}
          </p>
        </div>
        
        {/* Enhanced school name with gradient and animation */}
        <motion.div 
          className="mt-2 mb-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
        >
          <h4 
            className={`text-[18px] font-bold bg-gradient-to-r ${gradientColors[index]} bg-clip-text text-transparent 
            py-1 px-2 inline-block rounded-md`}
          >
            {education.school_name}
          </h4>
        </motion.div>
        
        <div className="mt-4">
          <ul className="list-disc ml-5 space-y-2">
            {education.points.map((point, pointIndex) => (
              <motion.li
                key={`education-point-${index}-${pointIndex}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + (index * 0.1) + (pointIndex * 0.05),
                  ease: "easeOut"
                }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Learning Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col gap-10 relative">
        {/* Vertical line connecting education cards */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 ml-0"></div>
        
        {education.map((item, index) => (
          <EducationCard 
            key={`education-${index}`} 
            education={item}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education"); 