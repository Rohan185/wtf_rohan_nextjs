"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Rules = () => {
  // State to track active rule tab
  const [activeRule, setActiveRule] = useState(1);
  
  // State to track if user has acknowledged rules
  const [rulesAcknowledged, setRulesAcknowledged] = useState(false);
  
  // Rules data with emojis and youth-friendly language
  const rulesData = [
    {
      id: 1,
      title: "Squad Up",
      emoji: "👥",
      description: "Form your dream team of 2-4 hackers to tackle challenges together.",
      details: [
        "Register as a full squad or join individually and we'll match you",
        "Connect with other participants through our Discord server",
        "Diversity in skills and backgrounds is encouraged!"
      ],
      color: "border-purple-500"
    },
    {
      id: 2,
      title: "Build Something Epic",
      emoji: "🚀",
      description: "Create a working prototype that solves real problems using AI.",
      details: [
        "All code must be written during the hackathon",
        "Your solution should address the track's challenge",
        "Focus on innovation and creativity"
      ],
      color: "border-blue-500"
    },
    {
      id: 3,
      title: "Tools & Resources",
      emoji: "🧰",
      description: "Use the tech stack and tools you love, with some guidelines.",
      details: [
        "Public APIs and libraries are allowed and encouraged",
        "Pre-trained models can be used (just disclose them)",
        "Open source frameworks are welcome"
      ],
      color: "border-teal-500"
    },
    {
      id: 4,
      title: "Show Off Your Work",
      emoji: "🎬",
      description: "Submit your project with style to impress the judges.",
      details: [
        "Public GitHub repo with your source code",
        "Create a 2-minute demo video showcasing your solution",
        "Write a clear project description explaining your approach"
      ],
      color: "border-green-500"
    }
  ];

  return (
    <section id="rules" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]" />
      </div>
      
      {/* Animated floating shapes */}
      <motion.div 
        className="absolute top-40 left-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"
        animate={{ 
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Section header with animated underline */}
        <div className="text-center mb-16">
      <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-2"
          >
            <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
              GUIDELINES
        </span>
      </motion.div>
          
      <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Hackathon Rules
      </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-black mx-auto rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-black"
          >
            Simple guidelines to make sure everyone has an awesome time and competes fairly.
          </motion.p>
        </div>
        
        {/* Interactive Rules Display - Timeline Style */}
        <div className="max-w-5xl mx-auto">
          {/* Rule Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {rulesData.map((rule) => (
              <button
                key={rule.id}
                onClick={() => setActiveRule(rule.id)}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                  activeRule === rule.id 
                    ? 'bg-black text-white shadow-lg scale-105' 
                    : 'bg-black/10 text-black hover:bg-black/20'
                }`}
              >
                <span className="mr-2">{rule.emoji}</span>
                <span>{rule.title}</span>
              </button>
            ))}
          </motion.div>
          
          {/* Rule Content - Timeline Style */}
          <div className="relative mb-16">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-black/20 transform -translate-x-1/2"></div>
            
            {rulesData.map((rule, index) => (
              <motion.div
                key={rule.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: activeRule === rule.id ? 1 : 0,
                  y: activeRule === rule.id ? 0 : 30,
                  display: activeRule === rule.id ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-black rounded-full flex items-center justify-center transform -translate-x-1/2 text-white font-bold">
                  {rule.id}
                </div>
                
                {/* Content box */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                  <div className={`bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 ${rule.color}`}>
                    <div className="flex items-center mb-4 gap-3">
                      <span className="text-3xl">{rule.emoji}</span>
                      <h3 className="text-2xl font-bold text-white">{rule.title}</h3>
                    </div>
                    
                    <p className="text-white/90 mb-4 text-lg">{rule.description}</p>
                    
                    <ul className="space-y-3">
                      {rule.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-white">
                          <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Rules Acknowledgement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 mb-10 max-w-3xl mx-auto"
          >
            <div className="flex items-start md:items-center flex-col md:flex-row gap-4">
              <div className="bg-black rounded-xl p-3 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <div className="text-white flex-1">
                <h4 className="text-xl font-bold mb-1">Important Note</h4>
                <p>Plagiarism or idea copying leads to disqualification. All participants must comply with the Code of Conduct & Ethical AI usage guidelines.</p>
              </div>
              
              <div className="md:flex-shrink-0">
                <button 
                  onClick={() => setRulesAcknowledged(!rulesAcknowledged)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    rulesAcknowledged 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {rulesAcknowledged ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Got it!</span>
                    </>
                  ) : (
                    <span>I understand</span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <a 
              href="#registration" 
              className={`inline-flex items-center px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 ${
                rulesAcknowledged
                  ? 'bg-black text-white hover:bg-black/80'
                  : 'bg-black/50 text-white/70 cursor-not-allowed'
              }`}
              onClick={(e) => !rulesAcknowledged && e.preventDefault()}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {rulesAcknowledged ? "Ready to Register!" : "Read All Rules First"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
