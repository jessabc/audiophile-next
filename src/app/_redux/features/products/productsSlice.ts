import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../../interfaces'


export interface ProductsState {
  value: IProduct[]
}

const initialState: ProductsState = {
  value: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAllProducts } = productsSlice.actions

export default productsSlice.reducer