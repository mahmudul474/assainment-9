// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    filteredProducts: [],
    searchTerm: '',
    sortTitle: '',
    sortPrice: '',
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSortTitle: (state, action) => {
      state.sortTitle = action.payload;
    },
    setSortPrice: (state, action) => {
      state.sortPrice = action.payload;
    },
  },
});

export const {
  setFilteredProducts,
  setSearchTerm,
  setSortTitle,
  setSortPrice,
} = productSlice.actions;
export const selectProduct = (state) => state.product;

export default productSlice.reducer;
