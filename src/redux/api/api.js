 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 
export const featuredapi = createApi({
  reducerPath: 'featuredapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getFeatures: builder.query({
      query: () => `features`,
    }),
    getServices: builder.query({
      query: () => `services`,
    }),
    getFilteredProducts: builder.query({
      query: ({ filter, sort, page }) => `products?filter=${filter}&sort=${sort}&page=${page}`,
    }),
    searchProducts: builder.query({
      query: ({ searchTerm, page }) => `products?search=${searchTerm}&page=${page}`,
    }),






  }),
})


export const { useGetFeaturesQuery, useGetServicesQuery, useGetFilteredProductsQuery, useSearchProductsQuery } =featuredapi