import React from "react";
import { FaUsers } from "react-icons/fa";

export default function RealisationSection() {
  const serviceCards = [
    {
      icon: FaUsers,
      poste: "Lorem ipsum dolor sit.",
      title: "Clients",
      text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, at sint! Natus ipsa recusandae ratione eum corporis reprehenderit quas culpa consequuntur. Voluptatem, aut possimus. Quisquam ipsum quos illum ducimus animi?",
    },
    {
      icon: FaUsers,
      poste: "Lorem ipsum dolor sit.",
      title: "Voyageurs",
      text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quisquam, at sint! Natus ipsa recusandae ratione eum corporisreprehenderit quas culpa consequuntur. Voluptatem, aut possimus. Quisquam ipsum quos illum ducimus animi?",
    },
    {
      icon: FaUsers,
      poste: "Lorem ipsum dolor sit.",
      title: "Voyageurs / mois",
      text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, at sint! Natus ipsa recusandae ratione eum corporis reprehenderit quas culpa consequuntur. Voluptatem, aut possimus. Quisquam ipsum quos illum ducimus animi?",
    },
  ];
  return (
    <div>
      <h2 className="text-green-800 my-10 font-bold text-xl border-b-4 border-green-800 w-[200px] flex justify-end">
        <span>Temoignages</span>
      </h2>
      <div className="flex justify-center sm:flex-col sm:items-center  gap-10">
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className="w-[400px] bg-green-50 border-2 rounded-lg shadow-lg flex flex-col justify-center items-start p-10"
          >
            <div className="flex items-center justify-start gap-4 mb-5">
              <card.icon className="text-green-50 w-12 h-12 bg-green-800 rounded-full p-2" />
              <div>
                <h4>{card.title}</h4>
                <p className="text-sm">{card.poste}</p>
              </div>
            </div>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
