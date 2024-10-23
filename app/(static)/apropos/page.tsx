/* eslint-disable @next/next/no-img-element */
import React from "react";
import livreur from "@/assets/livreur2.jpeg";
import livreur1 from "@/assets/livreur1.jpeg";
import testimonial from "@/assets/testimonial.png";
import Newsletter from "@/components/sections/Newsletter";

export default function About() {
  const testimonials = [
    {
      name: "Latyr SENE",
      role: "Front End Developer",
      image: testimonial,
    },
    {
      name: "Makhan Diakho",
      role: "Back End Developer",
      image: testimonial,
    },
    {
      name: "John Doe",
      role: "Designer",
      image: testimonial,
    },
  ];
  return (
    <div>
      <div className="w-full h-[80vh] bg-green-800 flex flex-col justify-center items-center lg:p-60 p-20 text-center gap-8 text-white">
        <h1 className="lg:text-7xl text-4xl">A propos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit
          omnis aliquam atque repellat. Culpa, distinctio provident vel fuga
          inventore eius aliquid, sequi libero sint labore earum accusantium
          odit tenetur!
        </p>
      </div>
      <div className="lg:my-20 lg:grid lg:grid-cols-2  gap-4 p-10">
        <div>
          <h2 className="text-5xl ">Notre Mission</h2>
          <div className="border-b-8 mb-5 border-green-800 w-20"></div>
          <p className="md:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            accusantium tempore veniam vel nemo dicta, soluta voluptatum
            quibusdam tempora, minus consequuntur quod dolorem deserunt
            molestiae dignissimos nam! Aliquid, voluptates tempore. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quasi perferendis ea
            vel rem recusandae! Amet iure qui molestiae veritatis illum quisquam
            repudiandae architecto, rem, iste rerum inventore fugiat doloribus
            deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti adipisci sed pariatur provident, doloribus reprehenderit
            dolorum, aut itaque accusamus maiores dignissimos tempore voluptates
            eaque delectus at temporibus totam mollitia sequi. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Animi, accusantium tempore
            veniam vel nemo dicta, soluta voluptatum quibusdam tempora, minus
            consequuntur quod dolorem deserunt molestiae dignissimos nam!
            Aliquid, voluptates tempore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi perferendis ea vel rem recusandae! Amet iure
            qui molestiae veritatis illum quisquam repudiandae architecto, rem,
            iste rerum inventore fugiat doloribus deleniti! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Corrupti adipisci sed
            pariatur provident, doloribus reprehenderit dolorum, aut itaque
            accusamus maiores dignissimos tempore voluptates eaque delectus at
            temporibus totam mollitia sequi.
          </p>
        </div>
        <div className="lg:hidden flex justify-center">
          <img
            src={livreur.src}
            alt="livreur2.jpeg"
            className="rounded-full  lg:w-[500px] lg:h-[500px] w-[350px] h-[350px] object-cover"
          />
        </div>
        <div className="relative hidden lg:flex ">
          <img
            src={livreur.src}
            alt="livreur2.jpeg"
            className="rounded-full lg:w-[500px] lg:h-[500px] w-[350px] h-[350px] object-cover absolute top-10"
          />

          <div className="lg:w-80 lg:h-80 w-44 lg-44 bg-gradient-to-r  from-green-600 to-green-900 to-black rounded-full absolute top-0 right-0"></div>
        </div>
      </div>
      <div className="lg:mb-20 p-10">
        <h2 className="text-5xl ">Rencontrez notre équipe</h2>
        <div className="border-b-8 mb-16 border-green-800 w-20"></div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {testimonials.map((data, index) => (
            <div
              key={index}
              className="flex justify-center flex-col items-center"
            >
              <img
                src={data.image.src}
                alt="testimonial"
                className="rounded-full w-48 h-48"
              />
              <h3 className="font-bold">{data.name}</h3>
              <h4 className="text-green-800">{data.role}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:my-20 grid lg:grid-cols-2 gap-4 p-10">
       
        <div className="relative hidden lg:flex ">
          <img
            src={livreur1.src}
            alt="livreur1.jpeg"
            className="rounded-full w-[500px] h-[500px] object-cover absolute top-10 left-32"
          />

          <div className="w-80 h-80 bg-gradient-to-r  from-yellow-600 to-yellow-900 to-black rounded-full absolute top-0 left-0"></div>
        </div>
        <div>
          <h2 className="text-5xl ">Notre Vision</h2>
          <div className="border-b-8 mb-5 border-green-800 w-20"></div>
          <p className="md:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            accusantium tempore veniam vel nemo dicta, soluta voluptatum
            quibusdam tempora, minus consequuntur quod dolorem deserunt
            molestiae dignissimos nam! Aliquid, voluptates tempore. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quasi perferendis ea
            vel rem recusandae! Amet iure qui molestiae veritatis illum quisquam
            repudiandae architecto, rem, iste rerum inventore fugiat doloribus
            deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti adipisci sed pariatur provident, doloribus reprehenderit
            dolorum, aut itaque accusamus maiores dignissimos tempore voluptates
            eaque delectus at temporibus totam mollitia sequi. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Animi, accusantium tempore
            veniam vel nemo dicta, soluta voluptatum quibusdam tempora, minus
            consequuntur quod dolorem deserunt molestiae dignissimos nam!
            Aliquid, voluptates tempore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi perferendis ea vel rem recusandae! Amet iure
            qui molestiae veritatis illum quisquam repudiandae architecto, rem,
            iste rerum inventore fugiat doloribus deleniti! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Corrupti adipisci sed
            pariatur provident, doloribus reprehenderit dolorum, aut itaque
            accusamus maiores dignissimos tempore voluptates eaque delectus at
            temporibus totam mollitia sequi.
          </p>
        </div>
        <div className="lg:hidden flex justify-center">
          <img
            src={livreur.src}
            alt="livreur2.jpeg"
            className="rounded-full  lg:w-[500px] lg:h-[500px] w-[350px] h-[350px] object-cover"
          />
        </div>
      </div>
      <div className="w-full h-[50vh] bg-red-800 flex flex-col justify-center items-center mt-18 lg:p-60 p-20 text-center gap-4 text-white">
        <h1 className="lg:text-7xl text-4xl">Contactez-nous</h1>
        <p>contact@gp221@gmail.com</p>
        <p>+221 76 123 46 78</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit
          omnis aliquam atque repellat. Culpa, distinctio provident vel fuga
          inventore eius aliquid, sequi libero sint labore earum accusantium
          odit tenetur!
        </p>
      </div>
      <Newsletter />
    </div>
  );
}
