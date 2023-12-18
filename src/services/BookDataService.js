import axios from "axios";

const tokenStr =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcxZTM0NmU3MDQ0NDA2OGZjM2YwOWYiLCJpYXQiOjE3MDI4Nzc2NTEsImV4cCI6MTcwMjk2NDA1MX0.LkjzRBFKZTqeNwUq9JIb3T_JFHnEXeP8ELQYujwxsIw";

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
    return axios.get(`http://35.187.239.47:8080/products`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  getProductsById: (id) => {
    // return axios.get(`http://35.187.239.47:8080/products/${id}`, {
    //   headers: { "Session-ID": "123456789abcdef" },
    // });

    return axios.get(`http://35.187.239.47:8080/products/${id}`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  getWishList: () => {
    return axios.get(`http://35.187.239.47:8080/wishlist`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  getCart: () => {
    return axios.get(`http://35.187.239.47:8080/carts`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  postCarts: (data) => {
    return axios.post(`http://35.187.239.47:8080/carts`, data, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  delCarts: (id) => {
    return axios.delete(`http://35.187.239.47:8080/carts/${id}`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
  getOrders: () => {
    return axios.get(`http://35.187.239.47:8080/orders`, {
      headers: { "Session-ID": "123456789abcdef" },
    });
  },

  postWishList: (data) => {
    return axios.post(`http://35.187.239.47:8080/wishlist`, data, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
  },
};

export default BookDataService;
