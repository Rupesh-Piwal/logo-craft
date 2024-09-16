import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function CreativitySection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {[
            {
              step: 1,
              title: "Choose Your Style",
              description:
                "Browse through our extensive library of design templates and elements.",
            },
            {
              step: 2,
              title: "Customize Your Design",
              description:
                "Use our intuitive tools to personalize colors, fonts, and layouts.",
            },
            {
              step: 3,
              title: "Finalize and Download",
              description:
                "Perfect your design and export your new logo in multiple formats.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreativitySection;
