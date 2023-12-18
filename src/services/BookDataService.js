import axios from "axios";
import { url, get_header } from "../settings";

export const BookDataService = {
  getAllAuthors: async () => {
    return axios.get(`${url}/authors/`, {
      headers: await get_header(),
    });
  },
  getAuthorsById: async (id) => {
    return axios.get(`${url}/authors/${id}`, {
      headers: await get_header(),
    });
  },
  getAllProducts: async () => {
    return axios.get(`${url}/products`, {
      headers: await get_header(),
    });
  },
  getProductsById: async (id) => {
    return axios.get(`${url}/products/${id}`, {
      headers: await get_header(),
    });
  },
  getWishList: async () => {
    return axios.get(`${url}/wishlist`, {
      headers: await get_header(),
    });
  },
  getCart: async () => {
    return await axios.get(`${url}/carts`, {
      headers: await get_header(),
    });
  },
  getOrders: async () => {
    return axios.get(`${url}/orders`, {
      headers: await get_header(),
    });
  },
  postCarts: async (data) => {
    return axios.post(`${url}/carts`, data, {
      headers: await get_header(),
    });
  },
  postWishList: async (data) => {
    return axios.post(`${url}/wishlist`, data, {
      headers: await get_header(),
    });
  },

  logIn: async (data) => {
    return await axios.post(`${url}/auth/login`, data);
  },
  signUp: async (data) => {
    return await axios.post(`${url}/users`, data, {
      headers: await get_header(),
    });
  },
};

export default BookDataService;
