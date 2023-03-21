import { createSlice } from "@reduxjs/toolkit"

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if(cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: fetchFromLocalStorage(),
        totalItems: 0,
        totalAmount: 0,
        deliveryCharge: 1000
    },
    reducers: {
        addToCart(state, {payload}) {
            const tempItem = state.data.find(e => e.id === payload.id)
            if(tempItem) {
                const tempCart = state.data.map(e => {
                    if(e.id === payload.id) {
                        let newQty = e.quantity  + payload.quantity
                        let newTotalPrice = newQty * e.price
                        return {
                            ...e, quantity: newQty, totalPrice: newTotalPrice
                        }
                    } else {
                        return e
                    }
                })
                state.data = tempCart
                storeInLocalStorage(state.data)
            } else {
                state.data.push(payload)
                storeInLocalStorage(state.data)
            }
        },
        removeFromCart(state, {payload}) {
            const tempCart = state.data.filter(e => e.id !== payload)
            state.data = tempCart
            storeInLocalStorage(state.data)
        },
        clearCart(state) {
            state.data = []
            storeInLocalStorage(state.data)
        },
        getCartTotal(state) {
            state.totalAmount = state.data.reduce((e, i) => {
                return e += i.totalPrice
            }, 0)
            state.totalItems = state.data.length
        },
        toggleCartQty(state, {payload}) {
            const tempCart = state.data.map(e => {
                if(e.id === payload.id) {
                    let tempQty = e.quantity
                    let tempTotalPrice = e.totalPrice
                    if(payload.type === 'INC') {
                        tempQty++
                        tempTotalPrice = tempQty * e.price
                    }
                    if(payload.type === 'DEC') {
                        tempQty--
                        if(tempQty < 1) tempQty = 1
                        tempTotalPrice = tempQty * e.price
                    }
                    return {
                        ...e, quantity: tempQty, totalPrice: tempTotalPrice
                    }
                } else {
                    return e
                }
            })
            state.data = tempCart
            storeInLocalStorage(state.data)
        }
    } 
})
export const selectCart = state => state.cart

export const {getCartTotal, addToCart, removeFromCart, clearCart, toggleCartQty} = cartSlice.actions

export const cartReducer = cartSlice.reducer