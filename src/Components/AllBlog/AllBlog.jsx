import React from 'react'
import { Link } from 'react-router-dom'

const AllBlog = () => {
    return (
        <div>
            <div className='flex align-items-center justify-between p-3'>
                <h2 className='font-semibold bg-gradient-to-r from-[#F4829D] to-[#115C8E] inline-block text-transparent bg-clip-text'>Blogs</h2>
                <Link to="/" className="text-white no-underline rounded py-2 px-4 bg-gradient-to-b from-[#F4829D] to-[#115C8E]">Back</Link>
            </div>
            <div className=' grid grid-cols-1 gap-4 px-12 py-1'>
                <div className=' m-3 h-full rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                    <div >
                        <div className=' w-full h-48 bg-white rounded-lg overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/blogs/121/Echoboom.jpg" alt="" />
                        </div>
                        <h4 className='m-2 text-lg font-semibold'>  UNO Green Smart Business Card by Echobooom brings</h4>

                    </div>
                </div>
                <div className=' m-3 h-full rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                    <div >
                        <div className=' w-full h-48 bg-white rounded-lg overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/blogs/122/Untitled-720220324062557.jpg" alt="" />
                        </div>
                        <h4 className='m-2 text-lg font-semibold'>  UNO Green Smart Business Card by Echobooom brings</h4>

                    </div>
                </div>
                {/* <p className='pl-4'>View More</p>     */}
            </div>

        </div>
    )
}

export default AllBlog
