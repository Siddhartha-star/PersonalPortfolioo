import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };
  
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary py-8 relative z-0 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Time Section */}
          <div>
            <h3 className="text-white font-medium text-[16px] mb-3">Current Time</h3>
            <ul className="text-secondary text-[14px] space-y-2">
              <li className="flex items-center">
                <span className="mr-2">🕒</span>
                <span className="text-white">{formatTime(currentTime)}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📅</span>
                {formatDate(currentTime)}
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-[16px] mb-3">Quick Links</h3>
            <ul className="text-secondary text-[14px] space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors flex items-center">
                <span className="mr-2">→</span>About
              </a></li>
              <li><a href="#work" className="hover:text-white transition-colors flex items-center">
                <span className="mr-2">→</span>Projects
              </a></li>
              <li><a href="#contact" className="hover:text-white transition-colors flex items-center">
                <span className="mr-2">→</span>Contact
              </a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors flex items-center">
                <span className="mr-2">→</span>Testimonials
              </a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium text-[16px] mb-3">Contact</h3>
            <ul className="text-secondary text-[14px] space-y-2">
              <li className="flex items-center">
                <span className="text-white mr-2">✉</span>
                <a href="mailto:chetanshankar.ammanabrolu121@gmail.com" className="hover:text-white transition-colors">
                  Email: chetanshankar.ammanabrolu121@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">📍</span>
                Location: Chennai, India
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-5 mb-5">
          <a 
            href="https://github.com/CAmmanabrolu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors p-2 hover:bg-tertiary rounded-full bg-black/30"
            title="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/cammanabrolu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors p-2 hover:bg-tertiary rounded-full bg-black/30"
            title="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a 
            href="https://x.com/CAmmanabrolu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors p-2 hover:bg-tertiary rounded-full bg-black/30"
            title="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a 
            href="https://leetcode.com/u/CAmmanabrolu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors p-2 hover:bg-tertiary rounded-full bg-black/30"
            title="LeetCode"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800 w-full m-0 p-0">
        <p className="text-secondary text-[13px] text-center py-4 m-0">
          © {currentYear} Ammanabrolu Chetan Shankar. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer; 