import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs
      .send(
        'service_yvnk0yd',
        'template_yjvxcgj',
        {
          from_name: form.name,
          to_name: "Chetan Shankar",
          from_email: form.email,
          to_email: "chetanshankar.ammanabrolu121@gmail.com",
          message: form.message,
        },
        'Zt_Oi-KLbJQlxVYNl'
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          
          setForm({
            name: "",
            email: "",
            message: "",
          });

          // Reset submitted state after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex flex-col gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='bg-black-100 p-8 rounded-2xl mx-auto w-full max-w-5xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex flex-col gap-4 md:w-1/3">
            <div className="flex flex-col">
              <span className="text-white font-medium mb-2">Email</span>
              <a href="mailto:chetanshankar.ammanabrolu121@gmail.com" className="text-secondary underline hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                chetanshankar.ammanabrolu121@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col">
              <span className="text-white font-medium mb-2">Phone</span>
              <a href="tel:+919010734775" className="text-secondary hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                </svg>
                +91 9010734775
              </a>
            </div>
            
            <div className="flex flex-col">
              <span className="text-white font-medium mb-2">Location</span>
              <span className="text-secondary">Chennai, India</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-white font-medium mb-2">Social</span>
              <div className="flex gap-4 mt-1">
                <a 
                  href="https://github.com/CAmmanabrolu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/chetan-shankar-ammanabrolu-a2a0a0232/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/CAmmanabrolu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6 w-full sm:min-w-[300px] md:min-w-[350px]"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="bg-[#1e3a8a] py-3 sm:py-4 px-4 sm:px-6 text-white rounded-lg outline-none w-full border border-[#2563eb] focus:border-[#60a5fa] transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="bg-[#1e3a8a] py-3 sm:py-4 px-4 sm:px-6 text-white rounded-lg outline-none w-full border border-[#2563eb] focus:border-[#60a5fa] transition-all duration-300"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="bg-[#1e3a8a] py-3 sm:py-4 px-4 sm:px-6 text-white rounded-lg outline-none w-full h-28 sm:h-36 resize-none border border-[#2563eb] focus:border-[#60a5fa] transition-all duration-300"
            />

            {error && (
              <p className="text-red-500 text-sm bg-red-100/10 p-2 rounded">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? 'bg-[#2a8eef]' : 'bg-[#4a9eff]'
              } hover:bg-[#3a8eef] py-3 px-8 rounded-lg outline-none w-full text-white font-bold shadow-md transition-all duration-300 disabled:cursor-not-allowed`}
            >
              {loading ? "Sending..." : submitted ? "Sent Successfully!" : "Submit"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact"); 