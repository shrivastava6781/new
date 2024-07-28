import React from 'react'
import qrCodeImage from '../image/Qr_code.png'; // Adjust the path as necessary


const Qrcode = () => {
    return (
        <div className='bg-[#E4ABC5] p-2'>
            <h4 className='text-center font-semibold'>QR Code</h4>
            <div className='bg-[#E4ABC5] h-60 flex justify-center items-center relative '>
                <div className='bg-[blue] h-20 w-20 absolute top-0 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='bg-[#F8FAFC] p-3 w-72 h-44 rounded-lg flex items-end justify-center'>
                    <img className='w-32 h-28' src={qrCodeImage} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Qrcode
