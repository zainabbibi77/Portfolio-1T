import React from 'react'
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div  id='contact' className='pt-32 container'>
        <div className='grid mdd:grid-cols-2 gap-10'>
            <div className='space-y-8'> 
                <h2 className='text-6xl'data-aos="zoom-in-up" >Reach out to me directly</h2>
                <p className='text-white-500 text-[18px] pt-2' data-aos="zoom-in-up" >Drop me a line, give me a call, or send me a message 

                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <SiGmail size={30}/> xyz@gmail.com
                 </div>
                 <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <BsFillTelephoneFill size={30}/> +92 310 2018984
                 </div>
            </div>
            <div className='space-y-8'>
              <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" className='h-[40px] w-[350pt] bg-transparent border border-blue ' id='name' />
              </div>
              
              <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text" className='h-[40px] w-[450pt] bg-transparent border border-blue ' id='email' />
              </div>

              <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="message">Message</label>
                <textarea 
                 className='bg-transparent border border-blue ' id='message' rows={8} >
                  </textarea>
              </div>
              <button className='bg-blue-400 p-2 px-6' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
        

    </div>
  )
}

export default Contact