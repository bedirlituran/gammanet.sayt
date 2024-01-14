import React from "react";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaInternetExplorer } from "react-icons/fa";
import { SiSmartthings } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";
import Link from "next/link";

const Card = ({ icon, stat, orta, asagi,link }) => {
  const icons = {
    tv: <PiTelevisionSimpleBold size={70} color="red" />,
    internet: <FaInternetExplorer size={70} color="gray" />,
    iptv: <SiSmartthings size={70} color="yellow" />,
    Odeme: <MdOutlinePayments size={70} color="green"/>,
  };

  const stats = {
    tv: "Kabel Tv",
    internet: "İnternet",
    iptv: "IP TV",
    Odeme: "Ödəmə üsulları",
  };

  const ortas = {
    reqemsal: "Reqemsal TV",
    tarif: "Tariflər",
    gammatv: "GammaNet Tv Player",
    million: "Million ",
  };

  const asagilar = {
    gammaip: "GammaNet App",
    gamma: "GammaNet iptv",
    kanal: "Kanal siyahısı",
    kompaniya: "Kompaniya",
    emanat: "E-manat",
  };

  const links = {
    reqemsal: "/reqemsal",
    tarif: "/tarifler",
    gammatv: "/gammatv",
    million: "/million",
    gammaip: "/gammaip",
    gamma: "/gamma",
    kanal: "/ChannelList",
    kompaniya: "/kompaniya",
    emanat: "/emanat",
  };
  

  return (
    <div className="-mt-2 p-2 w-[350px] lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 cursor-pointer md:flex md:flex-nowrap rounded-2xl flex flex-col justify-center items-center">
      <div className="h-[350px] w-[350px] md:w-full md:flex flex justify-center items-center placeholder:first:group rounded-2xl bg-white py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 hover:bg-blue-400 hover:text-slate-100 transition-all duration-500 shadow-xl">
        <div className="flex flex-col mx-auto max-w-xs px-8 w-[260px] flex-wrap">
          <div className="flex flex-row gap-7 items-center justify-center">
            {icons[icon]} {/* Icon prop'u kullan */}
            <p className="text-base font-bold text-gray-950 group-hover:text-white duration-500 uppercase">{stats[stat]}</p>
          </div>
          <div className="mt-6 flex items-baseline justify-center gap-x-2">
            <p className="text-5xl font-normal tracking-tight text-gray-900">
              <Link href={links[orta]} className="material-symbols-outlined text-xl border-black group-hover:bg-white group-hover:text-blue-500 hover:border-b-2   group-hover:rounded-full transition-all duration-500">
                {ortas[orta]}
              </Link>
            </p>
          </div>
          <div className="flex items-baseline justify-center gap-x-2">
            <p className="text-2xl font-normal tracking-tight text-gray-900">
              <Link href={links[asagi]} className="material-symbols-outlined text-xl border-black group-hover:bg-white hover:border-b-2 group-hover:text-blue-500 group-hover:rounded-full transition-all duration-500">
                {asagilar[asagi]}
              </Link>
            </p>
          </div>
          <div className="mt-20">
          <Link href="/" className="m-automt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-turan uppercase">Ətralı</Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
