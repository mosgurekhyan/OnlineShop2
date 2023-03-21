import { STATUS, url } from "../API/API"
import { setProducts, setStatus } from "./productsSlice"

export const fetchProducts = () => {
    return async function fetchProductThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response = await fetch(`${url}products`)
            const data = await response.json()
            dispatch(setProducts(data))
            dispatch(setStatus(STATUS.IDLE))
        } catch(error) {
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}