"use client";
import BackgroundController from "@/components/BackgroundController";
import Header from "@/components/Header";
import IconController from "@/components/IconController";
import Sidebar from "@/components/Sidebar";
import React, { FC, useState } from "react";

const Page: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <Sidebar selectedIndex={(value: number) => setSelectedIndex(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-7 gap-12">
        <div className="md:col-span-3 bg-green-200 border h-screen shadow-sm p-5">
          {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
        </div>
        <div className="md:col-span-4 bg-red-200">Icon Preview</div>
      </div>
    </>
  );
};

export default Page;
