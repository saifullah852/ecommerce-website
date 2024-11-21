import React from "react";
import { FaHamburger } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-grey--700">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/*logo burger*/}
                <FaHamburger className="w-6 h-6 text-yellow-500 hover:text-cyan-400" />
                {/*search icon*/}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-20 outline-black-500 text-xs  w-[350px] pr-10 hidden lg:block md:block "
                    placeholder="Search for burgers from our menu."
                  />

                  <FaSearch className="w-5 h-5 text-gray-900 absolute right-3 top-1/2 trnsform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaBolt className=" w-5 h-5 text-yellow-500 lg:block md:block " />
                <p className="text-gray-100 text-lg ">
                  Order now and get it with in
                  <span className="text-yellow-500"> 15 minutes!</span>
                </p>

                <FaCartShopping className="w-8 h-8 rounded-full ring-2 p-1 relative text-cyan-400 hover:ring-amber-400 text-yellow-500 hover:text-amber-400" />

                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-amber-400 "
                  src="https://img.freepik.com/premium-photo/minimalist-subtle-pattern-background-with-copy-space-custom-text-design_762139-17662.jpg"
                  alt="user avator"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
