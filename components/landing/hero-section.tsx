"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <section className="relative ">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute right-2/4 bottom-1/4 w-[350px] h-[350px] bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Craft Your Perfect Logo
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unleash your brand's potential with our intuitive logo design tool.
            Create stunning, unique logos that capture your vision.
          </motion.p>
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/createlogo">
              <button
                className="bg-purple-600 text-white text-lg px-8 py-4 rounded-full hover:bg-purple-700 transition-colors flex items-center space-x-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>Start Designing</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* </AnimatedBackground> */}
      {/* @ts-ignore */}
      <Image
        src="/app.png"
        width="1200"
        height="100"
        className="flex mx-auto px-8 mt-20 rounded-lg lg:block shadow-2xl shadow-purple-400/50"
      />
    </motion.section>
  );
}

export default HeroSection;
