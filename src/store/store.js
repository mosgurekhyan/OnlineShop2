import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './slices/cart/cartSlice'
import { categoryReducer } from './slices/category/categorySlice'
import { modalReducer } from './slices/modal/modalSlice'
import { productReducer } from './slices/products/productsSlice'
import { searchProductReducer } from './slices/searchProduct/searchProductSlice'

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        modal: modalReducer,
        product: productReducer,
        cart: cartReducer,
        searchProduct: searchProductReducer
    }
})

export default store