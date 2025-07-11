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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Judging = () => {
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
        Judging Criteria
      </motion.h2>
      <motion.div variants={itemVariants} className="overflow-x-auto">
        <table className="min-w-[400px] w-full text-left border border-[#ffb300]/30 rounded-lg overflow-hidden">
          <thead className="bg-[#23235b] text-[#ffb300]">
            <tr>
              <th className="py-2 px-4 font-semibold">Criteria</th>
              <th className="py-2 px-4 font-semibold">Weight</th>
            </tr>
          </thead>
          <motion.tbody
            variants={sectionVariants}
            className="bg-[#171733]/80 text-white"
          >
            <motion.tr variants={itemVariants}>
              <td className="py-2 px-4">Innovation & Impact</td>
              <td className="py-2 px-4">25%</td>
            </motion.tr>
            <motion.tr variants={itemVariants}>
              <td className="py-2 px-4">UI & UX</td>
              <td className="py-2 px-4">20%</td>
            </motion.tr>
            <motion.tr variants={itemVariants}>
              <td className="py-2 px-4">Execution & Implementation & Code</td>
              <td className="py-2 px-4">40%</td>
            </motion.tr>
            <motion.tr variants={itemVariants}>
              <td className="py-2 px-4">Pitch/Presentation</td>
              <td className="py-2 px-4">15%</td>
            </motion.tr>
          </motion.tbody>
        </table>
      </motion.div>
    </motion.section>
  );
};

export default Judging;
