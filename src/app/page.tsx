import React from "react";
import Navbar from "../app/components/navbar";
import Carousel from "../app/components/Carousel";
import Banner from "../app/components/Banner";
import Footer from "../app/components/Footer";
import Progressor from "../app/components/Progressor";
import Offer from "../app/components/Offer";
import Productlist from "../app/components/Productlist";
import Burger from "../app/components/burger";
import Menuitems from "../app/components/Menuitems";
import Card from "../app/components/Card";
import Reservation from "../app/components/Reservation";

export default function App() {
  return (
    <div className="text-gray-100 bg-gradient-to-r from-black to-slate-700 min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <Burger />
      <Banner />
      <Productlist />
      <Menuitems />
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
