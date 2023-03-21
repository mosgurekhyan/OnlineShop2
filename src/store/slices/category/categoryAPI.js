import { STATUS, url } from "../API/API"
import { setCategories, setCategoriesProductAll, setCategoriesProductSingle, setCategoriesStatusAll, setCategoriesStatusSingle, setStatus } from "./categorySlice"

export const fetchCategories = () => {
    return async function fetchCategoriesThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response = await fetch(`${url}categories`)
            const data = await response.json()
            dispatch(setCategories(data.slice(0, 5)))
            dispatch(setStatus(STATUS.IDLE))
        } catch(error) {
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

export const fetchProductsByCategory = (categoryID, dataType) => {
    return async function fetchCategoryProductThunk(dispatch) {
        if(dataType === 'all') dispatch(setCategoriesStatusAll(STATUS.LOADING))
        if(dataType === 'single') dispatch(setCategoriesStatusSingle(STATUS.LOADING))

        try{
            const response = await fetch(`${url}categories/${categoryID}/products`)
            const data = await response.json()
            if(dataType === 'all') {
                dispatch(setCategoriesProductAll(data.slice(0, 10)))
                dispatch(setCategoriesStatusAll(STATUS.IDLE))
            }
            if(dataType == 'single') {
                dispatch(setCategoriesProductSingle(data.slice(0, 20)))
                dispatch(setCategoriesStatusSingle(STATUS.IDLE))
            }
        } catch(error) {
            if(dataType === 'all') dispatch(setCategoriesStatusAll(STATUS.ERROR))
            if(dataType === 'single') dispatch(setCategoriesStatusSingle(STATUS.ERROR))
        }
    }
}