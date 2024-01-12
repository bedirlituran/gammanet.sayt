import React from 'react'

const App = () => {
 
  const slides = [
    { url: 'https://media.istockphoto.com/id/1320021417/photo/parents-and-their-two-children-watching-tv-together-at-home.webp?b=1&s=170667a&w=0&k=20&c=F0Jl1Z0DJyr0tAWFP1oRR3wEgxUdL4sLWyUUPr6P9Ng=' },
    { url: 'https://www.istockphoto.com/photo/multi-generation-family-watching-tv-at-home-back-view-gm519331452-90469857?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffamily-watching-tv&utm_medium=affiliate&utm_source=unsplash&utm_term=family+watching+tv%3A%3A%3A' },
    { url: 'https://www.istockphoto.com/photo/rear-view-of-a-family-watching-tv-on-sofa-at-home-gm1066472014-285181328?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffamily-watching-tv&utm_medium=affiliate&utm_source=unsplash&utm_term=family+watching+tv%3A%3A%3A' },
    { url: 'https://www.istockphoto.com/photo/black-couple-watches-professional-soccer-match-on-tv-sitting-on-a-couch-at-home-in-gm1460848181-494942638?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffamily-watching-tv&utm_medium=affiliate&utm_source=unsplash&utm_term=family+watching+tv%3A%3A%3A' },
    { url: 'https://www.istockphoto.com/photo/cheerful-family-sitting-on-couch-and-watching-television-gm1335022171-416921699?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffamily-watching-tv&utm_medium=affiliate&utm_source=unsplash&utm_term=family+watching+tv%3A%3A%3A' },
  ]
  
  return (
    <div className='max-w-[1400px] h-[460px] w-full m-auto py-auto  relative'>
      <div style={{backgroundImage:`url(${slides[0].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover object-cover duration-500'></div>
      
    </div>
  )
}

export default App
