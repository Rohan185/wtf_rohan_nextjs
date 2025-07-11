"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll
  const outerRingRotate = useTransform(scrollYProgress, [0, 0.5], [0, 180]);
  const illustrationScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const illustrationOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const leftArrowX = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  const rightArrowX = useTransform(scrollYProgress, [0, 0.4], [0, 100]);
  const arrowsOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between h-full pt-8 md:pt-16">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-left lg:pr-8 mb-12 lg:mb-0"
          >
            {/* Prize Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="bg-[#3A0CA3] text-white px-6 py-2 rounded-md font-bold text-base shadow-md flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Prizes Worth ₹3,00,000+
              </div>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight text-white"
            >
              Builder&apos;s Rack: <span className="text-[#4CC9F0]">v0</span>
            </motion.h1>
            
            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl max-w-xl mb-8 text-gray-300 leading-relaxed"
            >
              Where creators, coders, and curious minds come together to build the future with AI. 
              <span className="block mt-2">48-hour online hackathon. Collaborate, experiment, and solve real-world problems.</span>
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="https://unstop.com/o/u6Pg2tA?lb=B5lCsBst"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4CC9F0] text-[#0B0C10] px-8 py-3 rounded-md font-bold text-lg shadow-md hover:bg-white transition-colors duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Register Now
              </a>
              <a
                href="#tracks"
                className="border border-[#4CC9F0] text-[#4CC9F0] px-8 py-3 rounded-md font-bold text-lg hover:bg-[#4CC9F0]/10 transition-colors duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Choose Your Track
              </a>
            </motion.div>
            
            {/* Deadline Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-3 text-gray-400"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Registration Deadline: <span className="font-semibold text-white">26 July 2025, 12:00 AM IST</span></span>
            </motion.div>
          </motion.div>
          
          {/* Right Side Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px]"
            style={{
              opacity: illustrationOpacity,
              scale: illustrationScale,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Tech-related illustration */}
              <div className="relative w-full h-full">
                {/* Main illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full max-w-lg" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Decorative tech circles - only outer ring rotates */}
                    <motion.circle 
                      cx="300" 
                      cy="200" 
                      r="150" 
                      stroke="#4CC9F0" 
                      strokeWidth="2" 
                      strokeDasharray="10 5"
                      style={{ 
                        rotate: outerRingRotate,
                        transformOrigin: 'center center'
                      }}
                    />
                    <circle cx="300" cy="200" r="100" stroke="#3A0CA3" strokeWidth="2" opacity="0.6" />
                    <circle cx="300" cy="200" r="50" stroke="#7209B7" strokeWidth="2" opacity="0.8" />
                    
                    {/* Code brackets - with scroll animation */}
                    <motion.path 
                      d="M150 150L100 200L150 250" 
                      stroke="#4CC9F0" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ x: leftArrowX, opacity: arrowsOpacity }}
                    />
                    <motion.path 
                      d="M450 150L500 200L450 250" 
                      stroke="#4CC9F0" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ x: rightArrowX, opacity: arrowsOpacity }}
                    />
                    
                    {/* Laptop outline */}
                    <rect x="200" y="170" width="200" height="120" rx="5" stroke="#7209B7" strokeWidth="3" />
                    <path d="M180 290H420V300C420 305.523 415.523 310 410 310H190C184.477 310 180 305.523 180 300V290Z" fill="#3A0CA3" />
                    
                    {/* People silhouettes */}
                    <circle cx="220" cy="130" r="20" fill="#4361EE" />
                    <rect x="210" y="150" width="20" height="30" rx="5" fill="#4361EE" />
                    
                    <circle cx="380" cy="130" r="20" fill="#7209B7" />
                    <rect x="370" y="150" width="20" height="30" rx="5" fill="#7209B7" />
                    
                    <circle cx="300" cy="100" r="20" fill="#4CC9F0" />
                    <rect x="290" y="120" width="20" height="30" rx="5" fill="#4CC9F0" />
                    
                    {/* Connection lines */}
                    <line x1="230" y1="140" x2="290" y2="110" stroke="#4CC9F0" strokeWidth="2" />
                    <line x1="370" y1="140" x2="310" y2="110" stroke="#7209B7" strokeWidth="2" />
                    <line x1="300" y1="150" x2="300" y2="170" stroke="#4CC9F0" strokeWidth="2" />
                    
                    {/* Code symbols */}
                    <text x="220" y="220" fill="#4CC9F0" fontFamily="monospace" fontSize="14">{"<code>"}</text>
                    <text x="330" y="220" fill="#7209B7" fontFamily="monospace" fontSize="14">{"</code>"}</text>
                    <text x="240" y="250" fill="#FFFFFF" fontFamily="monospace" fontSize="12">{"function hackathon() {"}</text>
                    <text x="260" y="270" fill="#FFFFFF" fontFamily="monospace" fontSize="12">{"return innovation;"}</text>
                    <text x="240" y="290" fill="#FFFFFF" fontFamily="monospace" fontSize="12">{"}"}</text>
                  </svg>
                </div>
                
                {/* Animated elements */}
                <motion.div 
                  className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-[#4CC9F0]/20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full bg-[#7209B7]/20"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-[#3A0CA3]/20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
