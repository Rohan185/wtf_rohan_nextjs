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
      className="py-12 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-6 text-[#ffb300]"
      >
        How to Register
      </motion.h2>
      <motion.ol
        variants={sectionVariants}
        className="list-decimal pl-6 space-y-2 text-lg"
      >
        <motion.li variants={itemVariants}>
          Click “Register” on Unstop (individual)
        </motion.li>
        <motion.li variants={itemVariants}>
          Create or join a team (max 4 members)
        </motion.li>
        <motion.li variants={itemVariants}>
          Join Discord link in confirmation email
        </motion.li>
        <motion.li variants={itemVariants}>
          Attend kickoff for briefs & APIs
        </motion.li>
        <motion.li variants={itemVariants}>
          Build, submit, and demo your project
        </motion.li>
      </motion.ol>
    </motion.section>
  );
};

export default Registration;
