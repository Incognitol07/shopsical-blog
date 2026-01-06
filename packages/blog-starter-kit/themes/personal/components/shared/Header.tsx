"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const navVariants = {
  hidden: {
    y: -100,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

export default function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Define navigation links
  const navLinks = [
    { href: "https://shopsical.com/", label: "Home" },
    { href: "https://shopsical.com/about", label: "About" },
    { href: "https://shopsical.com/support", label: "Support" },
  ];

  // Filter out the current page from navigation
  const visibleLinks = navLinks.filter((link) => pathname !== link.href);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full z-[100] fixed top-2 sm:top-4 px-2 sm:px-0"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: isMobile ? 1 : 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between shadow-2xl"
        >
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="flex gap-1 sm:gap-2 items-end cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: isMobile ? 0 : 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/icon.png"
                  alt="Shopsical Logo"
                  width={isMobile ? 32 : 40}
                  height={isMobile ? 32 : 40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </motion.div>
              <Image
                src="/logo.png"
                alt="Shopsical"
                width={isMobile ? 120 : 140}
                height={isMobile ? 32 : 40}
              />
            </motion.div>
          </Link>

          {/* Navigation Links - Only show links that are NOT the current page */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 sm:gap-4"
          >
            {visibleLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
              >
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
