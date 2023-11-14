 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 
export const featuredapi = createApi({
  reducerPath: 'featuredapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getFeatures: builder.query({
      query: () => `features`,
    }),
  }),
})


export const { useGetFeaturesQuery } =featuredapi