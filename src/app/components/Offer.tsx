'use client'
import React from "react";

type Offer = {
    title:string;
    discription:string;
}

const SpecialOffers: React.FC = () => {
    const offers: Offer[] = [
        {
            title:'Happy Hour',
            discription:'50% off on all drinks will be available between 5pm to 7pm '
        },

        {
            title:'Family Meal Deal',
            discription:'2 main courses order karen aur family deal coupen hasil karen '
        },
        
        {
            title:'weekly Brunch',
            discription:'Eik free complimentary drink ka lutf uthaen'
        },
    ];
    const handleOfferClick = (discription : string) => {
        alert (discription)         
    }

    return(
    <section className="py-10">
        <div className="container mx-auto text-center">
            <h2 className="textr-4xl font-bold mb-6 text-white ">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map ((offer, index) => (
                    <button key={index}
                    onClick={() => handleOfferClick(offer.discription)}
                    className="bg-white shadow-lg rounded-lg text-cenetr hover:bg-gray-300 transition duration-300 transform hover:scale-105 ">
                        <h3 className="font-semibold text-2xl text-red-700 ">{offer.title}</h3>
                         <p className="text-slate-700 mt-3">{offer.discription}</p>
                    </button>
                ))}
            </div>
        </div>
    </section>       
 )
}
export default SpecialOffers 