"use client";
import React,{useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import { GoDotFill } from "react-icons/go";

const App = () => {
 
  const slides = [
    { url: 'https://media.istockphoto.com/id/1392123667/photo/back-view-of-a-family-watching-tv-at-home.jpg?s=1024x1024&w=is&k=20&c=Wxd65-7am7pYfBz89jMzBuUMO502jTCb-8TMuDvOuis=' },
    { url: 'https://media.istockphoto.com/id/1320021417/photo/parents-and-their-two-children-watching-tv-together-at-home.webp?b=1&s=170667a&w=0&k=20&c=F0Jl1Z0DJyr0tAWFP1oRR3wEgxUdL4sLWyUUPr6P9Ng=' },
    { url: 'https://media.istockphoto.com/id/507832501/photo/family-watching-television-in-living-room.jpg?s=1024x1024&w=is&k=20&c=deRiw5hg9z6IRTONTeueuESf9LD-vNv1g3_-ZIGEWVs=' },
    { url: 'https://media.istockphoto.com/id/1335022171/photo/cheerful-family-sitting-on-couch-and-watching-television.jpg?s=1024x1024&w=is&k=20&c=7gpNitbhjZXHzW8xYSJTChgX2junqEML1trhhMo7Zao=' },
    { url: 'https://media.istockphoto.com/id/1460848181/photo/black-couple-watches-professional-soccer-match-on-tv-sitting-on-a-couch-at-home-in-the.jpg?s=1024x1024&w=is&k=20&c=ZoWh6of2IIh2615Ogt8ur9V6VGC8GYzhXcBQTFAwu20=' },
    
  ]

  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = current === 0;
    const index = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(index);

  };
  const nextSlide = () => {
    const isLastSlide = current === slides.length - 1;
    const index = isLastSlide ? 0 : current + 1;
    setCurrent(index);
  };

  
  return (
    <div className='max-w-[1400px] h-[450px] lg:h-[620px]  w-full m-auto   relative'>
      <div style={{backgroundImage:`url(${slides[current].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover  duration-500 m-auto'></div>
      
      <BsChevronCompactLeft onClick={prevSlide} className='absolute top-1/2 left-0 text-5xl text-white cursor-pointer hover:text-gray-500 duration-500'/>
      <BsChevronCompactRight onClick={nextSlide}  className='absolute top-1/2 right-0 text-5xl text-white cursor-pointer hover:text-gray-500 duration-500'/>
      <div className='absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2 mb-2'>
        {slides.map((slide, index) => (
          <GoDotFill key={index} className={`text-2xl text-white cursor-pointer ${index === current ? 'text-green-900' : ''}`} onClick={() => setCurrent(index)} />
        ))}
        </div>
    </div>
  )
}

export default App