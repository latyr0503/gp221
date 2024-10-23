import React from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
export default function InfoSection() {
  return (
    <div>
      <h2 className="text-center mt-10">
        Qu&apos;est-ce qui rend GP221 si intéressant?
      </h2>
      <div className="flex items-center sm:flex-col justify-center gap-16 sm:gap-8 p-10 text-center">
        <div className="bg-green-50 flex justify-center items-center flex-col p-10 text-center hover:bg-green-800 hover:text-white  rounded-2xl shadow-lg ">
          <MdCurrencyExchange className="text-green-800 bg-green-50 shadow-xl rounded-full p-5 w-20 h-20 flex justify-center items-center" />

          <h3 className="py-5">Meilleur prix</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, quis? Quia cupiditate dolorum commodi blanditiis
            laboriosam nisi eligendi et eum architecto quo repellat vero
            recusandae, itaque voluptas maiores laborum qui.
          </p>
        </div>
        <div className="bg-green-50 flex justify-center items-center flex-col p-10 lg:mt-36 text-center hover:bg-green-800 hover:text-white rounded-2xl shadow-lg ">
          <FaHandHoldingHeart className="text-green-800 bg-green-50 shadow-xl rounded-full p-5 w-20 h-20 flex justify-center items-center" />
          <h3 className="py-5">Sécurité et Confiance</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, quis? Quia cupiditate dolorum commodi blanditiis
            laboriosam nisi eligendi et eum architecto quo repellat vero
            recusandae, itaque voluptas maiores laborum .
          </p>
        </div>
        <div className="bg-green-50 flex justify-center items-center flex-col p-10 text-center hover:bg-green-800 hover:text-white rounded-2xl shadow-lg ">
          <FaClockRotateLeft className="text-green-800 bg-green-50 shadow-xl rounded-full p-5 w-20 h-20 flex justify-center items-center" />

          <h3 className="py-5">Disponibilité</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, quis? Quia cupiditate dolorum commodi blanditiis
            laboriosam nisi eligendi et eum architecto quo repellat vero
            recusandae, itaque voluptas maiores laborum qui.
          </p>
        </div>
      </div>
    </div>
  );
}
