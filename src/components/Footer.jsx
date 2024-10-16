import React from 'react'

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <hr />

    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4 hover:cursor-pointer'>
                    <FaFacebook size={24}/>
                    <FaTwitter size={24}/>
                    <FaInstagram size={24}/>
                    <FaLinkedinIn size={24}/>
                </div>
                <div className='mt-8 border-t pt-8 border-gray-700 flex flex-col items-center '>
                    <p className='text-sm'>&copy; 2024 Portfolio. All rights reserved</p>
                    <p className='text-[12px]'>Made with ❤️ by Manikant</p>
                </div>
            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer
