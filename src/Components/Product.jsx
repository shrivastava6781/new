import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Product = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className='py-3'>
            <h4 className='text-center font-semibold'>Our Product</h4>
            <div className='hidden md:grid  grid-cols-2 gap-4 md:px-12 py-1'>
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
            <Link to="/allproducts" className='font-medium text-black pl-16 no-underline sm:invisible md:visible'>View More ..</Link>
            <div className='md:hidden p-9'>
                <Slider {...settings}>
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
                </Slider>
                <Link to="/allproducts" className='font-medium pl-2 text-black no-underline sm:visible md:invisible'>View More ..</Link>
            </div>
        </div>
    );
}

export default Product;
