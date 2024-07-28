import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

    return (
        <div className='py-4'>
            <h4 className='text-center font-semibold'>Our Services</h4>
            <div className='mainservice grid md:grid-cols-2 sm:grid-rows-1 md:px-12 py-1'>
                <div className='service1 m-3 rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                    <div className=''>
                        <div className='w-full h-28 bg-white rounded-lg overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/services/288/Screenshot-2024-02-19-at-9.53.46 AM.png" alt="" />
                        </div>
                        <h5 className='m-2 text-sm font-medium'>Google Street View</h5>
                        <p className=' m-2 text-xs font-normal'>
                            Virtual tours provide a high-definition-360-degree view of your space to the customers -
                            and these tours on google have proven to increase website traffic,
                            and are more likely to motivate online viewers to visit the business.
                        </p>
                    </div>
                </div>
                <div className='service1 m-3 rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                    <div className=''>
                        <div className='w-full h-28 bg-white rounded-lg overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/services/288/Screenshot-2024-02-19-at-9.53.46 AM.png" alt="" />
                        </div>
                        <h5 className='m-2 text-sm font-medium'>Echobooom Digital</h5>
                        <p className=' m-2 text-xs font-normal'>
                            Reach Your Audience at the Right Time at the Right Place.
                            Whatever your business goals are, Echobooom Digital will help you achieve them through Creative
                            and Strategic Planning.
                        </p>
                    </div>
                </div>
            </div>
            <Link to="/allservice" className='font-medium text-black pl-16 no-underline sm:invisible md:visible'>View More ..</Link>
            <Link to="/allservice" className='font-medium pl-2 text-black no-underline sm:visible md:invisible'>View More ..</Link>
        </div>
    );
}

export default Services;
