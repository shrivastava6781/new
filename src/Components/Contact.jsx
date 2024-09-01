import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { SiGooglemessages } from "react-icons/si";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='max-w-100 grid sm:grid-rows-1 md:grid-rows-2 md:grid-flow-col md:m-2 gap-2 m-3'>
      <div className='bg-[#e4abc5] m-1 py-2 rounded-full flex flex-col items-center justify-center gap-1'>
        <div><SiGooglemessages  className=" w-9 h-9" /></div>
        <div className='font-medium'>customerservice@unogreen.in</div>
      </div>
      <div className='bg-[#e4abc5] m-1 py-2 rounded-full flex flex-col items-center justify-center gap-1'>
        <div><FaPhoneVolume  className=" w-9 h-9" /></div>
        <div className='font-medium'>+91 9999999999</div>
      </div>

      <div className='bg-[#e4abc5] m-1 py-2 rounded-full flex flex-col items-center justify-center gap-1'>
        <div><GiRotaryPhone  className=" w-9 h-9" /></div>
        <div className='font-medium'>+91 9999999999</div>
      </div>

      <div className='bg-[#e4abc5] m-1 py-2 rounded-full flex flex-col items-center justify-center gap-1'>
        <div><IoLocation  className=" w-9 h-9" /></div>
        <div className='font-medium'>BHOPAL</div>
      </div>

    </div>
  );
};

export default Contact;
