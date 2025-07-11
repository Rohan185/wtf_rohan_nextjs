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
          Judging Criteria
        </span>
      </motion.div>
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] bg-clip-text text-transparent"
      >
        Judging Criteria
      </motion.h2>
      <div className="w-full flex justify-center">
        <motion.div
          variants={sectionVariants}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 w-full max-w-3xl mx-auto overflow-hidden"
        >
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
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full h-1 bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] mt-12"
      />
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
