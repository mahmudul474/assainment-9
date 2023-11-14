import React from 'react'

export default function Blog() {
  return (
    <div className="px-4  mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">

      <h1 className='text-3xl my-5 text-center '>Our Blog </h1>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <img
              src="https://img.freepik.com/free-photo/mechanic-holding-wrench_1170-1136.jpg?size=626&ext=jpg&ga=GA1.1.167125713.1699786927&semt=ais"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2023
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">The Art of Car Maintenance</p>
            </a>
            <p className="mb-4 text-gray-700">
            Paragraph: Discover the secrets to keeping your vehicle in top-notch condition with our expert tips and insights. From routine maintenance to troubleshooting, empower yourself to become a car care aficionado.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <img
              src="https://img.freepik.com/free-photo/mechanic-servicing-car-engine_1170-1684.jpg?w=360&t=st=1699951325~exp=1699951925~hmac=dcee7cb4dd13d3edf6aeb36676d7d1d45384d031541de69df4dc1588d95b8847"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              4 Nov 2023
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Driving into the Future: Electric Cars Explained</p>
            </a>
            <p className="mb-4 text-gray-700">
            Paragraph: Dive into the world of electric vehicles and explore the eco-friendly revolution. Uncover the technology behind electric cars and learn why they're becoming an increasingly popular choice for the conscious driver.

            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">9.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <img
              src="https://img.freepik.com/free-photo/car-mechanic-changing-wheels-car_1303-27465.jpg?size=626&ext=jpg&ga=GA1.1.167125713.1699786927&semt=ais"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2022
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">
              Road Trip Essentials: Packing Like a Pro
              </p>
            </a>
            <p className="mb-4 text-gray-700">
            Paragraph: Planning a road trip? Ensure a smooth and enjoyable journey with our guide to packing essentials. From snacks to safety gear, we've got you covered for the ultimate road adventure.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
