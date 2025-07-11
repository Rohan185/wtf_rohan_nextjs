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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Community = () => {
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
          Community
        </span>
      </motion.div>
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] bg-clip-text text-transparent"
      >
        Join Our Community
      </motion.h2>
      <div className="w-full flex justify-center">
        <motion.div
          variants={sectionVariants}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto"
        >
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/your-discord-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-7 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Join Discord
          </motion.a>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://chat.whatsapp.com/your-whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1da851] text-white px-7 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Join WhatsApp
          </motion.a>
        </motion.div>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-[#ffb300] to-[#ff6e00] mt-12" />
    </motion.section>
  );
};

export default Community;
