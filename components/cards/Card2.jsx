import React from "react";
import Image from "next/image";


const Card2 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full cursor-pointer group transition-all duration-500  ">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  font-bold text-gray-950 text-3xl z-50 group-hover:top-0   transition-all duration-500">
        Internet + Tv
      </h1>
      <div>
        <Image
          src="/image/xidmet1.png"
          width={400}
          height={500}
          alt=""
          objectFit="cover"
          className="rounded-xl group-hover:scale-105  ease-in-out opacity-50 hover:opacity-100 transition duration-500"
        />
      </div>
      <button
        className="bg-sky-500 hover:bg-sky-700 hover:text-white p-3 w-36 h-16 rounded-2xl hidden  font-turan tracking-wider
text-lg  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  font-bold  z-50 group-hover:block group-hover:text-white  transition-all duration-500 shadow-2xl">
        Sifariş Et
      </button>
    </div>
  );
};

export default Card2;
