import React from 'react';

import html from "/html.png";
import css from "/css.jpg";
import mongodb from "/mongodb.jpg";
import javascript from "/javascript.png";
import node from "/node.png";
import reactjs from "/reactjs.png";
import express from "/express.png";
import tailwind from "/tailwind.png";


function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML",
        },
        {
            id: 2,
            logo: css,
            name: "CSS",
        },
        {
            id: 3,
            logo: javascript,
            name: "JavaScript",
        },
        {
            id: 4,
            logo: tailwind,
            name: "Tailwind",
        },
        {
            id: 5,
            logo: node,
            name: "Node",
        },
        {
            id: 6,
            logo: reactjs,
            name: "ReactJs",
        },
        {
            id: 7,
            logo: express,
            name: "Express",
        },
        {
            id: 8,
            logo: mongodb,
            name: "MongoDB",
        },
    ];


    return (
        <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                <p >
                    I've more than 2 years of experiance in below technologies.
                </p>
                <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-7 my-3'>
                    {cardItem.map(({ id, logo, name }) => (
                        <div key={id} className='flex flex-col items-center justify-center rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 border-[2px] '>
                            <img src={logo} alt="" className=' w-[130px] rounded-full' />
                            <div>
                                <div className='pt-[5px]'>{name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;
