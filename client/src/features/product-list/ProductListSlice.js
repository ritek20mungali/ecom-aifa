import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchProductsByFilters,fetchBrands,fetchCategory,fetchProductById } from './ProductListAPI';

const initialState = {
  products: [],
  status: 'idle',
  totalItems:0,
  brands:[],
  category:[],
  selectedProduct:null

};

export const fetchAllProductsAsync = createAsyncThunk('product/fetchAllProducts', 
async () => {
  const response = await fetchAllProducts();
  return response.data;
});

export const fetchProductByIdAsync = createAsyncThunk
('product/fetchProductById', 
async (id) => {
  const response = await fetchProductById(id);
  return response.data;
});

export const fetchProductsByFiltersAsync = createAsyncThunk('product/fetchProductsByFilters', 
async ({filter,sort,pagination}) => {
  const response = await fetchProductsByFilters(filter,sort,pagination);
  return response.data;
});

export const fetchCategoryAsync = createAsyncThunk('product/fetchCategory', 
async () => {
  const response = await fetchCategory();
  return response.data;
});

export const fetchBrandsAsync = createAsyncThunk('product/fetchBrands', 
async () => {
  const response = await fetchBrands();
  return response.data;
});


export const ProductListSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Changed 'idle' to 'succeeded'
        state.products = action.payload;
      })
      .addCase(fetchAllProductsAsync.rejected, (state) => {
        state.status = 'failed'; // Handle rejected state if needed
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Changed 'idle' to 'succeeded'
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchProductsByFiltersAsync.rejected, (state) => {
        state.status = 'failed'; // Handle rejected state if needed
      })
      .addCase(fetchCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Changed 'idle' to 'succeeded'
        state.category = action.payload;
        
      })
      .addCase(fetchCategoryAsync.rejected, (state) => {
        state.status = 'failed'; // Handle rejected state if needed
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Changed 'idle' to 'succeeded'
        state.brands = action.payload;
        
      })
      .addCase(fetchBrandsAsync.rejected, (state) => {
        state.status = 'failed'; // Handle rejected state if needed
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Changed 'idle' to 'succeeded'
        state.selectedProduct = action.payload;
        
      })
      .addCase(fetchProductByIdAsync.rejected, (state) => {
        state.status = 'failed'; // Handle rejected state if needed
      })
  },
});

export const selectProducts = (state) => state.product.products;
 // Changed the selector name
 export const selectTotalItems = (state) => state.product.totalItems;
 export const selectBrands = (state) => state.product.brands;
 export const selectCategory = (state) => state.product.category;
 export const selectProductById = (state) => state.product.selectedProduct;

export default ProductListSlice.reducer;
