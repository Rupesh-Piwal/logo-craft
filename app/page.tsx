"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/landing/hero-section";
import SiteNav from "@/components/landing/site-nav";
import FeaturesSection from "@/components/landing/features-section";
import CreativitySection from "@/components/landing/creativity-section";
import SiteFooter from "@/components/landing/site-footer";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteNav />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CreativitySection />
      </main>

      <SiteFooter />
    </div>
  );
}
