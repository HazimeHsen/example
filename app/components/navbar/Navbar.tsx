"use client";
import React from "react";
import { Navbar, Typography, Button, Collapse } from "@material-tailwind/react";
import { AiOutlineTwitter } from "react-icons/ai";
import Image from "next/legacy/image";
export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex items-center flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-300 hover:text-purple-800 font-bold text md:border-b-0 border-b w-full text-center md:w-[90px] ">
        <a
          href="/"
          className="flex items-center w-full text-center justify-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-300 hover:text-purple-800 font-bold text md:border-b-0 border-b w-full text-center md:w-[90px] ">
        <a
          href="/#ourwork"
          className="flex items-center w-full text-center justify-center">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-300 hover:text-purple-800 font-bold text md:border-b-0 border-b w-full text-center md:w-[90px] ">
        <a
          href="/#contact"
          className="flex items-center w-full text-center justify-center">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="w-full mx-auto max-w-screen-xl absolute top-0 left-0 py-4 border-0 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center text-[#999999] justify-between">
        <Typography as="a" href="/">
          Logo
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <button
          className=" h-6 w-6 text-inherit transition-all duration-300 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <Collapse open={openNav}>
        <div
          className={`mx-auto text-[#999999] ${openNav ? "" : "unclickable"}`}>
          {navList}
        </div>
      </Collapse>
    </Navbar>
  );
}
