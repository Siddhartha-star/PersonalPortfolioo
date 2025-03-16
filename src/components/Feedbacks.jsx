import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl min-w-[300px] w-[350px] mx-4 flex-shrink-0 testimonial-card'
  >
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-24 mb-12">
      <motion.div variants={textVariant()} className="mb-12">
        <p className={`${styles.sectionSubText} text-center`}>What others say</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Testimonials.</h2>
      </motion.div>
      
      <div className="relative overflow-hidden py-10">
        <div className="flex overflow-hidden">
          <div className="flex testimonial-marquee">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <FeedbackCard 
                key={`testimonial-${index}`} 
                index={index} 
                {...testimonial} 
              />
            ))}
            
            {/* Duplicate set for continuous scrolling */}
            {testimonials.map((testimonial, index) => (
              <FeedbackCard 
                key={`testimonial-dup-${index}`} 
                index={index} 
                {...testimonial} 
              />
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-primary to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-primary to-transparent z-10"></div>
      </div>
      
      {/* Add CSS for improved marquee animation */}
      <style jsx>{`
        .testimonial-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-350px * ${testimonials.length} - 8px * ${testimonials.length}));
          }
        }
        
        /* Pause animation on hover */
        .testimonial-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
