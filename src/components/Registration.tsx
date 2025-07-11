"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Registration = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
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
          How to Register
        </span>
      </motion.div>
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] bg-clip-text text-transparent"
      >
        How to Register
      </motion.h2>
      <div className="w-full flex justify-center">
        <motion.ol
          variants={sectionVariants}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 space-y-4 text-lg max-w-2xl mx-auto list-decimal pl-6"
        >
          <motion.li variants={itemVariants}>Click “Register” on Unstop (individual)</motion.li>
          <motion.li variants={itemVariants}>Create or join a team (max 4 members)</motion.li>
          <motion.li variants={itemVariants}>Join Discord link in confirmation email</motion.li>
          <motion.li variants={itemVariants}>Attend kickoff for briefs & APIs</motion.li>
          <motion.li variants={itemVariants}>Build, submit, and demo your project</motion.li>
        </motion.ol>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-[#ffb300] to-[#ff6e00] mt-12" />
    </motion.section>
  );
};

export default Registration;
