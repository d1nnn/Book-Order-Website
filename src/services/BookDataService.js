import axios from "axios";

export const BookDataService = {
  getAllAuthors: () => {
    return axios.get(`http://35.187.239.47:8080/authors/`, {
      headers: { "Session-ID": "123456789abcdef" },
    });
  },
  getAuthorsById: (id) => {
    return axios.get(`http://35.187.239.47:8080/authors/${id}`, {
      headers: { "Session-ID": "123456789abcdef" },
    });
  },
  getAllProducts: () => {
    // return axios.get(`http://35.187.239.47:8080/products`, {
    //   headers: { "Session-ID": "123456789abcdef" },
    // });
    const tokenStr =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcxZTM0NmU3MDQ0NDA2OGZjM2YwOWYiLCJpYXQiOjE3MDI3NDE2OTgsImV4cCI6MTcwMjgyODA5OH0.Qyoh5KUAYVrH_gzH9cvpbFo3UFoLMb6ASRVeq24ogUg";
    return axios.get(`http://35.187.239.47:8080/products`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  getProductsById: (id) => {
    // return axios.get(`http://35.187.239.47:8080/products/${id}`, {
    //   headers: { "Session-ID": "123456789abcdef" },
    // });
    const tokenStr =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcxZTM0NmU3MDQ0NDA2OGZjM2YwOWYiLCJpYXQiOjE3MDI3NDE2OTgsImV4cCI6MTcwMjgyODA5OH0.Qyoh5KUAYVrH_gzH9cvpbFo3UFoLMb6ASRVeq24ogUg";
    return axios.get(`http://35.187.239.47:8080/products/${id}`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  getWishList: () => {
    const tokenStr =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcxZTM0NmU3MDQ0NDA2OGZjM2YwOWYiLCJpYXQiOjE3MDI3NDE2OTgsImV4cCI6MTcwMjgyODA5OH0.Qyoh5KUAYVrH_gzH9cvpbFo3UFoLMb6ASRVeq24ogUg";
    return axios.get(`http://35.187.239.47:8080/wishlist`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  getCart: () => {
    const tokenStr =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcxZTM0NmU3MDQ0NDA2OGZjM2YwOWYiLCJpYXQiOjE3MDI3NDE2OTgsImV4cCI6MTcwMjgyODA5OH0.Qyoh5KUAYVrH_gzH9cvpbFo3UFoLMb6ASRVeq24ogUg";
    return axios.get(`http://35.187.239.47:8080/carts`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  getOrders: () => {
    return axios.get(`http://35.187.239.47:8080/orders`, {
      headers: { "Session-ID": "123456789abcdef" },
    });
  },
  postCarts: (data) => {
    const tokenStr =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcxZTM0NmU3MDQ0NDA2OGZjM2YwOWYiLCJpYXQiOjE3MDI3NDE2OTgsImV4cCI6MTcwMjgyODA5OH0.Qyoh5KUAYVrH_gzH9cvpbFo3UFoLMb6ASRVeq24ogUg";
    return axios.post(`http://35.187.239.47:8080/carts`, data, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  postWishList: (data) => {
    const tokenStr =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcxZTM0NmU3MDQ0NDA2OGZjM2YwOWYiLCJpYXQiOjE3MDI3NDE2OTgsImV4cCI6MTcwMjgyODA5OH0.Qyoh5KUAYVrH_gzH9cvpbFo3UFoLMb6ASRVeq24ogUg";
    return axios.post(`http://35.187.239.47:8080/wishlist`, data, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
};

export default BookDataService;
