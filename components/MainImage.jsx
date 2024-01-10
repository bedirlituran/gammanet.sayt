import React from 'react';
import Image from 'next/image';

function MainImage() {
  return (
    <div className="relative drop-shadow-2xl hover:drop-shadow-xl	 ">
      <div className='inset-0 bg-gradient-to-r from-gray-100 to-gray-600 h-full w-full absolute top-0 opacity-50'></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-40 flex flex-col flex-1 mt-10">
        <h1 className="sm:text-4xl lg:text-7xl font-bold text-black mb-3 tracking-wider">
          Gamma Netə xoş gəlmisiniz!!!
        </h1>
        <p className="lg:text-4xl font-bold text-black mb-4 mt-4 tracking-wider">
          Xidmətlərimizdən yararlana bilərsiniz
        </p>
      </div>

      {/* Görüntü */}
      <Image
        src="/image/main1.png"
        quality={75}
        width={1920}
        height={880}
        objectFit='cover'
        alt=""
        className='inset-0 bg-gradient-to-r from-gray-100 to-gray-400'
      />
    </div>
  );
}

export default MainImage;
