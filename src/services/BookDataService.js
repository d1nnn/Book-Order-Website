import axios from "axios";

// const url = "http://35.187.239.47:8080/authors/";

// class BookDataService {
//   static getAllAuthors() {
//     return axios.get(`http://35.187.239.47:8080/authors/`);
//   }
//   getAuthorsById(id) {
//     return axios.get(`http://35.187.239.47:8080/authors/${id}`);
//   }
//   getAllProducts() {
//     return axios.get(`http://35.187.239.47:8080/products`);
//   }
//   getProductsById(id) {
//     return axios.get(`http://35.187.239.47:8080/products/${id}`);
//   }
//   getWishList() {
//     return axios.get(`http://35.187.239.47:8080/`);
//   }
//   getCart() {
//     return axios.get(`http://35.187.239.47:8080/`);
//   }
//   getOrders() {
//     return axios.get(`http://35.187.239.47:8080/`);
//   }
// }

// export default BookDataService;

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
    return axios.get(`http://35.187.239.47:8080/products`, {
      headers: { "Session-ID": "123456789abcdef" },
    });
  },
  getProductsById: (id) => {
    return axios.get(`http://35.187.239.47:8080/products/${id}`, {
      headers: { "Session-ID": "123456789abcdef" },
    });
  },
  getWishList: () => {
    return axios.get(`http://35.187.239.47:8080/`, {
      headers: { "Session-ID": "123456789abcdef" },
    });
  },
  getCart: () => {
    return axios.get(`http://35.187.239.47:8080/`, {
      headers: { "Session-ID": "123456789abcdef" },
    });
  },
  getOrders: () => {
    return axios.get(`http://35.187.239.47:8080/`, {
      headers: { "Session-ID": "123456789abcdef" },
    });
  },
};

export default BookDataService;
