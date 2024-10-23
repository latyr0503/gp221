import React from "react";
import Image from "next/image";
import livreur from "@/assets/livreur1.jpeg";

// import { FaUsers } from "react-icons/fa";
// import { TbTruckDelivery } from "react-icons/tb";
// import { PiClockUserBold } from "react-icons/pi";

// const serviceCards = [
//   {
//     icon: FaUsers,
//     title: "NOS PARTENAIRES DE VOYAGE",
//   },
//   {
//     icon: TbTruckDelivery,
//     title: "NOS PARTENAIRES DE LIVRAISON",
//   },
//   {
//     icon: PiClockUserBold,
//     title: "NOS HORAIRES DE VOYAGE",
//   },
// ];

const serviceCards = [
  {
    image: livreur,
    title: "NOS PARTENAIRES DE VOYAGE",
  },
  {
    image: livreur,
    title: "NOS PARTENAIRES DE LIVRAISON",
  },
  {
    image: livreur,
    title: "NOS HORAIRES DE VOYAGE",
  },
];

export default function ServicesSection() {
  return (
    <div>
      <h2 className="text-green-800 my-10 font-bold text-xl border-b-4 border-green-800 w-[200px] flex justify-end">
        <span>Services</span>
      </h2>
      <div className="flex justify-center sm:flex-col sm:items-center sm:gap-10 gap-14 p-10">
        {/* {serviceCards.map((card, index) => (
          <div
            key={index}
            className="w-[300px] rounded-lg shadow-lg overflow-hidden border border-green-800"
          >
            <div className="p-5">
              <div className="bg-black w-16 h-16 rounded-full flex justify-center items-center">
                <card.icon className="text-white" size={48} />
              </div>
            </div>
            <div className="bg-green-800 flex items-center justify-center rounded-t-2xl h-12 mt-20">
              <Image
                src={livreur}
                alt="Delivery Man"
                className="object-cover mb-20"
                width={100}
                height={100}
              />
            </div>
            <div className="bg-green-800 text-white text-center py-4">
              <p className="font-semibold">{card.title}</p>
            </div>
          </div>
        ))} */}

        {serviceCards.map((card, index) => (
          <div
            key={index}
            className="relative w-full h-80 rounded-lg overflow-hidden"
          >
            <Image
              src={card.image}
              alt={card.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute bottom-4 left-0 w-full text-center">
              <h3 className="text-white text-lg font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
