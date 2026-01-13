"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";

export default function Footer() {

  const pageLinks = [
    { href: "https://shopsical.com/", label: "Home" },
    { href: "https://shopsical.com/about", label: "About" },
    { href: "https://shopsical.com/support", label: "Support" },
    { href: "https://shopsical.com/legal", label: "Legal" },
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
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
             <Link href="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/icon.png"
                    alt="Shopsical Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-28 h-7">
                   <Image
                    src="/logo.png"
                    alt="Shopsical"
                    fill
                    className="object-contain"
                  />
                </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Shop Socially, Buy Securely. <br/>
              The best way to shop online with friends.
            </p>
            
            {/* Social Links */}
             <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground">Explore</h4>
            <nav className="flex flex-col gap-3">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* App Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground">Get the App</h4>
             <div className="flex flex-col gap-3">
              <a
                href="https://apps.apple.com/us/app/shopsical/id6751852637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:-translate-y-1"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="object-contain"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.t_dax.shopsicalapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:-translate-y-1"
              >
                <Image
                  src="/play-store-badge.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="object-contain" // Fixed width for alignment
                  style={{ width: 140 }} 
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Shopsical. All rights reserved.
          </p>
           <p className="text-slate-400 text-xs flex items-center gap-1">
             Made with <span className="text-red-500 animate-pulse">❤️</span> for social shoppers
          </p>
        </div>
      </div>
    </footer>
  );
}
