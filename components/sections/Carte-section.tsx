import React from "react";

export default function CarteSection() {
  return (
    <div>
      <div className="flex justify-end">
        <h2 className="text-green-800 my-10 font-bold text-xl border-b-4 border-green-800 w-[200px]">
          <span>Carte</span>
        </h2>
      </div>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61740.22152357102!2d-17.44025097079572!3d14.725939199999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1732a63c96333%3A0x15d8ae8347bcce93!2sParc%20Zoologique%20de%20Hann!5e0!3m2!1sfr!2ssn!4v1729470078889!5m2!1sfr!2ssn"
          className="w-[80vw] rounded-xl"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
