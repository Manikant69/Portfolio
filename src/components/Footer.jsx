import React from 'react'

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaCode,
    FaHeart
  } from "react-icons/fa";

function Footer() {
  return (
    <>
    <hr className="border-gray-300 dark:border-gray-600 animate-fadeIn" />

    <footer className='py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300 animate-slideInUp'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            {/* Main Footer Content */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 items-start'>
                
                {/* Brand Section */}
                <div className='animate-slideInLeft'>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 animate-gradient'>Manikant Singh</h3>
                    <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed hover:text-gray-800 dark:hover:text-white transition-colors duration-300'>
                        Full Stack Developer passionate about creating innovative web solutions. 
                        Specialized in MERN stack with a focus on user experience and modern design.
                    </p>
                    <div className='flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300'>
                        <FaMapMarkerAlt className='animate-bounce-custom' />
                        <span>Rajasthan, India</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div className='animate-slideInUp' style={{ animationDelay: '200ms' }}>
                    <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-6 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300'>Quick Links</h4>
                    <ul className='space-y-3'>
                        {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((link, index) => (
                            <li key={link} className='animate-fadeIn' style={{ animationDelay: `${300 + index * 100}ms` }}>
                                <a href={`#${link}`} className='text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform inline-block hover:translate-x-2'>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className='animate-slideInRight' style={{ animationDelay: '400ms' }}>
                    <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-6 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300'>Get In Touch</h4>
                    
                    {/* Email */}
                    <div className='mb-6'>
                        <div className='flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform'>
                            <FaEnvelope className='animate-bounce-custom flex-shrink-0' style={{ animationDelay: '0s' }} />
                            <span>manikant@example.com</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='mt-6'>
                        <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>Follow me on:</p>
                        <div className='flex space-x-4'>
                            <a href="https://www.facebook.com/manikant.singh.1272/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={28} className='text-blue-600 dark:text-blue-400 hover:scale-125 transition-all duration-300 hover-glow animate-float cursor-pointer' style={{ animationDelay: '0s' }}/>
                            </a>
                            <a href="https://www.linkedin.com/in/manikant69/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn size={28} className='text-blue-700 dark:text-blue-400 hover:scale-125 transition-all duration-300 hover-glow animate-float cursor-pointer' style={{ animationDelay: '0.2s' }}/>
                            </a>
                            <a href="https://github.com/Manikant69" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={28} className='text-gray-800 dark:text-gray-300 hover:scale-125 transition-all duration-300 hover-glow animate-float cursor-pointer' style={{ animationDelay: '0.4s' }}/>
                            </a>
                            <a href="https://www.instagram.com/mr_manikant_1.5/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={28} className='text-pink-600 dark:text-pink-400 hover:scale-125 transition-all duration-300 hover-glow animate-float cursor-pointer' style={{ animationDelay: '0.6s' }}/>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={28} className='text-blue-400 dark:text-blue-300 hover:scale-125 transition-all duration-300 hover-glow animate-float cursor-pointer' style={{ animationDelay: '0.8s' }}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='border-t border-gray-300 dark:border-gray-600 pt-8'>
                <div className='flex flex-col md:flex-row items-center justify-between text-center md:text-left animate-fadeIn' style={{ animationDelay: '600ms' }}>
                    <div className='mb-4 md:mb-0'>
                        <p className='text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300'>
                            &copy; 2024 Manikant Singh. All rights reserved.
                        </p>
                    </div>
                    
                    <div className='flex items-center justify-center space-x-2'>
                        <span className='text-sm text-gray-600 dark:text-gray-400'>Made with</span>
                        <FaHeart className='text-red-500 animate-pulse-custom' />
                        <span className='text-sm text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 cursor-pointer font-medium'>
                            by Manikant
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
