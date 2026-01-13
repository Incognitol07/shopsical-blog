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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
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
        scrolled || isMenuOpen ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
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
                  src="/logo.png"
                  alt="Shopsical"
                  fill
                  className="object-contain"
                />
              </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
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
              <Button size="sm" className="rounded-full font-semibold px-6 shadow-none hover:shadow-md transition-shadow text-white">
                Get the App
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
             <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 top-[60px] bg-white z-40 md:hidden flex flex-col p-6 border-t border-slate-100"
        >
          <div className="flex flex-col gap-6 mt-4">
             {visibleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 hover:text-primary transition-colors border-b border-slate-100 pb-4"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4">
                 <a href="https://shopsical.com/download" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full rounded-full font-semibold py-6 text-lg shadow-none text-white">
                    Get the App
                  </Button>
                </a>
              </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
