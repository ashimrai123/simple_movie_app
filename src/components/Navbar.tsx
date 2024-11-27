"use client";
import React, { useState } from "react";
import Container from "./Container";
import { IoMenu } from "react-icons/io5";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [currentTheme, setCurrentTheme] = useState(theme);

  return (
    <div className="sticky z-30  w-full ">
      <Container className={` mx-auto `}>
        <div className=" flex justify-between items-center py-3  px-5 my-2 rounded-xl ">
          <div className="flex items-center gap-5">
            {/* <Button
              variant="default"
              size="icon"
              onClick={toggleTheme}
              className="relative bg-transparent rounded-full "
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white size-8" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white size-8 " />
            </Button> */}
            <h1 className="text-secondary  text-2xl font-semibold">Watch</h1>
          </div>

          <div className="hidden md:flex items-center border dark:bg-background rounded-full p-2  w-full max-w-sm">
            <input
              type="text "
              placeholder="Search Movies..."
              className="flex-1 pl-2 text-secondary text-sm md:text-base outline-none caret-secondary bg-transparent"
            />
            <CiSearch className="text-xl text-secondary" />
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
