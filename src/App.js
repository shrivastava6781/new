import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Imported necessary components
import './App.css';
import Appointment from './Components/Appointment';
import Blog from './Components/Blog';
import BusinessHours from './Components/BusinessHours';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Inquiries from './Components/Inquiries';
import LandingPage from './Components/LandingPage';
import Payment from './Components/Payment';
import Product from './Components/Product';
import Qrcode from './Components/Qrcode';
import Services from './Components/Services';
import Slider from './Components/Slider';
import Testimonial from './Components/Testimonial';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer'; // Import your custom Footer component
import Add_Exchange from './Components/Add_Exchange';
import AllProduct from './Components/AllProduct/AllProduct';
import AllBlog from './Components/AllBlog/AllBlog';
import AllGallery from './Components/AllGallery/AllGallery';
import AllTestimonials from './Components/AllTestimonials/AllTestimonials';
import AllServices from './Components/AllServices/AllServices';

function App() {
  return (
    <div className='w-full h-full bg-[#E5E5E5]'>
      <div className='main md:w-[598px] h-full bg-white mx-auto font-[Poppins] position-relative'>
        <BrowserRouter>
          <Routes>
            <Route  path='/' element={
              <>
                  <Slider />
                  <Sidebar />
                  <LandingPage />
                  <Contact />
                  <Qrcode />
                  <Services />
                  <Gallery />
                  <Product />
                  <Testimonial />
                  <Blog />
                  <BusinessHours />
                  <Appointment />
                  <Payment />
                  <Inquiries />
                  <Footer /> 
                  <Add_Exchange />
                </>
              } 
            />
            <Route path='/allblogallproducts' element={<AllProduct />} />
            <Route path='/' element={<AllBlog />} />
            <Route path='/allgallery' element={<AllGallery />} />
            <Route path='/alltestimonial' element={<AllTestimonials />} />
            <Route path='/allservice' element={<AllServices />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
