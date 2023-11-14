import Layout from '@/components/layout/layout'
import UserDashboardLayout from '@/components/layout/userLayout/userLayot'
import React from 'react'

export default function Dashbord() {
  return (
 <> 
 
 <Layout>
  <UserDashboardLayout>
 <section class="px-4 pt-6">
 <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
     <div class="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
         <div class="flex items-center justify-between mb-3">
             <p class="text-4xl font-bold dark:text-gray-300">$1239</p>
             <button class="text-gray-600 dark:text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                     <path
                         d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                 </svg>
             </button>
         </div>
         <div class="flex items-center justify-between mb-3">
             <h2 class="font-medium text-gray-500 dark:text-gray-400">Campaign </h2>
             <span
                 class="inline-block px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">58%</span>
         </div>
         <div class="relative w-full h-1 mb-2 bg-gray-200 rounded">
             <div class="absolute top-0 left-0 w-4/6 h-full bg-blue-500 rounded ">
             </div>
         </div>
         <p class="text-xs text-gray-500 dark:text-gray-400">since last month</p>
     </div>
     <div class="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
         <div class="flex items-center justify-between mb-3">
             <p class="text-4xl font-bold dark:text-gray-300">$1,00</p>
             <button class="text-gray-600 dark:text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                     <path
                         d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                 </svg>
             </button>
         </div>
         <div class="flex items-center justify-between mb-3">
             <h2 class="font-medium text-gray-500 dark:text-gray-400">Deals</h2>
             <span
                 class="inline-block px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">80%</span>
         </div>
         <div class="relative w-full h-1 mb-2 bg-gray-200 rounded">
             <div class="absolute top-0 left-0 w-10/12 h-full bg-red-500 rounded ">
             </div>
         </div>
         <p class="text-xs text-gray-500 dark:text-gray-400">since last month</p>
     </div>
     <div class="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
         <div class="flex items-center justify-between mb-3">
             <p class="text-4xl font-bold dark:text-gray-300">$289</p>
             <button class="text-gray-600 dark:text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                     <path
                         d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                 </svg>
             </button>
         </div>
         <div class="flex items-center justify-between mb-3">
             <h2 class="font-medium text-gray-500 dark:text-gray-400">Booked Revenue</h2>
             <span
                 class="inline-block px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">95%</span>
         </div>
         <div class="relative w-full h-1 mb-2 bg-gray-200 rounded">
             <div class="absolute top-0 left-0 w-11/12 h-full bg-green-500 rounded ">
             </div>
         </div>
         <p class="text-xs text-gray-500 dark:text-gray-400">since last month</p>
     </div>
 </div>
</section>
<section class="px-4 py-6">
 <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
     <div class="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900 ">
         <div class="flex flex-wrap justify-between mb-6">
             <h2
                 class="py-1 text-xl font-semibold capitalize border-b border-blue-500 dark:text-gray-400">
                 Recent Orders
             </h2>
             <a href="" class="px-4 py-2 text-sm text-white capitalize bg-blue-500 rounded ">view
                 all</a>
         </div>
         <div>
             <div class="flex justify-between mb-4">
                 <div class="flex gap-2">
                     <img src="https://i.postimg.cc/x8LtrkfV/kenny-eliason-HIz-Gn9-FZDFU-unsplash.jpg"
                         alt="" class="object-cover w-14 h-14" />
                     <div class="">
                         <h2 class="my-1 text-lg font-medium dark:text-gray-400">
                             1800X Zoom Level Nikon Lense
                         </h2>
                         <div class="text-gray-400">Ordered</div>
                     </div>
                 </div>
                 <div class=""><span class="font-medium text-blue-400">Qty:1</span></div>
             </div>
             <div class="flex justify-between mb-4">
                 <div class="flex gap-2">
                     <img src="https://i.postimg.cc/K8qmN64m/pexels-javon-swaby-2783873.jpg" alt=""
                         class="object-cover w-14 h-14" />
                     <div class="">
                         <h2 class="my-1 text-lg font-medium dark:text-gray-400">
                             Watches
                         </h2>
                         <div class="text-gray-400">Ordered</div>
                     </div>
                 </div>
                 <div class=""><span class="font-medium text-blue-400">Qty:1</span></div>
             </div>
             <div class="flex justify-between mb-4">
                 <div class="flex gap-2">
                     <img src="https://i.postimg.cc/sgKB6VR6/ryan-plomp-a-Ctb-RTwu-M-unsplash-1.jpg"
                         alt="" class="object-cover w-14 h-14" />
                     <div class="">
                         <h2 class="my-1 text-lg font-medium dark:text-gray-400">
                             Shoes for men
                         </h2>
                         <div class="text-gray-400">Ordered</div>
                     </div>
                 </div>
                 <div class=""><span class="font-medium text-blue-400">Qty:1</span></div>
             </div>
             <div class="flex justify-between ">
                 <div class="flex gap-2">
                     <img src="https://i.postimg.cc/XqBnTJBL/pink-sweater-front.jpg" alt=""
                         class="object-cover w-14 h-14" />
                     <div class="">
                         <h2 class="my-1 text-lg font-medium dark:text-gray-400">
                             T-shirt for ladies
                         </h2>
                         <div class="text-gray-400">Ordered</div>
                     </div>
                 </div>
                 <div class=""><span class="font-medium text-blue-400">Qty:1</span></div>
             </div>
         </div>
     </div>
     <div class="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900">
         <div class="flex flex-wrap justify-start mb-6">
             <h2
                 class="py-1 text-xl font-semibold capitalize border-b border-blue-500 dark:text-gray-400">
                 Calendar</h2>
         </div>
         <div>
             <div class="flex items-center justify-between px-4">
                 <span tabindex="0"
                     class="text-base font-bold text-gray-800 focus:outline-none dark:text-gray-100">January
                     2022</span>
                 <div class="flex items-center">
                     <button aria-label="calendar backward"
                         class="text-gray-800 focus:text-gray-400 hover:text-gray-400 dark:text-gray-100">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                             <path fill-rule="evenodd"
                                 d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                         </svg>
                     </button>
                     <button aria-label="calendar forward"
                         class="ml-3 text-gray-800 focus:text-gray-400 hover:text-gray-400 dark:text-gray-100">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                             <path fill-rule="evenodd"
                                 d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                         </svg>
                     </button>
                 </div>
             </div>
             <div class="flex items-center justify-between pt-6 overflow-x-auto">
                 <table class="w-full">
                     <thead>
                         <tr>
                             <th>
                                 <div class="flex justify-center w-full">
                                     <p
                                         class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                         Su</p>
                                 </div>
                             </th>
                             <th>
                                 <div class="flex justify-center w-full">
                                     <p
                                         class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                         Mo</p>
                                 </div>
                             </th>
                             <th>
                                 <div class="flex justify-center w-full">
                                     <p
                                         class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                         Tu</p>
                                 </div>
                             </th>
                             <th>
                                 <div class="flex justify-center w-full">
                                     <p
                                         class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                         We</p>
                                 </div>
                             </th>
                             <th>
                                 <div class="flex justify-center w-full">
                                     <p
                                         class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                         Th</p>
                                 </div>
                             </th>
                             <th>
                                 <div class="flex justify-center w-full">
                                     <p
                                         class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                         Fr</p>
                                 </div>
                             </th>
                             <th>
                                 <div class="flex justify-center w-full">
                                     <p
                                         class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                         Sa</p>
                                 </div>
                             </th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td class="pt-6">
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                 </div>
                             </td>
                             <td class="pt-6">
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                 </div>
                             </td>
                             <td class="pt-6">
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         1
                                     </p>
                                 </div>
                             </td>
                             <td class="pt-6">
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         2
                                     </p>
                                 </div>
                             </td>
                             <td class="pt-6">
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p class="text-base text-gray-500 dark:text-gray-400">3</p>
                                 </div>
                             </td>
                             <td class="pt-6">
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p class="text-base text-gray-500 dark:text-gray-400">4</p>
                                 </div>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         5
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         6
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         7
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         8
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         9
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p class="text-base text-gray-500 dark:text-gray-400">10</p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p class="text-base text-gray-500 dark:text-gray-400">11</p>
                                 </div>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         12
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         13
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         14
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         15
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         16
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p class="text-base text-gray-500 dark:text-gray-400">17</p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p class="text-base text-gray-500 dark:text-gray-400">18</p>
                                 </div>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         19
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="w-full h-full">
                                     <div
                                         class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                         <a role="link" tabindex="0"
                                             class="flex items-center justify-center w-8 h-8 text-base font-medium text-white bg-blue-600 rounded hover:bg-blue-500 ">20</a>
                                     </div>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         21
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         22
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         23
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p class="text-base text-gray-500 dark:text-gray-400">24</p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p class="text-base text-gray-500 dark:text-gray-400">25</p>
                                 </div>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         26
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         27
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         28
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         29
                                     </p>
                                 </div>
                             </td>
                             <td>
                                 <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                                     <p
                                         class="text-base font-medium text-gray-500 dark:text-gray-400">
                                         30
                                     </p>
                                 </div>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </div>
         </div>
     </div>
 </div>
</section>



</UserDashboardLayout>
 </Layout>
 
</>
  )
}
