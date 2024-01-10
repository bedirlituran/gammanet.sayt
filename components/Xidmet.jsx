import Card2 from "./cards/Card2";
import React from "react";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";

const Xidmet = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-col items-center justify-center m-auto bg-gray-300 min-h-[600px] w-full shadow-2xl  ">
        <h1 className=" text-7xl font-semibold font-turan tracking-wider shadow-2xl rounded-2xl ">
          Xidmətlərimiz
        </h1>
        <p className="font-turan font-light text-4xl my-5 ">
          Sayt üzərindən sifariş
        </p>

        <div className="flex flex-col lg:flex-row mt-6 h-60 gap-0">
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      </div>
    </>
  );
};

export default Xidmet;
