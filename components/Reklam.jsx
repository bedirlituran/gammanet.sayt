import React from "react";
import Image from "next/image";
import Button from "@/components/buttons/button";
const Reklam = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mt-20  w-full p-4  ">
        <div className="md:flex basis-1/2 justify-center items-center hidden">
          <Image
            src="/image/iptv.webp"
            width="700"
            height="700"
            objectFit="cover"
            quality={75}
            alt=""
          />
        </div>
        <div className="lg:flex hidden basis-1/2 justify-center items-center flex-col space-y-8">
          <p className="font-turan text-4xl font-bold text-green-950">Sizi düşünərək hazırladıq</p>
          <h1 className="font-turan text-7xl font-bold text-green-950">IPTV<br></br><span className="font-turan text-7xl font-bold text-red-500 ">+++</span><br></br>İNTERNET</h1>
          <Button/>
        </div>
      </div>
    </>
  );
};

export default Reklam;