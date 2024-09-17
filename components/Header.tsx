"use client";
import { MenuIcon, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-transparent bg-white/10 backdrop-blur-lg shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-8 w-8 text-purple-600" />
          </motion.div>
          <span className="text-lg font-semibold">LogoCraft</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <Link href="/createlogo">
              <Button className="bg-purple-600 text-white flex flex-row items-center gap-2 text-[14px] hover:bg-purple-700 ml-2">
                <Download size={20} />
                Download
              </Button>
            </Link>
          </div>
          <button className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
