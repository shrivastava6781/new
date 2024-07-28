import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // md and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='py-4 '>
            <h4 className='text-center font-semibold '>Our Testimonials</h4>
            <div className='px-10 '>
                <Slider className='' {...settings}>
                    <div className='m-3 rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3 '>
                        <div>
                            <div className='w-full h-28 bg-white rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/services/288/Screenshot-2024-02-19-at-9.53.46 AM.png" alt="" />
                            </div>
                            <h5 className='m-2 text-sm font-medium'>Google Street View</h5>
                            <p className=' m-2 text-xs font-normal'>Virtual tours provide a high-definition-360-degree view of your space to the customers -
                                and these tours on google have proven to increase website traffic,
                                and are more likely to motivate online viewers to visit the business.
                            </p>
                        </div>
                    </div>
                    <div className=' m-3 rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                        <div className=''>
                            <div className='w-full h-28 bg-white rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/services/288/Screenshot-2024-02-19-at-9.53.46 AM.png" alt="" />
                            </div>
                            <h5 className='m-2 text-sm font-medium'>Google Street View</h5>
                            <p className=' m-2 text-xs font-normal'>Virtual tours provide a high-definition-360-degree view of your space to the customers -
                                and these tours on google have proven to increase website traffic,
                                and are more likely to motivate online viewers to visit the business.
                            </p>
                        </div>
                    </div>
                    <div className=' m-3 rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                        <div className=''>
                            <div className='w-full h-28 bg-white rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/services/288/Screenshot-2024-02-19-at-9.53.46 AM.png" alt="" />
                            </div>
                            <h5 className='m-2 text-sm font-medium'>Google Street View</h5>
                            <p className=' m-2 text-xs font-normal'>Virtual tours provide a high-definition-360-degree view of your space to the customers -
                                and these tours on google have proven to increase website traffic,
                                and are more likely to motivate online viewers to visit the business.
                            </p>
                        </div>
                    </div>
                    <div className=' m-3 rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                        <div className=''>
                            <div className='w-full h-28 bg-white rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/services/288/Screenshot-2024-02-19-at-9.53.46 AM.png" alt="" />
                            </div>
                            <h5 className='m-2 text-sm font-medium'>Google Street View</h5>
                            <p className=' m-2 text-xs font-normal'>Virtual tours provide a high-definition-360-degree view of your space to the customers -
                                and these tours on google have proven to increase website traffic,
                                and are more likely to motivate online viewers to visit the business.
                            </p>
                        </div>
                    </div>
                </Slider>
                <div className='mt-4'>
                <Link to="/alltestimonial" className='font-medium text-black no-underline sm:invisible md:visible'>View More ..</Link>
                <Link to="/alltestimonial" className='font-medium pl-2 text-black no-underline sm:visible md:invisible'>View More ..</Link>
                </div>           
            </div>

        </div>
    );
}

export default Testimonial;
