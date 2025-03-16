import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ index, title, organization, date, description, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-110"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-secondary text-[14px]">{organization}</p>
          <p className="text-secondary text-[14px]">{date}</p>
        </div>
        <p className="mt-4 text-secondary text-[14px] leading-[22px]">{description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <>
      <div className="mt-12">
        <h3 className={`${styles.sectionSubHeadText} text-center`}>
          Achievements
        </h3>
        
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
          >
            Recognition and accomplishments that highlight my contributions to the tech community and industry.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-wrap gap-7 justify-center">
          {achievements.map((achievement, index) => (
            <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements; 