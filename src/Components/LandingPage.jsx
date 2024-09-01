import React from 'react';
import { FaGoogleDrive } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import logo from "../image/whitebackground.png"
import logo from "../image/blackbackground.png"

const LandingPage = () => {
  useGSAP(() => {
    gsap.from(".icons", {
      y: 20,
      duration: 1,
      scale: 0.5,
      opacity: 0,
      delay: 0.2, 
      stagger: 0.2,
      ease: "elastic",
      force3D: true
    })
  })


  return (
    <div className='max-w-full py-2 '>
      <div className='md:flex md:flex-row sm:flex sm:flex-col'>
        <div className='md:pl-3 m-1 flex  items-center justify-center'>
          <div className='logo rounded-full bg-slate-500 sm:w-[150px] sm:h-[150px] sm: md:w-[180px] md:h-[180px] overflow-hidden'>
            <img
              className='w-full h-full object-cover'
              src={logo}
              alt='Profile'
            />
          </div>
        </div>
        <div className=' m-1 flex flex-col '>
          <div className='sm:text-center md:text-left'>
            <h4 className='md:pl-1 font-semibold text-[#115C8E]'>Quick Card</h4>
            <h6 className='md:pl-3  font-medium text-[#696B94]'>Smart Business Card</h6>
            <h6 className='md:pl-3 font-medium  text-[#696B94]'>Powered By</h6>
            <p className='md:pl-2 font-normal text-[#54566e]'>Meeting Card Solution's Private Limited</p>
          </div>
          <div className=' md:pl-3 md:flex md:items-center md:justify-start sm:flex sm:align-items-center sm:justify-center'>
            <div className=' icon-link flex w-60 flex-wrap gap-2'>
              <span className="icons google_drive flex align-items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E]">
                < FaGoogleDrive style={{ color: "white" }} className="w-50 h-50" />
              </span>
              <span className="icons flex align-items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E]">
                < FaGlobe style={{ color: "white" }} className="w-50 h-50" />
              </span>
              <span className="icons flex align-items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E]">
                < FaMapLocationDot style={{ color: "white" }} className="w-50 h-50" />
              </span>
              <span className="icons flex align-items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E]">
                < FaTwitter style={{ color: "white" }} className="w-50 h-50" />
              </span>
              <span className="icons flex align-items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E]">
                < FaFacebook style={{ color: "white" }} className="w-50 h-50" />
              </span>
              <span className="icons flex align-items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E]">
                < FaInstagram style={{ color: "white" }} className="w-50 h-50" />
              </span>
              <span className="icons flex align-items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E]">
                < FaYoutube style={{ color: "white" }} className="w-50 h-50" />
              </span>
              <span className="icons flex align-items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E]">
                < FaLinkedin style={{ color: "white" }} className="w-50 h-50" />
              </span>
              <span className="icons flex align-items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E]">
                < FaWhatsapp style={{ color: "white" }} className="w-50 h-50" />
              </span>
              <span className="icons flex align-items-center justify-center w-9 h-9 rounded-full bg-gradient-to-b from-[#F4829D] to-[#115C8E]">
                < FaSquareXTwitter style={{ color: "white" }} className="w-50 h-50" />
              </span>

            </div>
          </div>
        </div>
      </div>
      <div className='text-[#54566e] p-3 text-center'>
      Welcome to Quick Card, your destination for cutting-edge NFC-based smart business cards.
       Our mission is to revolutionize the way professionals connect and share information,
        leveraging the power of NFC technology. With a simple tap, Quick Card enables seamless
         sharing of business details like contact numbers, website links, email IDs, social media links,
          location, galleries, portfolios, payment details, and much more.
      </div>
    </div>
  );
};

export default LandingPage;
