import { configureStore } from '@reduxjs/toolkit'
 
import { setupListeners } from '@reduxjs/toolkit/query'
import { featuredapi } from './api/api'
 

export const store = configureStore({
  reducer: {
[featuredapi.reducerPath] :featuredapi.reducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(featuredapi.middleware),
})

 setupListeners(store.dispatch)