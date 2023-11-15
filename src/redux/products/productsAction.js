import axios from "axios"

const fetchProductsRequest = () => {
    return {
        type : "FETCH_PRODUCTS_REQUEST"
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type : "FETCH_PRODUCTS_SUCCESS",
        payLoad : products
    }
}

const fetchProductsFailure = (error) => {
    return {
        type : "FETCH_PRODUCTS_FAILURE",
        payLoad : error
    }
}

export const fetchProducts = () => {
    return (dispatch => {
        dispatch(fetchProductsRequest())
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const products = response.data
                dispatch(fetchProductsSuccess(products))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchProductsFailure(errorMsg))
            })
    })
}