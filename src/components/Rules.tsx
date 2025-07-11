"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Rules = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
          Rules
        </span>
      </motion.div>
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] bg-clip-text text-transparent"
      >
        Rules
      </motion.h2>
      <div className="w-full flex justify-center">
        <motion.ul
          variants={sectionVariants}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 space-y-4 text-lg max-w-2xl mx-auto"
        >
          <motion.li variants={itemVariants}>Teams of 2–4 participants</motion.li>
          <motion.li variants={itemVariants}>
            Build a working prototype/demo during the hackathon
          </motion.li>
          <motion.li variants={itemVariants}>
            All code must be written during the event
          </motion.li>
          <motion.li variants={itemVariants}>
            Use of public APIs and libraries is allowed
          </motion.li>
          <motion.li variants={itemVariants}>
            Plagiarism or idea copying leads to disqualification
          </motion.li>
          <motion.li variants={itemVariants}>
            Submission: Public GitHub repo, 2-min demo video, project description
          </motion.li>
          <motion.li variants={itemVariants}>
            Comply with Code of Conduct & Ethical AI usage
          </motion.li>
        </motion.ul>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-[#ffb300] to-[#ff6e00] mt-12" />
      <motion.ul
        variants={sectionVariants}
        className="list-disc pl-6 space-y-2 text-lg"
      >
        <motion.li variants={itemVariants}>Teams of 2–4 participants</motion.li>
        <motion.li variants={itemVariants}>
          Build a working prototype/demo during the hackathon
        </motion.li>
        <motion.li variants={itemVariants}>
          All code must be written during the event
        </motion.li>
        <motion.li variants={itemVariants}>
          Use of public APIs and libraries is allowed
        </motion.li>
        <motion.li variants={itemVariants}>
          Plagiarism or idea copying leads to disqualification
        </motion.li>
        <motion.li variants={itemVariants}>
          Submission: Public GitHub repo, 2-min demo video, project description
        </motion.li>
        <motion.li variants={itemVariants}>
          Comply with Code of Conduct & Ethical AI usage
        </motion.li>
      </motion.ul>
    </motion.section>
  );
};

export default Rules;
