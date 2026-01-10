// src/pages/get-to-know-rovv/SustainabilitySection.tsx

import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import bgImage from '../../../assets/images/new-4.jpg'

import bgImage2 from '../../../assets/images/new-5.jpg'

import bgImage3 from '../../../assets/images/new-2.jpg'

import bgImage4 from '../../../assets/images/new-71.jpg'

import ridesImg from '../../../assets/images/new- (8).jpg'

import intercityImg from '../../../assets/images/new- (3).jpg'

import deliveryImg from '../../../assets/images/new- (9).jpg'

import rentalImg from '../../../assets/images/new- (6).jpg'

export default function SustainabilitySection() {

const [selectedCard, setSelectedCard] = useState<null | { title: string; desc: string; learn: string; img: string }>(null);

const cards = [

{ title: "Green Mobility", desc: "Encouraging hybrid & EV adoption in fleet programs", learn:"ROVV is committed to building a cleaner and more sustainable transport ecosystem. Through our fleet programs, we actively encourage the adoption of electric and hybrid vehicles, helping reduce emissions while lowering operating costs for drivers and partners. By investing in greener mobility solutions today, we’re creating a future where everyday transportation is both efficient and environmentally responsible.", img: ridesImg },

{ title: "Community Support", desc: "Free driver training, mental health programs, and charity drives", learn:"At ROVV, we believe mobility should uplift people, not just move them. That’s why we invest in community-focused initiatives such as free driver training, mental health support programs, and charity-driven outreach. These efforts are designed to empower drivers, improve well-being, and create a stronger, more supportive ecosystem for everyone involved in our platform.", img: deliveryImg },

{ title: "Women in Mobility", desc: "Empowering more female drivers and fleet owners", learn:"ROVV is dedicated to creating more opportunities for women in the mobility space. We actively support and encourage female drivers and fleet owners by promoting access, inclusion, and long-term growth within our ecosystem. By fostering a more balanced and diverse workforce, we’re helping reshape the future of transportation to be more inclusive and representative." ,img: intercityImg },

{ title: "Future Commitment", desc: "Planning for 95% of our fleet to run on electric or hybrid power by 2028", learn:"Looking ahead, ROVV is planning for a cleaner and smarter fleet. Our long-term goal is to transition up to 95% of our vehicles to electric or hybrid power by 2028. This commitment reflects our focus on sustainability, innovation, and responsible growth, ensuring that our platform continues to evolve with the needs of cities, drivers, and riders alike." ,img:rentalImg },

]

const backgroundImages = [

bgImage,

bgImage2,

bgImage3,

bgImage4,

]

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {

const intervalId = setInterval (() =>{

setCurrentImage((prevImage) => (prevImage + 1)% backgroundImages.length);

}, 5000);

return () => clearInterval(intervalId);

}, );

return (

<section className="py-20 bg-bg">    
<div className="relative inset-0 z-0 w-full h-[300px] lg:h-screen md:h-[400px] shadow-2xl">  {backgroundImages.map ((image, index) => (      
  <div     key={index}    

className="absolute insert-0 w-full h-full bg-center bg-cover transition-opacity duration-100 group-[hover:scale-125]"    

style={{    

  backgroundImage: `url(${image})`,    

  opacity: index === currentImage ? 1 : 0,    

}}

> 

<div  className='absolute inset-0 bg-dark opacity-50'/>    

<h2 className='absolute inset-0 font-nohemi font-bold flex items-center justify-center text-[22px] md:text-5xl text-bg text-center px-4'>    



  Our Commitment to Sustainability    

</h2>

  </div>    ))}

  </div>    <div className="max-w-7xl mx-auto mt-10 relative z-10 ">  <div className="text-center mb-9">    <span className="inline-flex items-center mb-5 text-bg gap-2

px-6 py-2 bg-dark sm:text-sm font-bold rounded-full    

  ">    

    Sustainability

  </span>      <h2 className="text-2xl md:text-5xl font-nohemi font-bold text-dark">    Driving a Cleaner, Smarter, <br /> and More Inclusive Future

  </h2>    </div>    <div className='flex justify-center'>    <div className="grid  md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-10">    

            {cards.map((card, i) => (    

              <div key={i} className="bg-white flex flex-col rounded-2xl shadow-xl border border-light overflow-hidden hover:shadow-2xl w-100 md:w-[380px]">    

                <img src={card.img} alt={card.title} className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105" />    

                <div className="p-4">    

                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>    

                  <p className="text-medium font-bold">{card.desc}</p>    

                  <button    

                          onClick={() => setSelectedCard(card)}    

                          className="relative text-gray-600 font-bold text-sm     

                              after:absolute after:left-0 after:top-5 after:h-0.5 after:w-full    

                              after:bg-gray-500    

                              hover:after:bg-medium after:transition-all after:duration-300    

                              hover:after:w-full ">    

                                Learn more    

                  </button>    

                </div>    

              </div>    

          ))}    

  </div>

</div>    {selectedCard && (

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-6">    <motion.div

initial={{ scale: 0.85, opacity: 0 }}    

animate={{ scale: 1, opacity: 1 }}    

transition={{ duration: 0.35 }}    

className="bg-white w-full max-w-sm sm:max-w-md rounded-2xl p-6 relative"

> 

<button    

  onClick={() => setSelectedCard(null)}    

  className="absolute top-3 right-3 text-gray-700 text-xl"    

>    

  ×    

</button>    



<h2 className="text-center text-2xl font-nohemi font-bold mb-6">    

  {selectedCard.title}    

</h2>    



    



  





<p className="text-center text-medium font-bold font-sans text-sm mt-4">    

  {selectedCard.learn}    

</p>

</motion.div>

</div>  )}

  </div>  </section>  )  }