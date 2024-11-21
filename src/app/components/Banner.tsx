import React from "react";

export default function banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkg50-hzMt9RkwflP38eZYisr2MSLvaihjA&s"
          alt="delicious burger banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-2xl font-bold mb-4">
          {" "}
          Discover our menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop Now For Exclusive Burger Discount
        </p>
        <button
          type="button"
          className="bg-indigo-900 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-500"
        >
          Exciting Deals Launch at 12PM!
        </button>
      </div>
    </div>
  );
}
