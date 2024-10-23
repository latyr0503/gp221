import React from "react";
import image from "@/assets/freepik__candid-image-photography-natural-textures-highly-r__6473.png";
import { Button } from "../ui/button";

export default function AboutSection() {
  return (
    <div className="flex sm:flex-col-reverse items-center justify-center gap-20 sm:gap-5 p-10">
      <img className="shadow rounded-lg" src={image.src} alt="image-about" />
      <div>
        <h2 className="text-green-800">A propos</h2>
        <p className="text-justify my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
          debitis? Iusto sequi voluptates labore minima, praesentium dignissimos
          amet sapiente sed, debitis excepturi distinctio animi possimus
          cupiditate ab saepe sunt fuga! Quia, debitis ea? Suscipit nulla earum
          quia temporibus sed. Veritatis ducimus asperiores dicta, praesentium
          earum sed blanditiis, vero eveniet, mollitia vel deserunt modi
          accusamus officia dignissimos ex aut alias. Maxime ipsum, molestiae
          officiis excepturi rerum vel cumque ab harum obcaecati saepe et!
          Error, non saepe. Totam qui saepe molestias architecto, fuga,
          dignissimos ratione placeat fugit autem non velit nemo facilis,
          praesentium odit quibusdam! Eligendi, excepturi dicta minus provident
          vel asperiores.
        </p>
        <Button
          className="text-green-800 border-2 border-green-800"
          variant={"outline"}
        >
          Voir plus
        </Button>
      </div>
    </div>
  );
}
