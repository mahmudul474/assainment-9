import Layout from "@/components/layout/layout";
import {
  useGetFilteredProductsQuery,
  useSearchProductsQuery,
} from "@/redux/api/api";
import Link from "next/link";
import React, { useState } from "react";

export default function Services() {
  const [filter, setFilter] = useState("");
  const [sortTitle, setSortTitle] = useState(""); 
  const [sortPrice, setSortPrice] = useState(""); 
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const {
    data: filteredProducts,
    error: filterError,
    isLoading: filterLoading,
  } = useGetFilteredProductsQuery({
    filter,
    sortTitle,
    sortPrice,
    page,
  });



  const {
    data: searchResults,
    error: searchError,
    isLoading: searchLoading,
  } = useSearchProductsQuery({
    searchTerm,
    page,

  });

  




  
  const handleSortTitle = (order) => {
    setSortTitle(order);
    setSortPrice("");  
  
  };

  const handleSortPrice = (order) => {
    setSortPrice(order);
    setSortTitle(""); 
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (filterLoading || searchLoading) {
    return <div>Loading...</div>;
  }

  if (filterError || searchError) {
    return <div>Error: Unable to fetch data</div>;
  }

  const products = searchTerm ? searchResults : filteredProducts;



 console.log(products)


  return (
    <Layout>
      <nav aria-label="Breadcrumb" className="flex mt-4 max-w-6xl mx-auto">
        <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
          <li className="flex items-center">
            <a
              href="#"
              className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

              <Link href="/">
                {" "}
                <span className="ms-1.5 text-xs font-medium"> Home </span>
              </Link>
            </a>
          </li>


       

          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

            <Link href="/services">
              {" "}
              <p className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900">
                Services
              </p>
            </Link>
          </li>
        </ol>
      </nav>
      <section className=" bg-gray-50 font-poppins dark:bg-gray-800 ">
        <div className="px-4 py-4 mx-auto max-w-6xl lg:py-6 md:px-6">
          <div className="flex flex-wrap mb-24 -mx-3">
            <div className="w-full pr-4 lg:w-1/4 lg:block">
              <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
                <h2 className="text-2xl font-bold dark:text-gray-400">
                Services
                </h2>
                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
              
                
                       
                          <button className="w-full border p-2 my-1 border-gray-200" onClick={() => handleSortTitle("asc")}>Sort Title A to Z</button>{" "}
                      

                       
                          <button  onClick={() => handleSortTitle("desc")} className="w-full border p-2 my-1 border-gray-200" >Sort Title Z to A</button>
                     
                       
                          {" "}
                          <button onClick={() => handleSortPrice("asc")} className="w-full border p-2 my-1 border-gray-200">Sort Price Low to High</button>
                         
 
                          <button onClick={() => handleSortPrice("desc")} className="w-full border p-2 my-1 border-gray-200">Sort Price High to Low</button>
                         
              </div>
            </div>
            <div className="w-full px-3 lg:w-3/4">
              <div className="px-3 ">
                <div className="items-center justify-between  px-4 py-2 mb-4 bg-gray-100 md:flex dark:bg-gray-900 ">
              

<div className="relative w-full">
  <label htmlFor="Search" className="sr-only"> Search </label>

  <input
  onChange={handleSearchTermChange}
    type="text"
    id="Search"
    placeholder="Search for..."
    className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
  />

  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button type="button" className="text-gray-600 hover:text-gray-700">
      <span className="sr-only">Search</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>
                 
                </div>
              </div>

              <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {products &&
                  products?.data.map((item) => (
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
                        Book Now 
                      </a>
                      <a
                        href="#"
                        className="flex justify-center px-4 py-2 my-2 text-[#10569f] border border-[#10569f] rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-[#10569f] hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                      >
                      See Dettails 
                      </a>
                    </div>
                  </div>
                  ))}
              </div>

               
                      

              <div className="flex justify-end mt-6">
                <nav aria-label="page-navigation">
                  <ul className="flex list-style-none">
                    <li 
                    
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="page-item disabled ">
                      <a
                        href="#"
                        className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-blue-600"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-blue-600"
                      >
                       {page}
                      </a>
                    </li>
                   
                    <li  onClick={() => handlePageChange(page + 1)} className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md "
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
