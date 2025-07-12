"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

// Confetti component with proper TypeScript types
const Confetti = ({ 
  active, 
  colors, 
  count = 50 
}: { 
  active: boolean; 
  colors: string[]; 
  count?: number;
}) => {
  const generateConfetti = () => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 8 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const animDelay = Math.random() * 3;
      const animDuration = 3 + Math.random() * 4;
      
      return (
        <motion.div
          key={i}
          className="absolute z-20 rounded-sm"
          initial={{ 
            top: "-10%", 
            left: `${left}%`,
            width: size,
            height: size,
            backgroundColor: color,
            opacity: 1,
            rotate: 0
          }}
          animate={{
            top: "100%",
            opacity: [1, 1, 0],
            rotate: Math.random() > 0.5 ? 360 : -360,
            x: Math.random() * 100 - 50
          }}
          transition={{
            duration: animDuration,
            delay: animDelay,
            ease: "easeOut",
            repeat: active ? Infinity : 0,
            repeatDelay: Math.random() * 2
          }}
        />
      );
    });
  };

  return <>{active && generateConfetti()}</>;
};

const Prizes = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // State to track which card has confetti active
  const [activeConfetti, setActiveConfetti] = useState<number | null>(null);

  // Transform values based on scroll
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.1, 0.2, 0.2, 0.1]);
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [-1, 1]);

  const prizeData = [
    {
      amount: "₹1,20,000",
      title: "Winner",
      iconSrc: "/trophy.svg",
      color: "from-purple-500 to-blue-500",
      confettiColors: ["#FFD700", "#9b5de5", "#f15bb5", "#fee440"]
    },
    {
      amount: "₹75,000",
      title: "First Runner Up",
      iconSrc: "/medal-silver.svg",
      color: "from-blue-500 to-teal-500",
      confettiColors: ["#00f5d4", "#00bbf9", "#fee440", "#ffffff"]
    },
    {
      amount: "₹55,000",
      title: "Second Runner Up",
      iconSrc: "/medal-bronze.svg",
      color: "from-teal-500 to-green-500",
      confettiColors: ["#fb5607", "#ffbe0b", "#3a86ff", "#8338ec"]
    },
    {
      amount: "₹50,000",
      title: "Track Winners (5)",
      subtitle: "₹10,000 each",
      iconSrc: "/rocket.svg",
      color: "from-green-500 to-yellow-500",
      confettiColors: ["#ff9e00", "#ff0054", "#390099", "#ffbd00"]
    }
  ];

  return (
    <section id="prizes" className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]" />
      </div>
      
      {/* Background color to blend with image */}
      <div className="absolute inset-0 bg-[#3BB371] -z-5"></div>
      
      {/* Prizes.png background with enhanced fading */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] -z-4 overflow-visible"
        style={{ 
          scale: backgroundScale,
          opacity: backgroundOpacity,
          rotate: backgroundRotate
        }}
      >
        {/* Multiple layers of fading for seamless blending */}
        <div className="absolute inset-[-50%] bg-stronger-radial-fade pointer-events-none z-30"></div>
        <div className="absolute inset-[-20%] bg-radial-fade pointer-events-none z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3BB371]/70 z-10"></div>
        
        {/* The image itself with feathered edges */}
        <div className="relative w-full h-full rounded-[50%] overflow-hidden feathered-edge">
          <Image
            src="/prizes.png"
            alt="Prizes Background"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            className="mix-blend-soft-light filter blur-[2px]"
            priority
          />
        </div>
      </motion.div>
      
      {/* Animated background shapes to help with blending */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"
        animate={{ 
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated underline */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-2"
          >
            <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
              REWARDS
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Epic Prizes Await
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-black mx-auto rounded-full"
          />
        </div>

        {/* Prize cards with staggered animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {prizeData.map((prize, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setActiveConfetti(index)}
              onHoverEnd={() => setActiveConfetti(null)}
              onViewportEnter={() => {
                // Briefly show confetti when card enters viewport
                setActiveConfetti(index);
                setTimeout(() => {
                  if (activeConfetti === index) {
                    setActiveConfetti(null);
                  }
                }, 2000);
              }}
              className={`relative bg-gradient-to-br ${prize.color} rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm`}
            >
              <div className="absolute inset-0 bg-black/10" />
              
              {/* Confetti container */}
              <div className="absolute inset-0 overflow-hidden">
                <Confetti 
                  active={activeConfetti === index} 
                  colors={prize.confettiColors}
                  count={30}
                />
              </div>
              
              {/* Prize card content */}
              <div className="relative p-6 flex flex-col items-center text-white h-full">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + index * 0.1
                  }}
                  className="mb-4 w-16 h-16 flex items-center justify-center"
                >
                  <Image 
                    src={prize.iconSrc} 
                    alt={prize.title} 
                    width={56} 
                    height={56}
                  />
                </motion.div>
                
                <h3 className="text-lg font-semibold mb-2">{prize.title}</h3>
                
                <div className="text-3xl font-bold mb-2">{prize.amount}</div>
                
                {prize.subtitle && (
                  <div className="text-sm opacity-90">{prize.subtitle}</div>
                )}
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="h-1 bg-white/50 mt-4 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-black text-lg">
            All prizes and certificates will be released within 10 days after the event. 
            Prize pool and rewards are subject to sponsorship.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full font-medium shadow-lg"
          >
            More details coming soon!
          </motion.div>
        </motion.div>
      </div>

      {/* Add CSS for enhanced fading effects */}
      <style jsx global>{`
        .bg-radial-fade {
          background: radial-gradient(
            circle,
            transparent 20%,
            rgba(59, 179, 113, 0.4) 60%,
            rgba(59, 179, 113, 0.9) 80%,
            #3BB371 100%
          );
        }
        
        .bg-stronger-radial-fade {
          background: radial-gradient(
            circle,
            transparent 0%,
            rgba(59, 179, 113, 0.2) 40%,
            rgba(59, 179, 113, 0.6) 60%,
            rgba(59, 179, 113, 0.9) 80%,
            #3BB371 100%
          );
        }
        
        .feathered-edge {
          mask-image: radial-gradient(circle, black 40%, transparent 70%);
          -webkit-mask-image: radial-gradient(circle, black 40%, transparent 70%);
        }
      `}</style>
    </section>
  );
};

export default Prizes;
