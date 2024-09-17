"use client";
import React, { FC, useState } from "react";
import { Image, PencilRuler, Shield } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  icon: React.ElementType; // More flexible type for icon components
}

interface SidebarProps {
  selectedIndex: (index: number) => void;
}

const Sidebar: FC<SidebarProps> = ({ selectedIndex }) => {
  const menuList: MenuItem[] = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="border rounded shadow-sm h-screen">
      <div>
        {menuList.map((menu: MenuItem, index: number) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`p-2 px-7 my-1 cursor-pointer flex items-center gap-2 border border-slate-100 text-slate-600 rounded hover:bg-purple-600 hover:text-white ${
              activeIndex === index ? "bg-purple-600 text-slate-50" : ""
            }`}
            key={menu.id} // Use menu.id as a key for uniqueness
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
