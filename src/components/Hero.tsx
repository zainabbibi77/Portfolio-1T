import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/Banner2.jpg)] bg-cover '
      style={{backgroundSize: "25%", backgroundPosition: "left 150px top 220px"}}>
        <Navbar />
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
            <div>
              <p >That&apos;s me,</p>  {/* Escaped apostrophe */}
              <p >Zainab</p>
              <p >Bibi</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
