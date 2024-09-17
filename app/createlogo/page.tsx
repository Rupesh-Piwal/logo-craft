"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <Sidebar selectedIndex={(value: number) => console.log(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-7 gap-12">
        <div className="md:col-span-3 bg-green-200">Control Panel</div>
        <div className="md:col-span-4 bg-red-200">Icon Preview</div>
      </div>
    </>
  );
};

export default Page;
