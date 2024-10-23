import React from "react";

export default function Newsletter() {
  return (
    <div className="bg-green-800 text-white flex sm:flex-col justify-between items-center py-10 px-20 sm:px-5 m-16 sm:m-10 rounded-xl shadow-lg">
      <div className="w-1/2 sm:w-full ">
        <h2 className="sm:text-center">Newsletter</h2>
        <p className="sm:text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus qui
          soluta sed, facere, animi, quisquam tempore ut ea quibusdam voluptates
          architecto nesciunt maxime iure officia laborum?
        </p>
      </div>
      <div className="relative rounded-full bg-white shadow-xl w-1/3 h-16 sm:w-full sm:mt-10">
        <input
          className="input bg-transparent text-black outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
          placeholder="Entrer votre email"
          name="email"
          type="email"
        />
        <div className="absolute right-2 top-[0.4em]">
          <button className="w-12 h-12 rounded-full bg-green-800 group shadow-xl flex items-center justify-center relative overflow-hidden">
            <svg
              className="relative z-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="50"
              width="50"
            >
              <path
                fill-opacity="0.01"
                fill="white"
                d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
              ></path>
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3.76603"
                stroke="white"
                d="M42.8496 18.7067L21.0628 44.6712"
              ></path>
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="3.76603"
                stroke="white"
                d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
              ></path>
            </svg>
            <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
            <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
