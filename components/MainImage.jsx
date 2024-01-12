// components/MainImage.js

import Image from 'next/image';

function MainImage() {
  return (
    <div className='relative h-[530px] sm:h-[570px] md:h-[580px] lg:h-[550px] xl:h-[630px] 2xl:h-[1000px]'>
      <div className='absolute inset-0'>
        <Image
          src="/image/main1.png"
          quality={75}
          layout="fill"
          objectFit='cover'
          alt=""
          className='bg-gradient-to-r from-gray-100 to-gray-400'
        />
      </div>
    </div>
  );
}

export default MainImage;
