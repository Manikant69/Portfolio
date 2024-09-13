import React from 'react';

import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";


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
            logo: java,
            name: "Java",
        },
        {
            id: 4,
            logo: javascript,
            name: "JavaScript",
        },
        {
            id: 5,
            logo: oracle,
            name: "Oracle",
        },
        {
            id: 6,
            logo: spring,
            name: "Spring",
        },
        {
            id: 7,
            logo: springBoot,
            name: "Spring Boot",
        },
    ];


    return (
        <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                <p className="">
                    I've more than 2 years of experiance in below technologies.
                </p>
                <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-7 my-3'>
                    {cardItem.map(({ id, logo, name }) => (
                        <div key={id} className='flex flex-col items-center justify-center rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 border-[2px] '>
                            <img src={logo} alt="" className=' w-[150px] rounded-full' />
                            <div>
                                <div>{name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;
