import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TextTransition, { presets } from 'react-text-transition';

const HomeBannerCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % slides.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);



   

  const slides = [
    {
      image: 'https://i.ibb.co/0f9h7vP/auto-mechanic-man-smith-with-clipboard-workshop.jpg',
      heading: 'Welcome to Your Car Services',
      text: 'Discover a world of exceptional automotive care at Your Car Services. Our skilled technicians are dedicated to ensuring your vehicle\'s peak performance and longevity.',
  
      buttons: ["Our Services"],
    },
    {
      image: 'https://i.ibb.co/KhbLDM6/image.png',
      
        heading: 'Quality Automotive Care Just for You',
        text: 'At Your Car Services, we believe in delivering more than just maintenance. We provide personalized care that goes beyond expectations, offering a tailored approach for every vehicle.'
      ,
      buttons: ['Our Services'],
    },
    {
      image: 'https://i.ibb.co/fC8m3Cn/image.png',
      heading: 'Revitalize Your Ride with Our Expert Services',
      text: 'Revitalize your car and enjoy the open road with confidence. Our expert services cover everything from routine maintenance to specialized repairs, all aimed at keeping your ride in top condition.'
   ,
      buttons: ['Our services'],
    },
    {
      image: 'https://i.ibb.co/2gQdDSJ/image.png',
      heading: 'Drive Confidently with Our Premier Car Care',
      text: 'Drive confidently knowing that your car is in the hands of professionals. Our premier car care services are designed to enhance your driving experience and ensure the reliability of your vehicle.'
  ,  
      buttons: ['Our services'],
    },
    {
      image: 'https://i.ibb.co/Jt5Jxyx/muscular-car-service-worker-repairing-vehicle.jpg',
      heading: 'Where Care Meets Innovation',
      text: 'At Your Car Services, we blend traditional automotive care with innovative solutions. Our commitment to excellence and cutting-edge practices sets us apart in the world of car services.'
    ,
      buttons: ["Our services"],
    },
    {
      image: 'https://i.ibb.co/wRsNHTC/side-view-mechanic-checking-truck.jpg',
      heading: 'Your Vehicle, Our Expertise',
      text: 'Your vehicle deserves the best, and that\'s exactly what we offer at Your Car Services. Trust our expertise to provide top-notch care for your car, ensuring its optimal performance on every journey.'
    ,
      buttons: ['Our-services'],
    },
   
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: false, 
    fade: true, 
  };

  return (
   <div className='mb-10 block'>
     <Slider {...settings}>
      {slides.map((slide, slideIndex) => (
        <div key={slideIndex} className="relative w-full h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px]  flex items-center justify-center text-center">
          <img src={slide.image} alt={`Slide ${slideIndex + 1}`} className="w-full h-full object-cover" />
         <div className='m-auto container  max-w-6xl'>
         <div className="absolute container   m-auto flex flex-col space-y-3  lg:w-2/3 w-full  px-4  lg:px-10 mx-auto   top-1/2 transform -translate-y-1/2 text-white">
           <h1 className='text-left  backdrop-blur-sm font-bold   text-2xl  lg:text-5xl  capitalize'>{slide?.heading}</h1>

            <p className='text-left hidden lg:block text-lg'>{slide.text}</p>
            
            <div className="flex   gap-4">
              {slide.buttons.map((button, buttonIndex) => (
                <button key={buttonIndex} className="bg-[#195593] text-white px-6 mt-4 py-3 rounded-md">
                  {button}
                </button>
              ))}
            </div>
          </div>
         </div>
        </div>
      ))}
    </Slider>
   </div>
  );
};

export default HomeBannerCarousel;
