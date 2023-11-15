import { configureStore } from '@reduxjs/toolkit'
 
import { setupListeners } from '@reduxjs/toolkit/query'
import { featuredapi } from './api/api'
import productReducer from './features/productSlice'
 

export const store = configureStore({
  reducer: {
    product: productReducer,
[featuredapi.reducerPath] :featuredapi.reducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(featuredapi.middleware),
})

 setupListeners(store.dispatch)