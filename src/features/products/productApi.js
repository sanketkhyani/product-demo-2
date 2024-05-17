import axios from "axios";

export function getProductData() {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/products`)
}

export function getSingleProduct(id) {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/products/${id}`)
}

export function UserLoginAPI(values) {
    return axios.post(`${process.env.REACT_APP_ENDPOINT}/auth/login`, {
        username: values.username,
        password: values.password
    })
}