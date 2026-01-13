"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const navVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/icon.png"
                  alt="Shopsical Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 h-6 sm:w-32 sm:h-8 hidden sm:block">
                 <Image
                  src="/logo.png" // Ensure this is a dark version if your previous one was white, or use CSS filter
                  alt="Shopsical"
                  fill
                  className="object-contain" // Force black logo if source is white
                />
              </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {visibleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <a href="https://shopsical.com/download" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="rounded-full font-semibold px-6 shadow-none hover:shadow-md transition-shadow">
                Get the App
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
