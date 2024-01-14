// components/ChannelList.js
import React from 'react';


const channels = [
  { id: 1, name: 'Aztv' },
  { id: 2, name: 'Mədəniyyət' },
  { id: 3, name: 'İdman Azərbaycan' },
  { id: 4, name: 'İctimai' },
  { id: 5, name: 'Space' },
  { id: 6, name: 'Xəzər' },
  { id: 7, name: 'Azad Azərbaycan' },
  { id: 8, name: 'Arb Tv' },
  { id: 9, name: 'Dünya Tv' },
  { id: 10, name: 'CBC Azərbaycan' },
  { id: 11, name: 'Star Tv' },
  { id: 12, name: 'ATV Türkiyə' },
  { id: 13, name: 'Shoü Tv' },
  { id: 14, name: 'TV 8' },
  { id: 15, name: 'Trt 1' },
  { id: 16, name: 'A Sport' },
  { id: 17, name: 'Авто 24' },
  { id: 18, name: 'Моя планета' },
  { id: 19, name: 'Real TV HD	' },
  { id: 20, name: 'Россия К	' },
  { id: 21, name: 'TRT Cocuk	' },
  { id: 22, name: 'Kral Pop	' },
  { id: 23, name: 'Power Türk HD	' },
  { id: 24, name: 'TMB Tv	' },
  { id: 25, name: 'Ani Tv	' },
  { id: 26, name: '5  Канал 	' },
  { id: 27, name: 'Киносвидание	' },
  { id: 28, name: 'Кинохит	' },
  { id: 29, name: '' },
  { id: 30, name: '' },
  { id: 31, name: '' },


  // Diğer kanalları buraya ekleyebilirsiniz
];

const ChannelList = () => {
  return (
    <div className="container mx-auto mt-8 ">
      <h1 className="text-2xl font-bold mb-4">TV Kanal Listesi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {channels.map((channel) => (
          <div key={channel.id} className=" bg-gray-200 p-4 rounded-md text-center font-semibold">
            <div className='flex gap-3 items-center'>
                <p className='text-start'>{channel.id}.</p>
            <p className="text-center font-semibold">{channel.name}</p></div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelList;
