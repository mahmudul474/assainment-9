import { useGetFeaturesQuery } from "@/redux/api/api";
import Image from "next/image";
import React from "react";

export default function Featured() {
  const { data, error, isLoading } = useGetFeaturesQuery(undefined);


  if (isLoading) {
    return <h1>Loading .. </h1>;
  }
  return (
    <div>
      <section className=" bg-gray-100 dark:bg-gray-800 ">
        <div className="px-4 py-20 mx-auto max-w-6xl">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                  FEATURES
                </div>
                <h1 className="text-5xl font-bold dark:text-white">
                  {" "}
                  Our <span className="text-[#10569f]"> Features</span>{" "}
                </h1>
                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-[#10569f]"></div>
                  <div className="flex-1 h-2 bg-[#10569f]"></div>
                  <div className="flex-1 h-2 bg-[#10569f]"></div>
                </div>
              </div>
              <p className="mb-16 text-base text-center text-gray-500">
                Our car services include advanced diagnostic tools to identify
                and address issues with precision. Stay ahead with cutting-edge
                technology for your vehicle.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((item) => (
              <div
                key={item?._id}
                className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg"
              >
                <div className="inline-block p-4 mb-6 -mt-16  text-white bg-[#10569f] rounded-full">
                  <Image alt="icon" width={50} height={50} src={item?.icon} />
                </div>
                <h3 className="mb-4 text-2xl font-semibold dark:text-white">
                  {" "}
                  {item?.featureName}
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {item?.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
