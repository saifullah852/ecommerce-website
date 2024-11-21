import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const productImages = [
    "https://media.istockphoto.com/id/637790866/photo/100-lamb-greek-burger.jpg?s=612x612&w=0&k=20&c=cYxRAfU7OdjJCK4M7dbH4YUIk7SGqETlDvONBEOATuw=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7ceOpxJhzU2rJBmHj_GYZu5so9DxLDqCTg&s",
    "https://img.pikbest.com/photo/20240716/delicious-burger-with-many-ingredients-tasty-cheeseburger-hamburger_10671258.jpg!w700wp",
    "https://i.pinimg.com/736x/45/ea/2c/45ea2c14bcca0baa48a77f76d9f9641b.jpg",
    "https://www.tasteofhome.com/wp-content/uploads/2017/09/exps28800_UG143377D12_18_1b_RMS.jpg",
    "https://png.pngtree.com/background/20230604/original/pngtree-delicious-burger-food-picture-image_2874401.jpg",
  ];
  return (
    <div className="relative text-center p-10 ">
      <div
        className="absolute  inset-0"
        style={{
          backgroundImage: `url('https://www.shutterstock.com/image-vector/food-menu-restaurant-cafe-design-600nw-564213766.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />
      <h1 className="font-bol text-4xl mb-4 text-white z-10 relative">
        Most Requested Items
      </h1>
      <h1 className="text-3xl  text-white z-10 relative">Order Now.....!</h1>
      <section
        id="projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={productImages[index]}
                alt={`product ${index + 1}`}
                className="h-80 w-72 object-cover rounded-t-xl "
              />
              <div className="px-4 py-3 w-72 ">
                <span className="text-slate-500 mr-3 uppercase text-xs ">
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  Burger Name {index + 1}
                </p>

                <div className="flex items-center ">
                    <p className="text-lg font-semibold text-black my-3 cursor-auto">$149</p>
                    <del>
                        <br />
                        <p className="text-sm text-blue-800 cursor-auto ml-2">{""}$199</p>
                    </del>

                    <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-800 "/>
                    </div>

                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
export default ProductCardGrid;
