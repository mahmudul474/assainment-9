import React, { useState } from "react";
import Slider from "react-slick";

const Responsive = () => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        },
      },
    ],
  });



  const member=[
    {
      name:"Sakib Smith",
      title:"Mecanic",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm2.jpg"
 
    },
    {
      name:"ISMAIL JHONE",
      title:"Mecanic",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm1.jpg"
    },
    {
    name:"ANDRE SMITH",
      title:"Master",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm4.jpg"
    },
    {
      name:"David JAKAKIYA",
      title:"Specialist",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm3.jpg"
    },{
      name:"ISMAIL JHONE",
      title:"Mecanic",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm1.jpg"
    },
    {
    name:"ANDRE SMITH",
      title:"Master",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm4.jpg"
    },
    {
      name:"David JAKAKIYA",
      title:"Specialist",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm3.jpg"
    },{
      name:"ISMAIL JHONE",
      title:"Mecanic",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm1.jpg"
    },
    {
    name:"ANDRE SMITH",
      title:"Master",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm4.jpg"
    },
    {
      name:"David JAKAKIYA",
      title:"Specialist",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm3.jpg"
    },{
      name:"ISMAIL JHONE",
      title:"Mecanic",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm1.jpg"
    },
    {
    name:"ANDRE SMITH",
      title:"Master",
      img:"https://kodesolution.com/html/2017/autocare-html/demo/images/team/sm4.jpg"
    },
  ]

  return (
    <div className="px-10  block my-10">
      <h2> Responsive </h2>
      <Slider {...settings}>
        {member.map((item) => (
          <>
          
          <div  className="w-full px-4 mb-4  lg:mb-0">
                    <div  className="p-6 bg-white rounded shadow dark:bg-gray-700 group">
                        <a  className="block mb-2" href="#">
                            <div  className="relative overflow-hidden">
                                <div  className="mb-5 overflow-hidden">
                                    <img  className="object-cover w-full  transition-all rounded h-72 group-hover:scale-110"
                                        src={item?.img} alt=""/>
                                </div>
                                <div  className="absolute flex flex-col top-4 right-4">
                                    <div  className="flex items-center">
                                        <div
                                             className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-blue-200 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                 className="w-6 h-6 text-blue-800 bi bi-facebook dark:text-gray-400"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div  className="flex items-center">
                                        <div
                                             className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-blue-200 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                 className="w-6 h-6 text-[#195593] dark:text-gray-400 bi bi-twitter"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2  className="mb-2 text-xl font-bold dark:text-white">{item?.name}</h2>
                            <p  className="text-lg font-bold text-[#195593] dark:text-blue-300 ">
                              {item?.title}
                            </p>
                        </a>
                    </div>
                </div>
          
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Responsive;
