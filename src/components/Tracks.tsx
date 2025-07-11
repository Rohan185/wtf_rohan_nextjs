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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="py-12 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        variants={trackVariants}
        className="text-3xl font-bold mb-6 text-[#ffb300]"
      >
        Tracks & Problem Statements
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          variants={trackVariants}
          className="bg-[#23235b]/80 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">LLMs</h3>
          <p>
            Build specialized apps leveraging large language models (LLMs) to
            solve specific problems. Use LLM capabilities through prompts and
            APIs.
          </p>
        </motion.div>
        <motion.div
          variants={trackVariants}
          className="bg-[#23235b]/80 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">Agents</h3>
          <p>
            Create autonomous AI assistants that perform multi-step tasks using
            LLMs with tool-use capabilities.
          </p>
        </motion.div>
        <motion.div
          variants={trackVariants}
          className="bg-[#23235b]/80 rounded-xl p-6 shadow-lg md:col-span-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">Open Innovation</h3>
          <p>
            Any impactful AI idea outside the above tracks. (Detailed briefs
            released at kickoff; 1 problem statement per track.)
          </p>
        </motion.div>
        <motion.div
          variants={trackVariants}
          className="bg-[#23235b]/80 rounded-xl p-6 shadow-lg md:col-span-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">
            Sponsor-Specific Challenge
          </h3>
          <p>
            To be revealed closer to the hackathon date based on partner
            announcements.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Tracks;
