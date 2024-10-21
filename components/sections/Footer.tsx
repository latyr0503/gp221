import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="mt-5 p-10 border-t-2 border-green-800">
      <div className="flex sm:flex-col justify-between border-b-2 border-green-800 p-10 sm:p-3">
        <div className="flex justify-center items-center">
          <Image src={logo} alt="Logo" width={150} height={150} />
        </div>
        <div className="sm:justify-between flex gap-10 sm:py-5">
          <div>
            <h3 className="text-red-800">Sama GP</h3>
            <ul>
              <li>Date d&apos;arrivée</li>
              <li>Date de depart</li>
              <li>Liste des voyageurs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-800">Mon compte</h3>
            <ul>
              <li>Mon colis</li>
              <li>Listes des colis</li>
              <li>Details du compte</li>
              <li>Referer un ami</li>
            </ul>
          </div>
        </div>
        <div className="sm:justify-between flex gap-10 sm:py-5">
          <div>
            <h3 className="text-red-800">Livraison</h3>
            <ul>
              <li>Comment ça marche ?</li>
              <li>Livraison gratuite</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-800">A propos</h3>
            <ul>
              <li>Qui sommes nous ?</li>
              <li>Responsabilité sociale</li>
            </ul>
          </div>
        </div>
        <div className="sm:flex sm:flex-col sm:items-center">
          <h3 className="text-red-800">Contactez-nous</h3>
          <ul>
            <li className="flex justify-start gap-4 items-center">
              <BsWhatsapp /> +221 76 124 10 31
            </li>
            <li className="flex justify-start gap-4 items-center">
              <IoCall /> +221 33 836 95 99
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} - Réalisé par
        <Link href="#">Team Tiggof</Link>
      </div>
    </div>
  );
}
