"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import ThemeComp from "./ThemeComp";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <>
      <div className="flex justify-between item-center  bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 transition-colors duration-500 fixed top-0 z-50 w-full h-16">
        <nav className="flex lg:flex  lg:justify-between  h-16 lg:items-center sticky top-0 p-2 uppercase font-bold space-x-2 min-w-full">
          <div className="">
            <Image
              src="/image/logo.png"
              width="70"
              height="70"
              objectFit="cover"
              alt=""
              className="bg-transparent rounded-2xl flex lg:flex md:mr-4 "
            />
          </div>
          <div className="hidden items-center lg:flex ">
            <ul className="flex items-center lg:gap-4 lg:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-100 hover:text-blue-500 tracking-wider transition-all duration-500">
                  Ana Səhifə
                </Link>
              </li>
              <li>
                <Link
                  href="/haqqında"
                  className="text-gray-100 hover:text-blue-500 tracking-wider transition-all duration-500">
                  Haqqında
                </Link>
              </li>
              <li>
                <Link
                  href="/xidmətlər"
                  className="text-gray-100 hover:text-blue-500 tracking-wider transition-all duration-500">
                  Xidmətlər
                </Link>
              </li>
              <li>
                <Link
                  href="/layihələr"
                  className="text-gray-100 hover:text-blue-500 tracking-wider transition-all duration-500">
                  Layihələr
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex  items-center justify-end lg:justify-end gap-4 ">
            {/* //gece gunduz tema deyisimi */}
            <div className="flex items-center ml-[260px] md:hidden lg:block">
              {" "}
              <ThemeComp />
            </div>

            <BiPhoneCall
              size={25}
              color="white"
              className="hidden lg:block transition-all duration-500 cursor-pointer hover:text-blue-500"
            />

            <p className="text-gray-100 hover:text-blue-500 cursor-pointer  hidden lg:block transition-all duration-500">
              (012)610 48 88
            </p>
            <CiMail
              size={25}
              color="white"
              className="hidden md:hidden lg:block transition-all duration-500 cursor-pointer hover:text-blue-500"
            />
            <p className="text-gray-100 hover:text-blue-500 hidden lg:block transition-all duration-500 cursor-pointer md:hidden">
              gamma_net@mail.ru
            </p>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus-within:ring-white transition-all duration-500"
              onClick={toggleNavbar}>
              {isClick ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-all duration-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-all duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

        </nav>
        {isClick && (
          <div className="lg:hidden fixed top-16 left-0 right-0  w-full bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800  translate-x-0 transition-translate duration-1000">
            <div className=" px-2 pt-2 pb-3 space-y-3 sm:px-3 ">
              <ul className="space-y-6  flex flex-col items-center justify-start">
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 hover:text-blue-500 tracking-wider transition-all duration-500">
                    Ana Səhifə
                  </Link>
                </li>
                <li>
                  <Link
                    href="/haqqında"
                    className="text-gray-100 hover:text-blue-500 tracking-wider transition-all duration-500">
                    Haqqında
                  </Link>
                </li>
                <li>
                  <Link
                    href="/xidmətlər"
                    className="text-gray-100 hover:text-blue-500 tracking-wider transition-all duration-500">
                    Xidmətlər
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layihələr"
                    className="text-gray-100 hover:text-blue-500 tracking-wider transition-all duration-500">
                    Layihələr
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
