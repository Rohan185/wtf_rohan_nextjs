"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-6 text-center text-sm bg-black/20 border-t border-white/20 backdrop-blur-xl"
    >
      <span className="text-white font-semibold">
        &copy; 2025 Builder&apos;s Rack. All rights reserved. Powered by FLIVE Consulting Pvt Ltd.
      </span>
    </motion.footer>
  );
};

export default Footer;
