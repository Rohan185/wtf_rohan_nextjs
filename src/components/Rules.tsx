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
      variants={sectionVariants}
      className="py-12 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-6 text-[#ffb300]"
      >
        Rules
      </motion.h2>
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
