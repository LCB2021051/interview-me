"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
      <Image
        className="cursor-pointer"
        src={"/logo.svg"}
        width={30}
        height={30}
        alt="logo"
      />
      <ul className="hidden md:flex gap-6 items-center">
        <li
          className={`hover:text-blue-600 hover:font-bold transition-all duration-300 ease-in-out cursor-pointer ${
            path == "/dashboard" && "text-blue-600 font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-blue-600 hover:font-bold transition-all duration-300 ease-in-out cursor-pointer ${
            path == "/questions" && "text-blue-600 font-bold"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-blue-600 hover:font-bold transition-all duration-300 ease-in-out cursor-pointer ${
            path == "/upgrade" && "text-blue-600 font-bold"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-blue-600 hover:font-bold transition-all duration-300 ease-in-out cursor-pointer ${
            path == "/howitworks" && "text-blue-600 font-bold"
          }`}
        >
          How it works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
