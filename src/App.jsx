import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Education, Footer } from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Check if it's a low-end device (based on memory and processor)
    // Use safe checks with fallbacks for browsers that don't support these APIs
    const deviceMemory = navigator.deviceMemory || 8; // Default to 8 if not available
    const hardwareConcurrency = navigator.hardwareConcurrency || 8; // Default to 8 if not available
    
    const isLowEnd = deviceMemory < 4 || hardwareConcurrency < 4;
    
    setIsLowEndDevice(isLowEnd);

    // Add listener for changes to screen size
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        {!isLowEndDevice && <Feedbacks />}
        <div className='relative z-0'>
          <Contact />
          {!isLowEndDevice && <StarsCanvas />}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
