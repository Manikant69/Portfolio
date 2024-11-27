import React from 'react';

import mongoDB from "/mongodb.jpg";
import express from "/express.png";
import reactjs from "/reactjs.png";
import nodejs from "/node.png";
import calc from "/calc.png";


function Portfolio() {

    const cardItem = [
        {
          id: 1,
          logo: calc,
          name: "Calculator",
        },
        {
          id: 2,
          logo: express,
          name: "Express",
        },
        {
          id: 3,
          logo: reactjs,
          name: "ReactJS",
        },
        {
          id: 4,
          logo: nodejs,
          name: "NodeJS",
        },
        {
          id: 5,
          logo: mongoDB,
          name: "mongoDB",
        },
      ];


  return (
    <div name="Project" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Project</h1>
        <span className='underline text-semibold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 my-5'>
            {cardItem.map(({id, logo, name})=>(
                <div key={id} className='md:w-[300px] md:h-[430px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
                    <img src={logo} alt="" className='w-full h-[60%] rounded-lg border-[2px]'/>
                    <div className='px-2'>
                        <div className='text-xl font-bold mb-2'>{name}</div>
                        <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='px-6 py-4 space-x-3 justify-around'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>View</button>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
                    </div>
                </div>
            ))}
        </div>
      </div>    
    </div>
  )
}

export default Portfolio
