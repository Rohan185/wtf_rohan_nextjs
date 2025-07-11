"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-6 text-center text-sm bg-gradient-to-r from-[#0a0a23]/80 via-[#23235b]/80 to-[#ffb300]/10 border-t border-white/20 backdrop-blur-xl"
    >
      <span className="bg-gradient-to-r from-[#ffb300] via-[#ff6e00] to-[#23235b] bg-clip-text text-transparent font-semibold">
        &copy; 2025 Builder's Rack. All rights reserved. Powered by FLIVE Consulting Pvt Ltd.
      </span>
    </motion.footer>
  );
};

export default Footer;
