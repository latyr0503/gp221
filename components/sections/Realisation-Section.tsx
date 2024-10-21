import React from "react";
import { FaUsers } from "react-icons/fa";

export default function RealisationSection() {
  const serviceCards = [
    {
      icon: FaUsers,
      number: 30,
      title: "Clients",
    },
    {
      icon: FaUsers,
      number: 40,
      title: "Voyageurs",
    },
    {
      icon: FaUsers,
      number: 50,
      title: "Voyageurs / mois",
    },
  ];
  return (
    <div>
      <h2 className="text-green-800 my-10 font-bold text-xl border-b-4 border-green-800 w-[200px] flex justify-end">
        <span>Services</span>
      </h2>
      <div className="flex justify-center sm:flex-col sm:items-center sm:gap-10 gap-20">
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className="w-[300px] bg-green-800 rounded-lg shadow-lg flex flex-col justify-center items-center p-10"
          >
            <div className="bg-white rounded-full p-4">
              <card.icon className="text-green-800" size={48} />
            </div>
            <div className="bg-white px-16 py-2 rounded-full my-5">
              <p className="text-green-800 text-xl font-bold ">{card.number}</p>
            </div>
            <div className=" text-center text-white font-bold ">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
