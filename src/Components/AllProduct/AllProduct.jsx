import React from 'react'
import { Link } from 'react-router-dom'

const AllProduct = () => {
    return (
        <div>
            <div className='flex align-items-center justify-between p-3'>
                <h2 className='font-semibold bg-gradient-to-r from-[#F4829D] to-[#115C8E] inline-block text-transparent bg-clip-text'>Products</h2>
                <Link to="/" className="text-white no-underline rounded py-2 px-4 bg-gradient-to-b from-[#F4829D] to-[#115C8E]">Back</Link>
            </div>
            <div className=' grid grid-cols-1 gap-4 px-12 py-1'>
                <div className='m-3 rounded-lg border-1 shadow-md border-slate-300 min-h-[200px] flex flex-col p-3'>
                    <div className=''>
                        <div className='w-full h-44 bg-white rounded-lg overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/products/130/Website-03-min.jpg" alt="" />
                        </div>
                        <h5 className='m-2 text-sm font-medium'>Google Street View</h5>
                        <p className=' m-2 text-xs font-normal'>Virtual tours provide a high-definition-360-degree view of your space to the customers -
                            and these tours on google have proven to increase website traffic,
                            and are more likely to motivate online viewers to visit the business.
                        </p>
                        <small className='font-medium pl-2'>₹4,500.00</small>
                    </div>
                </div>
                <div className='m-3 rounded-lg border-1 shadow-md border-slate-300 min-h-[200px] flex flex-col p-3'>
                    <div className=''>
                        <div className='w-full h-44 bg-white rounded-lg overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/products/119/Grey-BG-mockups-14-min.jpg" alt="" />
                        </div>
                        <h5 className='m-2 text-sm font-medium'>Google Street View</h5>
                        <p className=' m-2 text-xs font-normal'>Virtual tours provide a high-definition-360-degree view of your space to the customers -
                            and these tours on google have proven to increase website traffic,
                            and are more likely to motivate online viewers to visit the business.
                        </p>
                        <small className='font-medium pl-2'>₹4,500.00</small>
                    </div>
                </div>
                {/* <p className='pl-4'>View More</p>     */}
            </div>

        </div>
    )
}

export default AllProduct
