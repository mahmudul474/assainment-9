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
              
                
                       
                          <button onClick={() => handleSortTitle("asc")}>Sort Title A to Z</button>{" "}
                      

                        <option onClick={() => handleSortTitle("desc")}>
                          <button>Sort Title Z to A</button>
                        </option>
                        <option onClick={() => handleSortPrice("asc")}>
                          {" "}
                          <button>Sort Price Low to High</button>
                        </option>
                        <option onClick={() => handleSortPrice("desc")}>
                          <button>Sort Price High to Low</button>
                        </option>
              </div>
            </div>
            <div className="w-full px-3 lg:w-3/4">
              <div className="px-3 ">
                <div className="items-center justify-between hidden px-4 py-2 mb-4 bg-gray-100 md:flex dark:bg-gray-900 ">
                  <h2 className="text-2xl dark:text-gray-400">
                    Search Results for items
                  </h2>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <a
                        href="#"
                        className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-5 h-5 bi bi-list"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="inline-block h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-5 h-5 bi bi-grid-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="inline-block h-full p-2 mr-6 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-5 h-5 bi bi-grid-3x3-gap-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"></path>
                        </svg>
                      </a>
                    </div>
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {products &&
                  products?.data.map((item) => (
                    <div className="w-full px-3 mb-6 ">
                      <div className="border border-gray-200 rounded-md dark:border-gray-800">
                        <div className="relative bg-gray-200">
                          <a href="#" className="">
                            <img
                              src={item?.thumbnail}
                              alt=""
                              className="object-cover w-full h-56 mx-auto "
                            />
                          </a>
                        </div>
                        <div className="p-5 bg-gray-50 dark:bg-gray-900">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-medium dark:text-gray-400">
                              {item?.title}
                            </h3>
                            <a href="#" className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="text-red-500 dark:text-gray-400 bi bi-heart"
                                viewBox="0 0 16 16"
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                              </svg>
                            </a>
                          </div>
                          <div className="mb-4 ">
                            <p className="text-lg ">
                              <span className="text-red-400 dark:text-gray-400">
                                $700.00
                              </span>
                              <span className="ml-2 text-gray-400 line-through dark:text-gray-400">
                                1500
                              </span>
                            </p>
                          </div>
                          <div className="flex items-center justify-between mb-4">
                            <ul className="flex ">
                              <li>
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="w-4 mr-1 text-yellow-500 dark:text-gray-400 bi bi-star "
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="w-4 mr-1 text-yellow-500 dark:text-gray-400 bi bi-star"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="w-4 mr-1 text-yellow-500 dark:text-gray-400 bi bi-star"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="w-4 mr-1 text-yellow-500 dark:text-gray-400 bi bi-star"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                            <p className="text-base font-normal text-gray-400 dark:text-gray-400">
                              <span>Nepal</span>
                            </p>
                          </div>
                          <a
                            href="#"
                            className="flex justify-center px-4 py-2 text-blue-600 border border-blue-300 rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-blue-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                          >
                            Add to cart
                          </a>
                        </div>
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
