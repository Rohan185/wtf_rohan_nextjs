"use client";

import { motion } from "framer-motion";

const trackVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Tracks = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="relative py-16 px-6 max-w-5xl mx-auto flex flex-col items-center"
      >
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 z-20"
        >
          <span className="bg-gradient-to-r from-[#ffb300] to-[#ff6e00] text-[#23235b] px-6 py-2 rounded-full font-bold text-lg shadow-xl border-2 border-white/60 animate-bounce-slow">
            Choose Your Track
          </span>
        </motion.div>
        <motion.h2
          variants={trackVariants}
          className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] bg-clip-text text-transparent"
        >
          Tracks & Problem Statements
        </motion.h2>
        <div className="w-full grid md:grid-cols-2 gap-8">
          <motion.div
            variants={trackVariants}
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#ffb300]">LLMs</h3>
            <p>Build specialized apps leveraging large language models (LLMs) to
              solve specific problems. Use LLM capabilities through prompts and
              APIs.</p>
          </motion.div>
          <motion.div
            variants={trackVariants}
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#ffb300]">Agents</h3>
            <p>
              Create autonomous AI assistants that perform multi-step tasks using
              LLMs with tool-use capabilities.
            </p>
          </motion.div>
          <motion.div
            variants={trackVariants}
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 md:col-span-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#ffb300]">Open Innovation</h3>
            <p>
              Any impactful AI idea outside the above tracks. (Detailed briefs
              released at kickoff; 1 problem statement per track.)
            </p>
          </motion.div>
          <motion.div
            variants={trackVariants}
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 md:col-span-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#ffb300]">
              Sponsor-Specific Challenge
            </h3>
            <p>
              To be revealed closer to the hackathon date based on partner
              announcements.
            </p>
          </motion.div>
        </div>
        {/* Section Divider */}
        <div className="w-32 h-1 bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] rounded-full mt-12 opacity-70" />
      </motion.section>
    </>
  );
};

export default Tracks;
