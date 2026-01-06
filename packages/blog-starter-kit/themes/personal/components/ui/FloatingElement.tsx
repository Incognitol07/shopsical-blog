"use client";

import React from "react";
import { motion } from "framer-motion";

export const FloatingElement = ({
  children,
  delay = 0,
  amplitude = 20,
  duration = 4,
}: {
  children: React.ReactNode;
  delay?: number;
  amplitude?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
