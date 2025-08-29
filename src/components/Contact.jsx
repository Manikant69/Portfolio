import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitButton = (e) => {
        // e.preventDefault();

        // My EmailJs service ID, template ID, and public key 
        const serviceId = 'service_7i15tzb';
        const templateId = 'template_zw5p2oa';
        const publicKey = 'xx6Q9tfTfPqrQp_aw';

        // Create a new object that contains  dynamic template params 
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Manikant Singh",
            message: message,
        };

        // Send the email using emailJs 
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                toast.success("Email sent successfully!", response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                toast.error('Error sending email', error);
            })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div name="Contact" className='relative min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden'>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className='relative max-w-7xl container mx-auto px-4 md:px-8 lg:px-12'>
                
                {/* Hero Header Section */}
                <div className="text-center mb-20 animate-slideInUp">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-custom"></div>
                        <span className="px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-custom">
                            💬 Available for Projects
                        </span>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse-custom" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    
                    <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent animate-gradient leading-tight mb-8'>
                        Contact Me
                    </h1>

                    {/* Decorative Separator */}
                    <div className="flex items-center justify-center mb-16 animate-fadeIn" style={{ animationDelay: '600ms' }}>
                        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-40"></div>
                        <div className="mx-6 flex space-x-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce-custom"></div>
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce-custom" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce-custom" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-40"></div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className='max-w-2xl mx-auto'>
                    <div className='animate-slideInUp'>
                        <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500'>
                            <div className="flex items-center mb-8">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-white text-xl">📤</span>
                                </div>
                                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Send Message</h2>
                            </div>

                            <form onSubmit={handleSubmit(handleSubmitButton)} className='space-y-6'>
                                
                                {/* Name Field */}
                                <div className='animate-slideInLeft' style={{ animationDelay: '400ms' }}>
                                    <label className='block text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center'>
                                        <span className="text-blue-500 mr-2">👤</span>
                                        Full Name
                                    </label>
                                    <input
                                        {...register("name", { required: "Name is required" })} 
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {errors.name && <span className='text-red-500 text-sm mt-1 block animate-bounce-custom'>This field is required</span>}
                                </div>

                                {/* Email Field */}
                                <div className='animate-slideInRight' style={{ animationDelay: '600ms' }}>
                                    <label className='block text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center'>
                                        <span className="text-purple-500 mr-2">📧</span>
                                        Email Address
                                    </label>
                                    <input 
                                        {...register("email", { 
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })} 
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <span className='text-red-500 text-sm mt-1 block animate-bounce-custom'>{errors.email.message}</span>}
                                </div>

                                {/* Message Field */}
                                <div className='animate-slideInLeft' style={{ animationDelay: '800ms' }}>
                                    <label className='block text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center'>
                                        <span className="text-cyan-500 mr-2">💬</span>
                                        Message
                                    </label>
                                    <textarea 
                                        {...register("message", { 
                                            required: "Message is required",
                                            minLength: {
                                                value: 10,
                                                message: "Message must be at least 10 characters"
                                            }
                                        })} 
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 resize-none"
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="Tell me about your project or just say hello!"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    {errors.message && <span className='text-red-500 text-sm mt-1 block animate-bounce-custom'>{errors.message.message}</span>}
                                </div>

                                {/* Submit Button */}
                                <div className='animate-fadeIn' style={{ animationDelay: '1000ms' }}>
                                    <button 
                                        type='submit' 
                                        className='w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group'
                                    >
                                        <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">📤</span>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
