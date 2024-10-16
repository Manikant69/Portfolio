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
        watch,
        formState: { errors },
    } = useForm();


    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl mb-4 font-bold'>Contact <span className='text-red-700'>me</span> </h1>
                <span>Please fill out the form below to contact me</span>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form onSubmit={handleSubmit(handleSubmitButton)} className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                        <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Full Name</label>
                            <input
                                {...register("name", { required: true })} className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your fullname"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                                  {errors.name && <span>This field is required</span>}

                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Email Address</label>
                            <input 
                            {...register("email", { required: true })} 
                            className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span>This field is required</span>}

                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Message</label>
                            <textarea 
                            {...register("message", { required: true })} 
                            className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Enter your message here"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                                  {errors.message && <span>This field is required</span>}

                        </div>

                        <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
