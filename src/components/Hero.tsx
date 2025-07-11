"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#ffecd2]/80 via-[#fcb69f]/60 to-[#23235b]/80"
    >
      {/* Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 bg-gradient-to-tr from-[#0a0a23] via-[#ffb300]/40 to-[#23235b] animate-gradient-move opacity-80"
        style={{filter: 'blur(40px)'}}
      />
      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl px-8 py-10 max-w-2xl mx-auto flex flex-col items-center border border-white/20"
      >
        {/* Floating Prize Pool Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 z-20"
        >
          <span className="bg-gradient-to-r from-[#ffb300] to-[#ff6e00] text-[#23235b] px-6 py-2 rounded-full font-bold text-lg shadow-xl border-2 border-white/60 animate-bounce-slow">
            Prizes Worth ₹3,00,000+
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-xl bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] bg-clip-text text-transparent"
        >
          Builder's Rack: v0
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl max-w-2xl mb-6 font-light"
        >
          Where creators, coders, and curious minds come together to build the future with AI. 48-hour online hackathon. Collaborate, experiment, and solve real-world problems from the comfort of your home.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="https://unstop.com/o/u6Pg2tA?lb=B5lCsBst"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ffb300] text-[#171733] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-[#ffd700] transition"
        >
          Register Now
        </motion.a>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-3 text-sm text-gray-200"
        >
          Registration Deadline: <span className="font-bold">26 July 2025, 12:00 AM IST</span>
        </motion.p>
        {/* Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        >
          <span className="block w-8 h-8 rounded-full border-2 border-[#ffb300] flex items-center justify-center animate-bounce-slow shadow-lg bg-white/30">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 5v10m0 0l-4-4m4 4l4-4" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="text-xs mt-1 text-[#ffb300] tracking-wide">Scroll Down</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
