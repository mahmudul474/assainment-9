import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="shadow-lg font-poppins dark:bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto" x-data="{open:false}">
        <nav className="flex items-center justify-between py-4">
          <Link href="/">
            <Image
              width={200}
              height={200}
              alt="lgo"
              src="https://kodesolution.com/html/2017/autocare-html/demo/images/logo-wide.png"
            />
          </Link>
          <div className="flex lg:hidden">
            <button
              className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 hover:text-blue-800 hover:border-blue-300 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex">
            <li>
              <a
                href=""
                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
              >
                Testimonials
              </a>
            </li>
          </ul>
          <div className="items-center hidden pl-2 ml-auto mr-8 lg:flex lg:ml-0 lg:mr-0">
            <div className="flex px-6 py-2 border border-gray-700 rounded-full dark:border-gray-400">
              <input
                type="text"
                className="w-full pr-4 text-sm text-gray-700 bg-white dark:text-gray-400 dark:bg-gray-800 placeholder-text-100 "
                placeholder="search..."
              />
              <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-700">
                <span className="mr-1 ml-2">Go</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 w-full bg-gray-800 opacity-25 dark:bg-gray-400 lg:hidden ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        ></div>
        <div
          className={`absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md dark:bg-gray-800 bg-blue-50 w-80 lg:hidden lg:transform-none lg:relative ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        >
          <div className="flex justify-between px-5 py-2">
          <Link href="/">
            <Image
              width={200}
              height={200}
              alt="lgo"
              src="https://kodesolution.com/html/2017/autocare-html/demo/images/logo-wide.png"
            />
          </Link>
            <button
              className="rounded-md hover:text-blue-300 lg:hidden dark:text-gray-400"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <ul className="px-5 text-left mt-7">
            <li className="pb-3">
              <a
                href=""
                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
              >
                Home
              </a>
            </li>
            <li className="pb-3">
              <a
                href=""
                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
              >
                About us
              </a>
            </li>
            <li className="pb-3">
              <a
                href=""
                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
              >
                Features
              </a>
            </li>
            <li className="pb-3">
              <a
                href=""
                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
              >
                Blog
              </a>
            </li>
            <li className="pb-3">
              <a
                href=""
                className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400"
              >
                Testimonials
              </a>
            </li>
          </ul>
          <div className="flex items-center lg:hidden mt-7">
            <div className="flex px-6 py-2 border border-gray-700 rounded-full dark:border-gray-400">
              <input
                type="text"
                className="w-full pr-4 text-sm text-gray-700 bg-blue-50 dark:text-gray-400 dark:bg-gray-800 placeholder-text-100 "
                placeholder="search..."
              />
              <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-700">
                <span className="mr-1 ml-2">Go</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
