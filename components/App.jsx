import React from 'react'

const App = () => {
 
  const slides = [
    { url: 'https://media.istockphoto.com/id/1392123667/photo/back-view-of-a-family-watching-tv-at-home.jpg?s=1024x1024&w=is&k=20&c=Wxd65-7am7pYfBz89jMzBuUMO502jTCb-8TMuDvOuis=' },
    { url: 'https://media.istockphoto.com/id/1320021417/photo/parents-and-their-two-children-watching-tv-together-at-home.webp?b=1&s=170667a&w=0&k=20&c=F0Jl1Z0DJyr0tAWFP1oRR3wEgxUdL4sLWyUUPr6P9Ng=' },
    { url: 'https://media.istockphoto.com/id/507832501/photo/family-watching-television-in-living-room.jpg?s=1024x1024&w=is&k=20&c=deRiw5hg9z6IRTONTeueuESf9LD-vNv1g3_-ZIGEWVs=' },
    { url: 'https://media.istockphoto.com/id/1335022171/photo/cheerful-family-sitting-on-couch-and-watching-television.jpg?s=1024x1024&w=is&k=20&c=7gpNitbhjZXHzW8xYSJTChgX2junqEML1trhhMo7Zao=' },
    { url: 'https://media.istockphoto.com/id/1460848181/photo/black-couple-watches-professional-soccer-match-on-tv-sitting-on-a-couch-at-home-in-the.jpg?s=1024x1024&w=is&k=20&c=ZoWh6of2IIh2615Ogt8ur9V6VGC8GYzhXcBQTFAwu20=' },
    
  ]
  
  return (
    <div className='max-w-[1400px] h-[450px] lg:h-[635px]  w-full m-auto   relative'>
      <div style={{backgroundImage:`url(${slides[0].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover  duration-500'></div>
      
    </div>
  )
}

export default App
