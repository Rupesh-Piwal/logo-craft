import { motion } from "framer-motion";
import {
  BrushIcon,
  LineChartIcon,
  CuboidIcon,
  PencilIcon,
  Zap,
  Palette,
} from "lucide-react";
import React from "react";
import { Card } from "../ui/card";

function FeaturesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-gray-800 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose LogoCraft?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Crafting Unique, Stunning Logos Tailored to Your Brand.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Zap className="text-purple-700 h-12 w-12 text-primary" />}
            title="Intuitive Design"
            description="Our user-friendly interface makes logo creation a breeze for designers of all levels."
          />
          <FeatureCard
            icon={
              <Palette className=" text-purple-700 h-12 w-12 text-primary" />
            }
            title="Endless Customization"
            description="Fine-tune your logo with a wide range of customization options and design elements."
          />
          <FeatureCard
            icon={
              <CuboidIcon className="text-purple-700 h-12 w-12 text-primary" />
            }
            title="Style Adjustments"
            description="Easily adjust styles to match your brand or project theme. Change colors, animation and more."
          />
          <FeatureCard
            icon={
              <PencilIcon className="text-purple-700 h-12 w-12 text-primary" />
            }
            title="SVG Export"
            description="Download your logo in various formats suitable for any use case, from web to print."
          />
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturesSection;

// @ts-ignore
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
}
