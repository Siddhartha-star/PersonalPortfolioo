import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img 
            src={logo} 
            alt='logo' 
            className='w-9 h-9 object-contain'
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          />
          <motion.p 
            className='text-white text-[20px] sm:text-[24px] font-bold cursor-pointer flex'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
           Ammanabrolu Chetan &nbsp;
            <span className='sm:block hidden'>Shankar</span>
          </motion.p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              className={`text-[18px] sm:text-[20px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.a 
                href={`#${nav.id}`} 
                className={`text-white ${active === nav.title ? 'font-bold' : 'font-medium'}`}
                whileHover={{ 
                  y: -2,
                  transition: { type: "spring", stiffness: 200 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {nav.title}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <motion.img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />

          <motion.div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav, index) => (
                <motion.li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  whileHover={{ x: 3 }}
                >
                  <motion.a 
                    href={`#${nav.id}`} 
                    className={`text-white ${active === nav.title ? 'font-bold' : 'font-medium'}`}
                    whileHover={{ 
                      x: 2,
                      transition: { type: "spring", stiffness: 200 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {nav.title}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
