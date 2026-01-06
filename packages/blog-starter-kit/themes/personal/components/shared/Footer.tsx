"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Apple, PlayCircle, Instagram, Youtube, Twitter } from "lucide-react";

const fadeInUpVariants = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { href: "https://shopsical.com/", label: "Home" },
    { href: "https://shopsical.com/about", label: "About" },
    { href: "https://shopsical.com/support", label: "Support" },
    { href: "https://shopsical.com/legal", label: "Legal" },
    { href: "https://shopsical.com/delete", label: "Delete Account" },
  ];

  const socialLinks = [
    {
      href: "https://instagram.com/shopsical",
      label: "Instagram",
      icon: Instagram,
    },
    { href: "https://youtube.com/shopsical", label: "YouTube", icon: Youtube },
  ];

  return (
    <footer className="relative w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Main Footer Content */}
        <div className="bg-black/10 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8">
          {/* Top Section: Logo + Tagline + Social Links */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            {/* Logo + Tagline */}
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Link href="/" className="flex gap-2 items-end">
                <Image
                  src="/icon.png"
                  alt="Shopsical Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <Image
                  src="/logo.png"
                  alt="Shopsical"
                  width={120}
                  height={32}
                />
              </Link>
              <p className="text-white/60 text-sm text-center lg:text-left">
                Shop Socially, Buy Securely
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Middle Section: Page Links + App Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6">
            {/* Page Navigation */}
            <nav className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              {pageLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* App Download Links (store badges) */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://apps.apple.com/us/app/shopsical/id6751852637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  width={140}
                  height={40}
                  className="object-contain"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.t_dax.shopsicalapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/play-store-badge.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-white/40 text-xs sm:text-sm text-center">
              © {currentYear} Shopsical. All rights reserved. Made with ❤️ for
              social shoppers everywhere.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
