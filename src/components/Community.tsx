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
      className="py-12 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-6 text-center text-[#ffb300]"
      >
        Join Our Community
      </motion.h2>
      <motion.div
        variants={sectionVariants}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
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
    </motion.section>
  );
};

export default Community;
