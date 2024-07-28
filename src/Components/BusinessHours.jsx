import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

const BusinessHours = () => {
    return (
        <div className='py-4'>
            <h4 className='text-center font-semibold py-2'>Business Hours</h4>
            <div className='m-1'>
                <div className=' m-3 p-3 border-1 shadow-md flex align-items-center gap-4 rounded-lg overflow-hidden'>
                    <div>
                        <div className=' w-16 h-16 bg-[#E4ABC5] rounded-lg overflow-hidden flex align-items-center justify-center'>
                        <FaCalendarAlt className=" w-8 h-8"  />
                        </div>
                    </div>
                    <div>
                        <div className='text-sm font-medium m-1'>
                            Monday
                        </div>
                        <div className='text-base font-semibold m-1'>
                            09:00 AM - 06:00 PM
                        </div>
                    </div>
                </div>
                <div className=' m-3 p-3 border-1 shadow-md flex align-items-center gap-4 rounded-lg overflow-hidden'>
                    <div>
                         <div className=' w-16 h-16 bg-[#E4ABC5] rounded-lg overflow-hidden flex align-items-center justify-center'>
                        <FaCalendarAlt className=" w-8 h-8"  />
                        </div>
                    </div>
                    <div>
                        <div className='text-sm font-medium m-1'>
                            Tuesday
                        </div>
                        <div className='text-base font-semibold m-1'>
                            09:00 AM - 06:00 PM
                        </div>
                    </div>
                </div>
                <div className=' m-3 p-3 border-1 shadow-md flex align-items-center gap-4 rounded-lg overflow-hidden'>
                    <div>
                         <div className=' w-16 h-16 bg-[#E4ABC5] rounded-lg overflow-hidden flex align-items-center justify-center'>
                        <FaCalendarAlt className=" w-8 h-8"  />
                        </div>
                    </div>
                    <div>
                        <div className='text-sm font-medium m-1'>
                            Wensday
                        </div>
                        <div className='text-base font-semibold m-1'>
                            09:00 AM - 06:00 PM
                        </div>
                    </div>
                </div>
                <div className=' m-3 p-3 border-1 shadow-md flex align-items-center gap-4 rounded-lg overflow-hidden'>
                    <div>
                         <div className=' w-16 h-16 bg-[#E4ABC5] rounded-lg overflow-hidden flex align-items-center justify-center'>
                        <FaCalendarAlt className=" w-8 h-8"  />
                        </div>
                    </div>
                    <div>
                        <div className='text-sm font-medium m-1'>
                            Thursday
                        </div>
                        <div className='text-base font-semibold m-1'>
                            09:00 AM - 06:00 PM
                        </div>
                    </div>
                </div>
                <div className=' m-3 p-3 border-1 shadow-md flex align-items-center gap-4 rounded-lg overflow-hidden'>
                    <div>
                         <div className=' w-16 h-16 bg-[#E4ABC5] rounded-lg overflow-hidden flex align-items-center justify-center'>
                        <FaCalendarAlt className=" w-8 h-8"  />
                        </div>
                    </div>
                    <div>
                        <div className='text-sm font-medium m-1'>
                            Friday
                        </div>
                        <div className='text-base font-semibold m-1'>
                            09:00 AM - 06:00 PM
                        </div>
                    </div>
                </div>
                <div className=' m-3 p-3 border-1 shadow-md flex align-items-center gap-4 rounded-lg overflow-hidden'>
                    <div>
                         <div className=' w-16 h-16 bg-[#E4ABC5] rounded-lg overflow-hidden flex align-items-center justify-center'>
                        <FaCalendarAlt className=" w-8 h-8"  />
                        </div>
                    </div>
                    <div>
                        <div className='text-sm font-medium m-1'>
                            Saturday
                        </div>
                        <div className='text-base font-semibold m-1'>
                            Closed
                        </div>
                    </div>
                </div>
                <div className=' m-3 p-3 border-1 shadow-md flex align-items-center gap-4 rounded-lg overflow-hidden'>
                    <div>
                         <div className=' w-16 h-16 bg-[#E4ABC5] rounded-lg overflow-hidden flex align-items-center justify-center'>
                        <FaCalendarAlt className=" w-8 h-8"  />
                        </div>
                    </div>
                    <div>
                        <div className='text-sm font-medium m-1'>
                            Sunday
                        </div>
                        <div className='text-base font-semibold m-1'>
                            Closed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessHours
