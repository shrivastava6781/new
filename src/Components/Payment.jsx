import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Payment = () => {
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
            <h4 className='text-center font-semibold'>Our Payment</h4>
            <div className='hidden md:block p-9'>
                <Slider {...settings}>
                    <div className=' border-1 shadow-md m-1 rounded-lg h-100 flex flex-col p-4 '>
                        <img className='w-full rounded-lg h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/products/130/Website-03-min.jpg" alt="" />
                    </div>
                    <div className=' border-1 shadow-md w-20 m-1 rounded-lg h-100 flex flex-col p-4'>
                        <img className='w-full rounded-lg h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/products/130/Website-03-min.jpg" alt="" />
                    </div>
                </Slider>
            </div>
            <div className='block md:hidden p-9'>
                <Slider {...settings}>
                    <div className=' border-1 shadow-md w-20 m-1 rounded-lg h-96 flex flex-col p-4'>
                        <img className='w-full rounded-lg h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/products/130/Website-03-min.jpg" alt="" />
                    </div>
                    <div className=' border-1 shadow-md w-20 m-1 rounded-lg h-96 flex flex-col p-4'>
                        <img className='w-full rounded-lg h-full object-cover' src="https://pro.unogreencard.com/uploads/vcards/products/130/Website-03-min.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Payment;
