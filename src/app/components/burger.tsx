import React from "react";
const products = [
  {
    id: 1,
    title: "Mexican Burger",
    category: "fixing",
    price: "200.00",
    imageUrl:
      "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    bgcolor: "bg-teal-500",
  },

  {
    id: 2,
    title: "Classy Burger",
    category: "delighs",
    price: "150.00",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/91/90/82/360_F_591908206_ibXQDVOpjlIjtjTXz6mYKr7LjYIHp2ZC.jpg",
    bgcolor: "bg-amber-500",
  },

  {
    id: 3,
    title: "Family Burger",
    category: "fixing",
    price: "400.00",
    imageUrl:
      "https://thumbs.dreamstime.com/b/smash-burger-lettuce-cheddar-cheese-sauce-324333240.jpg",
    bgcolor: "bg-teal-500",
  },
];

export default function Burger() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgcolor} rounded-lg shadow-lggroup max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group:hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform='rotate(-45 159.52 175)'
              fill='white'
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform='rotate(-45 0 107.48)'
              fill='white'
            />
          </svg>
          <div className='relative pt-10 px-10 items-center justify-center group-hover:scale-110 transition-transform'>
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial gradient(black, transparent 50% ",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="relative w-50 h-50"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-20">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-lg font-bold px-1 py-1 leading-10 items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
