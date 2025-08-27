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
            <div name="Home" className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden'>
                
                {/* Background Decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-float"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-400 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
                </div>

                <div className='relative max-w-screen-2xl container mx-auto px-4 md:px-20 py-20'>
                    <div className='flex flex-col lg:flex-row items-center justify-between min-h-screen lg:min-h-0'>
                        
                        {/* Left Content */}
                        <div className='lg:w-1/2 space-y-8 order-2 lg:order-1 text-center lg:text-left'>
                            
                            {/* Welcome Badge */}
                            <div className='animate-slideInLeft'>
                                <span className='inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-custom'>
                                    👋 Welcome to My Digital Space
                                </span>
                            </div>

                            {/* Main Heading */}
                            <div className='animate-slideInLeft space-y-4' style={{ animationDelay: '200ms' }}>
                                <h1 className='text-5xl lg:text-7xl font-bold leading-tight'>
                                    <span className='text-gray-900 dark:text-white'>Hello, I'm</span>
                                    <br />
                                    <span className='bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient'>
                                        Manikant Singh
                                    </span>
                                </h1>
                                
                                <div className='flex items-center justify-center lg:justify-start space-x-3 text-2xl lg:text-4xl font-semibold'>
                                    <span className='text-gray-700 dark:text-gray-300'>I'm a</span>
                                    <ReactTyped
                                        className='text-blue-600 dark:text-blue-400 font-bold'
                                        strings={[
                                            "Full Stack Developer",
                                            "React Specialist", 
                                            "MERN Expert",
                                            "Problem Solver"
                                        ]}
                                        typeSpeed={50}
                                        backSpeed={30}
                                        loop={true}
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className='animate-fadeIn max-w-2xl' style={{ animationDelay: '400ms' }}>
                                <p className='text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
                                    Passionate about crafting exceptional digital experiences with modern web technologies. 
                                    I transform ideas into scalable, user-friendly applications that make a difference.
                                </p>
                            </div>

                            {/* Call to Action Buttons */}
                            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideInUp' style={{ animationDelay: '600ms' }}>
                                <a 
                                    href="#Project"
                                    className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1'
                                >
                                    <span className='flex items-center justify-center gap-2'>
                                        View My Work
                                        <svg className='w-5 h-5 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </span>
                                </a>
                                
                                <a 
                                    href="#Contact"
                                    className='px-8 py-4 border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105'
                                >
                                    Get In Touch
                                </a>
                            </div>

                            {/* Social Media & Tech Stack */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 animate-slideInUp' style={{ animationDelay: '800ms' }}>
                                
                                {/* Social Media */}
                                <div className='space-y-4'>
                                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Connect With Me</h3>
                                    <div className='flex justify-center lg:justify-start space-x-4'>
                                        {[
                                            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/manikant69/", color: "text-blue-600 dark:text-blue-400", delay: "0s" },
                                            { Icon: FaSquareFacebook, href: "https://www.facebook.com/manikant.singh.1272/", color: "text-blue-700 dark:text-blue-500", delay: "0.1s" },
                                            { Icon: FaSquareInstagram, href: "https://www.instagram.com/mr_manikant_1.5/", color: "text-pink-600 dark:text-pink-400", delay: "0.2s" },
                                            { Icon: FaTelegram, href: "https://www.telegram.com", color: "text-blue-500 dark:text-blue-400", delay: "0.3s" }
                                        ].map(({ Icon, href, color, delay }, index) => (
                                            <a 
                                                key={index}
                                                href={href} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className={`p-3 bg-white dark:bg-gray-800 ${color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-bounce-custom`}
                                                style={{ animationDelay: delay }}
                                            >
                                                <Icon className='text-2xl' />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className='space-y-4'>
                                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Tech Stack</h3>
                                    <div className='flex justify-center lg:justify-start space-x-4'>
                                        {[
                                            { Icon: SiMongodb, color: "text-green-600 dark:text-green-400", delay: "0s" },
                                            { Icon: SiExpress, color: "text-gray-700 dark:text-gray-300", delay: "0.1s" },
                                            { Icon: FaReact, color: "text-blue-500 dark:text-blue-400", delay: "0.2s" },
                                            { Icon: FaNodeJs, color: "text-green-500 dark:text-green-400", delay: "0.3s" }
                                        ].map(({ Icon, color, delay }, index) => (
                                            <div 
                                                key={index}
                                                className={`p-3 bg-white dark:bg-gray-800 ${color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-6 animate-float cursor-pointer`}
                                                style={{ animationDelay: delay }}
                                            >
                                                <Icon className='text-2xl' />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Profile Image */}
                        <div className='lg:w-1/2 flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0 animate-slideInRight'>
                            <div className='relative'>
                                {/* Decorative Rings */}
                                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-spin-slow opacity-20'></div>
                                <div className='absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 animate-spin-slow opacity-30' style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
                                
                                {/* Profile Image Container */}
                                <div className='relative z-10 p-2'>
                                    <div className='w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 hover:scale-105 transition-all duration-500 animate-float'>
                                        <img 
                                            src={pic} 
                                            alt="Manikant Singh" 
                                            className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                                        />
                                    </div>
                                </div>
                                
                                {/* Floating Elements */}
                                <div className='absolute top-10 -right-10 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl animate-bounce-custom'>
                                    💻
                                </div>
                                <div className='absolute bottom-10 -left-10 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl animate-bounce-custom' style={{ animationDelay: '1s' }}>
                                    🚀
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Transition */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-fadeIn"></div>
        </>
    )
}


export default Home;