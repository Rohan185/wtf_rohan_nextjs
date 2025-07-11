"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-6 text-center text-gray-400 text-sm bg-[#171733]/80"
    >
      &copy; 2025 Builder's Rack. All rights reserved. Powered by FLIVE Consulting
      Pvt Ltd.
    </motion.footer>
  );
};

export default Footer;
