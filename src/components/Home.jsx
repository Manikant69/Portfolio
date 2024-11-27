import React from 'react';

import pic from "/my photo.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";


function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    {/* left */}

                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome to My Profile</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={[
                                    "Developer","Programmer", "Coder"
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-md md:text-md text-justify'>"I am a dedicated Full Stack Developer with a strong command of both frontend and backend technologies. My expertise spans designing intuitive, user-centered interfaces and developing efficient, scalable server-side solutions. With a proactive troubleshooting approach, I excel in identifying and resolving technical challenges to ensure seamless functionality and peak performance. Committed to continuous improvement, I stay at the forefront of industry trends, consistently enhancing my skill set to deliver cutting-edge web solutions."</p>
                        <br />

                        {/* social media icons */}
                        <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.facebook.com/manikant.singh.1272/" target="_blank">
                                    <FaSquareFacebook className='text-2xl cursor-pointer' />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="https://www.linkedin.com/in/manikant69/" target="_blank"><FaLinkedin className='text-2xl cursor-pointer' />
                                    </a></li>
                                    <li>
                                    <a href="https://www.instagram.com/mr_manikant_1.5/" target="_blank"><FaSquareInstagram className='text-2xl cursor-pointer' />
                                    </a></li>
                                    <li>
                                    <a href="https://www.telegram.com" target="_blank"><FaTelegram className='text-2xl cursor-pointer' />
                                    </a></li>
                                </ul>
                            </div>

                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                    <img src={pic} alt="" className='rounded-full h-[300px]
                    w-[300px] md:h-[450px] md:w-[450px] mx-auto'/>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}


export default Home;