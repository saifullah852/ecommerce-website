import React from "react";

export default function carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-grey-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 Gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black-to-grey-700-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://www.shutterstock.com/image-vector/delicious-homemade-burger-chili-bbq-600nw-1804330342.jpg"
                  alt="burger 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  {""}Classic Bites{" "}
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black-to-grey-700">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 "
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLAn-uYVI6S-VR4rdwEcJD1a9-qDOwM0G2A&s"
                  alt="burger 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  {""}Gourmet Grills{" "}
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lm:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://t3.ftcdn.net/jpg/07/54/87/14/360_F_754871455_yghReaX8brn30yPumlVgGVC5FFWcRD3q.jpg"
                    alt="burger 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    {""}
                    Spicy Masala{""}
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTc45rOqHbx4NPUGbHlEq-a1dB39yrLw8kOg&s"
                    alt="burger 4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    {""}
                    Veggie{""}
                  </h3>
                </a>
              </div>
            </div>
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="https://png.pngtree.com/png-vector/20240818/ourmid/pngtree-3d-delicious-cheese-burger-on-transparent-background-png-image_13533664.png"
                alt="burger 5"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                {""}
                Cheesy delight{""}
              </h3>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
