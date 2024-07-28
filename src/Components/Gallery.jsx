import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };


    return (
        <div className=' py-4'>
            <h4 className='text-center font-semibold'>Our Gallery</h4>
            <div className=' box1 hidden md:grid grid-cols-2 gap-4 md:px-12 py-2'>
                <div className=' m-3 p-2 rounded-lg border-1 shadow-md border-slate-300 h-52  flex items-center justify-center'>
                    <div className='w-full h-full rounded-lg overflow-hidden'>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/5K7h4nmSTMA?si=QAStlgRK6e-dRXYR">
                        </iframe>
                    </div>
                </div>
                <div className='box2 m-3 p-2 rounded-lg border-1 shadow-md border-slate-300 h-52  flex items-center justify-center'>
                    <div className='w-full h-full rounded-lg overflow-hidden'>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/GwG8SKJleTA?si=skTjLBDRxlGpwzly">
                        </iframe>
                    </div>
                </div>
            </div>


            <Link to="/allgallery" className='font-medium text-black pl-16 no-underline sm:invisible md:visible'>View More ..</Link>
            <div className='md:hidden p-9'>
                <Slider {...settings}>
                    <div className=' m-3 p-2 rounded-lg border-1 shadow-md border-slate-300 h-52'>
                        <div className=' w-full h-full rounded-lg overflow-hidden'>
                            <iframe className='w-full h-full' src="https://www.youtube.com/embed/5K7h4nmSTMA?si=QAStlgRK6e-dRXYR"></iframe>
                        </div>
                    </div>
                    <div className=' m-3 p-2 rounded-lg border-1 shadow-md border-slate-300 h-52'>
                        <div className=' w-full h-full rounded-lg overflow-hidden'>
                            <iframe className='w-full h-full' src="https://www.youtube.com/embed/GwG8SKJleTA?si=skTjLBDRxlGpwzly">
                            </iframe>
                        </div>
                    </div>
                </Slider>
                <Link to="/allgallery" className='font-medium pl-2 text-black no-underline sm:visible md:invisible'>View More ..</Link>
            </div>
        </div>
    );
}

export default Gallery;
