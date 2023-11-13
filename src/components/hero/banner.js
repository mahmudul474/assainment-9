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
      image: 'https://i.ibb.co/q5QRn7f/image.png',
      heading: 'Your Heading 1',
      text: 'Your paragraph text 1.',
      buttons: ['Button 1', 'Button 2'],
    },
    {
      image: 'https://i.ibb.co/KhbLDM6/image.png',
      heading: 'Your Heading 2',
      text: 'Your paragraph text 2.',
      buttons: ['Button 3', 'Button 4'],
    },
    {
      image: 'https://i.ibb.co/fC8m3Cn/image.png',
      heading: 'Your Heading 2',
      text: 'Your paragraph text 2.',
      buttons: ['Button 3', 'Button 4'],
    },
    {
      image: 'https://i.ibb.co/2gQdDSJ/image.png',
      heading: 'Your Heading 2',
      text: 'Your paragraph text 2.',
      buttons: ['Button 3', 'Button 4'],
    },
    {
      image: 'https://i.ibb.co/q5QRn7f/image.png',
      heading: 'Your Heading 2',
      text: 'Your paragraph text 2.',
      buttons: ['Button 3', 'Button 4'],
    },
    {
      image: 'https://i.ibb.co/q5QRn7f/image.png',
      heading: 'Your Heading 2',
      text: 'Your paragraph text 2.',
      buttons: ['Button 3', 'Button 4'],
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
    <Slider {...settings}>
      {slides.map((slide, slideIndex) => (
        <div key={slideIndex} className="relative w-full h-[550px] flex items-center justify-center text-center">
          <img src={slide.image} alt={`Slide ${slideIndex + 1}`} className="w-full h-full object-cover" />
          <div className="absolute top-1/2 transform -translate-y-1/2 text-white">
            <TextTransition
              text={slide.heading}
              springConfig={presets.gentle}
              className="text-4xl mb-4"
            />
            <TextTransition
              text={slide.text}
              springConfig={presets.gentle}
              className="text-lg mb-6"
            />
            <div className="flex gap-4">
              {slide.buttons.map((button, buttonIndex) => (
                <button key={buttonIndex} className="bg-blue-500 text-white px-4 py-2">
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HomeBannerCarousel;
