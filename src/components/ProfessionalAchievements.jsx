import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates, achievements } from "../constants";
import Achievements from "./Achievements";

const CertificateCard = ({ index, title, issuer, date, credential_id, credential_url, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px] cursor-pointer overflow-hidden rounded-2xl" 
           onClick={() => window.open(credential_url, "_blank")}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(credential_url, "_blank");
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-secondary text-[14px]">{issuer}</p>
          <p className="text-secondary text-[14px]">{date}</p>
        </div>
        <p className="mt-2 text-secondary text-[14px]">Credential ID: {credential_id}</p>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <div className="mt-12">
      <h3 className={`${styles.sectionSubHeadText} text-center`}>
        Certificates
      </h3>
      
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
        >
          These certifications showcase my expertise and commitment to continuous learning in various technologies and platforms.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7 justify-center">
        {certificates.map((certificate, index) => (
          <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

const ProfessionalAchievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Journey of Excellence
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Professional Achievements.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
        >
          A showcase of my professional journey, highlighting both formal certifications and notable achievements
          that demonstrate my expertise, continuous learning, and contributions to the tech community.
        </motion.p>
      </div>

      <Certificates />
      <Achievements />
    </>
  );
};

export default SectionWrapper(ProfessionalAchievements, "achievements"); 