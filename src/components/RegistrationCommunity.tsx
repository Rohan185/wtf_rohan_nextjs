"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const RegistrationCommunity = () => {
  return (
    <section id="registration" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]" />
      </div>
      
      {/* Animated floating shapes */}
      <motion.div 
        className="absolute top-40 right-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"
        animate={{ 
          x: [0, 70, 0],
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
              JOIN US
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Registration
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-black mx-auto rounded-full"
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tech-themed Registration Steps Section */}
          <div className="mb-16 relative">
            {/* Circuit board background pattern */}
            <div className="absolute inset-0 -z-10 opacity-10">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <div className="bg-black rounded-xl p-3 text-black mr-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-400 opacity-20"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>
                <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">How to Register</h3>
                <div className="text-xs font-mono mt-1 text-black/70">/* Follow these steps to join the hackathon */</div>
              </div>
            </motion.div>
            
            <div className="relative ml-10 mb-12">
              {/* Tech line connector */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-green-400 to-purple-400 rounded-full"></div>
              
              <div className="space-y-6">
                {[
                  { step: 1, text: "Click \"Register\" on Unstop (individual)", emoji: "🚀", color: "from-blue-500/20 to-blue-600/10" },
                  { step: 2, text: "Create or join a team (max 4 members)", emoji: "👥", color: "from-green-500/20 to-green-600/10" },
                  { step: 3, text: "Join Discord link in confirmation email", emoji: "📧", color: "from-teal-500/20 to-teal-600/10" },
                  { step: 4, text: "Attend kickoff for briefs & APIs", emoji: "🎬", color: "from-purple-500/20 to-purple-600/10" },
                  { step: 5, text: "Build, submit, and demo your project", emoji: "🛠️", color: "from-blue-500/20 to-blue-600/10" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.step}
                    className="relative pl-12"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative p-4 rounded-xl bg-gradient-to-br border border-white/10 shadow-lg overflow-hidden backdrop-blur-sm">
                      {/* Tech pattern background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
                      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>
                      
                      {/* Code-like decorative elements */}
                      <div className="absolute top-2 left-2 font-mono text-xs opacity-40">step_{item.step}</div>
                      <div className="absolute bottom-2 right-2 font-mono text-xs opacity-40">{`</>`}</div>
                      
                      <div className="flex items-center relative z-10">
                        <span className="text-xl mr-3">{item.emoji}</span>
                        <span className="font-medium text-black">{item.text}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="ml-10"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://unstop.com/o/u6Pg2tA?lb=B5lCsBst"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-3 rounded-md font-bold text-lg shadow-md hover:bg-black/80 transition-colors duration-300 flex items-center justify-center w-full md:w-auto relative overflow-hidden group"
              >
                {/* Tech button effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
                <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span className="relative z-10">Register Now</span>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Community Section - In a Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-black rounded-xl p-3 text-white mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Join Our Community</h3>
            </div>
            
            <div className="text-white mb-8">
              <p className="mb-8">Connect with fellow participants, mentors, and organizers. Get help, form teams, and stay updated on announcements!</p>
              
              <div className="flex flex-wrap gap-6 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://discord.gg/RBQKtAUzqW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
                  </svg>
                  Join Discord
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://chat.whatsapp.com/IuchSFgYndT7p8vfZAP1Zt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1da851] text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Join WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCommunity; 