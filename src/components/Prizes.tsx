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

const prizeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Prizes = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="py-12 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        variants={prizeVariants}
        className="text-3xl font-bold mb-6 text-[#ffb300] text-center"
      >
        Prizes & Rewards
      </motion.h2>
      <ul className="grid md:grid-cols-3 gap-8 text-center">
        <motion.li
          variants={prizeVariants}
          className="bg-[#171733]/80 rounded-xl p-6 shadow-lg hover:bg-[#23235b]/90 hover:shadow-yellow-500/20 transition-all duration-300"
        >
          <span className="block text-4xl font-bold text-[#ffb300] mb-2">
            ₹1,20,000
          </span>
          <span className="block font-semibold">Winner</span>
        </motion.li>
        <motion.li
          variants={prizeVariants}
          className="bg-[#171733]/80 rounded-xl p-6 shadow-lg hover:bg-[#23235b]/90 hover:shadow-yellow-500/20 transition-all duration-300"
        >
          <span className="block text-3xl font-bold text-[#ffb300] mb-2">
            ₹75,000
          </span>
          <span className="block font-semibold">First Runner Up</span>
        </motion.li>
        <motion.li
          variants={prizeVariants}
          className="bg-[#171733]/80 rounded-xl p-6 shadow-lg hover:bg-[#23235b]/90 hover:shadow-yellow-500/20 transition-all duration-300"
        >
          <span className="block text-3xl font-bold text-[#ffb300] mb-2">
            ₹55,000
          </span>
          <span className="block font-semibold">Second Runner Up</span>
        </motion.li>
        <motion.li
          variants={prizeVariants}
          className="bg-[#23235b]/80 rounded-xl p-6 shadow-lg col-span-3 hover:bg-[#2d2e66]/90 hover:shadow-yellow-500/20 transition-all duration-300"
        >
          <span className="block text-2xl font-bold text-[#ffb300] mb-2">
            Track Winners (5)
          </span>
          <span className="block font-semibold">₹10,000 each (Total ₹50,000)</span>
        </motion.li>
      </ul>
      <motion.p
        variants={prizeVariants}
        className="mt-6 text-center text-gray-300"
      >
        All prizes and certificates will be released within 10 days after the
        event. Prize pool and rewards are subject to sponsorship; more details
        will be revealed soon.
      </motion.p>
    </motion.section>
  );
};

export default Prizes;
