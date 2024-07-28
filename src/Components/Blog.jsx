import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Blog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className='py-4'>
            <h4 className='text-center font-semibold'>Our Blog</h4>
            
            {/* Desktop view */}
            <div className='hidden md:block p-9'>
                <Slider className='min-h-52' {...settings}>
                    <div className='m-3 h-full rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                        <div>
                            <div className='w-full h-48 bg-white rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/blogs/121/Echoboom.jpg" alt="" />
                            </div>
                            <h4 className='m-2 text-lg font-semibold'>UNO Green Smart Business Card by Echoboom brings</h4>
                        </div>
                    </div>
                    <div className='m-3 h-full rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                        <div>
                            <div className='w-full h-48 bg-white rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/blogs/122/Untitled-720220324062557.jpg" alt="" />
                            </div>
                            <h4 className='m-2 text-lg font-semibold'>UNO Green Smart Business Card by Echoboom brings</h4>
                        </div>
                    </div>
                </Slider>
                <div className=' mt-4'>
                <Link to="/allblogallproducts" className='font-medium text-black no-underline sm:invisible md:visible'>View More ..</Link>
                  
                </div>
            </div>
            
            {/* Mobile view */}
            <div className='block md:hidden p-9'>
                <Slider {...settings}>
                    <div className='m-3 h-full rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                        <div>
                            <div className='w-full h-48 bg-white rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/blogs/121/Echoboom.jpg" alt="" />
                            </div>
                            <h4 className='m-2 text-lg font-semibold'>UNO Green Smart Business Card by Echoboom brings</h4>
                        </div>
                    </div>
                    <div className='m-3 h-full rounded-lg border-1 shadow-md border-slate-300 flex flex-col p-3'>
                        <div>
                            <div className='w-full h-48 bg-white rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/blogs/122/Untitled-720220324062557.jpg" alt="" />
                            </div>
                            <h4 className='m-2 text-lg font-semibold'>UNO Green Smart Business Card by Echoboom brings</h4>
                        </div>
                    </div>
                </Slider>
                <div className='mt-4 '>
                <Link to="/allblogallproducts" className='font-medium pl-2 text-black no-underline sm:visible md:invisible'>View More ..</Link>
                </div>
            </div>
            
        </div>
    );
}

export default Blog;
