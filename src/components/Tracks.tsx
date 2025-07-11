"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const trackData = [
  {
    id: "llms",
    title: "LLMs",
    description: "Build specialized apps leveraging large language models (LLMs) to solve specific problems. Use LLM capabilities through prompts and APIs.",
    icon: (
      <svg className="w-8 h-8 text-[#4CC9F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: "agents",
    title: "Agents",
    description: "Create autonomous AI assistants that perform multi-step tasks using LLMs with tool-use capabilities.",
    icon: (
      <svg className="w-8 h-8 text-[#4CC9F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: "innovation",
    title: "Open Innovation",
    description: "Any impactful AI idea outside the above tracks. (Detailed briefs released at kickoff; 1 problem statement per track.)",
    icon: (
      <svg className="w-8 h-8 text-[#4CC9F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "sponsor",
    title: "Sponsor-Specific Challenge",
    description: "To be revealed closer to the hackathon date based on partner announcements.",
    icon: (
      <svg className="w-8 h-8 text-[#4CC9F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const Tracks = () => {
  const sectionRef = useRef(null);
  const [visibleTracks, setVisibleTracks] = useState<string[]>([]);
  
  // Staggered appearance of tracks
  useEffect(() => {
    const timer = setTimeout(() => {
      const showTracks = () => {
        trackData.forEach((track, index) => {
          setTimeout(() => {
            setVisibleTracks(prev => [...prev, track.id]);
          }, index * 200);
        });
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            showTracks();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="tracks" 
      ref={sectionRef}
      className="relative pt-32 pb-20 px-6 mt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4CC9F0]/50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-[#3A0CA3]/30 border border-[#4CC9F0]/20"
          >
            <span className="text-[#4CC9F0] text-sm font-semibold tracking-wider uppercase">Challenge Tracks</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-4 text-white text-center"
          >
            Tracks & <span className="text-[#4CC9F0]">Problem Statements</span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-[#4CC9F0] rounded-full mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 max-w-2xl text-center"
          >
            Choose from our specialized tracks to showcase your AI skills and compete for exciting prizes.
            Each track presents unique challenges to solve with cutting-edge technology.
          </motion.p>
        </div>
        
        {/* Tracks display - rack style */}
        <div className="relative">
          {/* Rack lines */}
          <div className="absolute left-0 right-0 h-full">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#4CC9F0]/10"></div>
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#4CC9F0]/10"></div>
            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#4CC9F0]/10"></div>
          </div>
          
          {/* Track cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
            {trackData.map((track, index) => (
              <div 
                key={track.id}
                className={`track-card opacity-0 ${
                  visibleTracks.includes(track.id) ? 'animate-rack-slide-in' : ''
                } ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}
                style={{ animationDelay: `${(index * 0.2) + 0.5}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-[#3A0CA3]/30 border border-[#4CC9F0]/20">
                    {track.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{track.title}</h3>
                    <p className="text-gray-300">{track.description}</p>
                  </div>
                </div>
                
                {/* Track number indicator */}
                <div className="absolute top-6 right-4 md:right-6 flex items-center justify-center w-8 h-8 rounded-full bg-[#3A0CA3]/50 border border-[#4CC9F0]/30">
                  <span className="text-[#4CC9F0] font-mono font-bold">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Action button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center mt-12"
          >
            <a
              href="#registration"
              className="bg-[#3A0CA3] text-white px-8 py-3 rounded-md font-bold text-lg shadow-md hover:bg-[#4CC9F0] transition-colors duration-300 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Register & Choose Track
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
