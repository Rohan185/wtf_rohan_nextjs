"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Contact = () => {
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
          Contact
        </span>
      </motion.div>
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] bg-clip-text text-transparent"
      >
        Contact
      </motion.h2>
      <div className="w-full flex justify-center">
        <motion.div
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 flex flex-col items-center text-center max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300"
        >
          <h3 className="font-semibold mb-2">Rohan Ingle</h3>
          <p>
            Email: {" "}
            <a href="mailto:rohanengle1@gmail.com" className="underline hover:text-[#ffb300]">rohanengle1@gmail.com</a>
          </p>
          <p>
            Phone: {" "}
            <a href="tel:+917387110914" className="underline hover:text-[#ffb300]">+91 7387110914</a>
          </p>
        </motion.div>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-[#ffb300] to-[#ff6e00] mt-12" />
    </motion.section>
  );
};

export default Contact;
