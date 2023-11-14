import { useGetServicesQuery } from "@/redux/api/api";
import React from "react";

export default function Services() {
  const { data, error, isLoading } = useGetServicesQuery(undefined);

  console.log(data);
  if (isLoading) {
    return <h1>loading ....</h1>;
  }

  return (
    <section className="flex items-center bg-stone-100 font-poppins dark:bg-gray-800 ">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <h2 className="pb-2 text-xl font-bold text-left text-gray-800 md:text-3xl dark:text-gray-400">
          Our Services
        </h2>
        <div className="w-20 mb-6 border-b border-red-700 dark:border-gray-400"></div>
        <div className="grid gap-4 mb-11 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {data?.slice(0, 6).map((item) => (
            <div className="border border-gray-200 rounded-md dark:border-none">
              <div>
                <a href="#" className="">
                  <img
                    src={item?.thumbnail}
                    alt=""
                    className="object-cover w-full h-56 mx-auto "
                  />
                </a>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-900">
                <h3 className="mb-2 text-xl font-medium dark:text-gray-400">
                  {item?.title}
                </h3>
                <div className="mb-2 text-[#10569f] dark:text-[#10569f]">
                  {item?.additionalDetails.map((info) => info)}
                </div>
                <div className="mb-2 flex-flex-row text-[#10569f] ">
                  <div> Availability</div>
                  <div>
                    <div>{item?.availability?.hours}</div>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="mb-2 text-lg font-bold text-gray-600 dark:text-gray-400 ">
                    <span>BasePrice:  ${item?.pricing?.basePrice}</span>
                  </p>
               
                </div>
                <a
                  href="#"
                  className="flex justify-center px-4 py-2 text-[#10569f] border border-[#10569f] rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-[#10569f] hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                >
                  Add to cart
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            className="px-4 py-2 text-[#10569f] border border-black rounded-full hover:text-gray-50 hover:bg-[#10569f] dark:text-gray-400 dark:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-700"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
