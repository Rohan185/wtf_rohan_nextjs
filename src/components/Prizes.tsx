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
          Prize Pool
        </span>
      </motion.div>
      <motion.h2
        variants={prizeVariants}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] bg-clip-text text-transparent"
      >
        Prizes & Rewards
      </motion.h2>
      <div className="w-full grid md:grid-cols-3 gap-8">
        <motion.h2
          variants={prizeVariants}
          className="text-3xl font-bold mb-6 text-[#ffb300] text-center"
        >
          Prizes & Rewards
        </motion.h2>
      </div>
      <div className="w-full grid md:grid-cols-3 gap-8">
        <motion.div
          variants={prizeVariants}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <span className="block text-4xl font-bold text-[#ffb300] mb-2">
            ₹1,20,000
          </span>
          <span className="block font-semibold">Winner</span>
        </motion.div>
        <motion.div
          variants={prizeVariants}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <span className="block text-3xl font-bold text-[#ffb300] mb-2">
            ₹75,000
          </span>
          <span className="block font-semibold">First Runner Up</span>
        </motion.div>
        <motion.div
          variants={prizeVariants}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <span className="block text-3xl font-bold text-[#ffb300] mb-2">
            ₹55,000
          </span>
          <span className="block font-semibold">Second Runner Up</span>
        </motion.div>
        <motion.div
          variants={prizeVariants}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center md:col-span-3 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <span className="block text-2xl font-bold text-[#ffb300] mb-2">
            Track Winners (5)
          </span>
          <span className="block font-semibold">₹10,000 each (Total ₹50,000)</span>
        </motion.div>
      </div>
      <motion.p
        variants={prizeVariants}
        className="mt-6 text-center text-gray-300"
      >
        All prizes and certificates will be released within 10 days after the
        event. Prize pool and rewards are subject to sponsorship; more details
        will be revealed soon.
      </motion.p>
      {/* Section Divider */}
      <div className="w-32 h-1 bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] rounded-full mt-12 opacity-70" />
    </motion.section>
  );
};

export default Prizes;
