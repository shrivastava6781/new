import React from 'react'
import qrCodeImage from '../image/Qr_code.png'; // Adjust the path as necessary
import logo from '../image/blackbackground.png'; // Adjust the path as necessary


const Qrcode = () => {
    return (
        <div className='bg-[#E4ABC5] p-2'>
            <h4 className='text-center font-semibold'>QR Code</h4>
            <div className='bg-[#E4ABC5] h-60 flex justify-center items-center relative '>
                <div className='bg-[blue] h-20 w-20 absolute top-0 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src={logo} alt="" />
                </div>
                <div className='bg-[#F8FAFC] p-3 w-72 h-44 rounded-lg flex items-end justify-center'>
                    <img className='w-32 h-28' src={qrCodeImage} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Qrcode
