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
      className="py-12 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-6 text-center text-[#ffb300]"
      >
        Contact
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-8 items-center justify-center text-lg"
      >
        <div className="bg-[#23235b]/80 rounded-xl p-6 shadow-lg text-center hover:shadow-yellow-500/20 transition-shadow duration-300">
          <h3 className="font-semibold mb-2">Rohan Ingle</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:rohanengle1@gmail.com"
              className="underline hover:text-[#ffb300]"
            >
              rohanengle1@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+917387110914" className="underline hover:text-[#ffb300]">
              +91 7387110914
            </a>
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
