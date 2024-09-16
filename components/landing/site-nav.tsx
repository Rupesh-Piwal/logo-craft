"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-transparent bg-white/10 backdrop-blur-lg shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-8 w-8 text-purple-600" />
            </motion.div>
            <span className="text-lg font-semibold">LogoCraft</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex">
              <Link href="/animation">
                <Button className="bg-purple-600 text-white hover:bg-purple-700 ml-2">
                  Get Started
                </Button>
              </Link>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden fixed inset-0 z-50 bg-background"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <NavLinks />
              <Link href="/animation">
                <Button className="bg-purple-600 text-white hover:bg-purple-700 mt-2">
                  Get Started
                </Button>
              </Link>
              <Button variant="ghost" className="mt-4 bg-red-500 text-white" onClick={toggleMenu}>
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SiteNav;

function NavLinks() {
  return (
    <>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 hover:text-purple-700"
          prefetch={false}
        >
          Features
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 hover:text-purple-700"
          prefetch={false}
        >
          How it works
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 hover:text-purple-700"
          prefetch={false}
        >
          Pricing
        </Link>
      </motion.div>
    </>
  );
}
