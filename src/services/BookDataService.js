import axios from "axios";

class BookDataService {
  getAllAuthors() {
    return axios.get(`https://bookstorebe-66ez5bhl.b4a.run/`);
  }
  getAuthorsById(id) {
    return axios.get(`https://bookstorebe-66ez5bhl.b4a.run/`);
  }
  getAllProducts() {
    return axios.get(`https://bookstorebe-66ez5bhl.b4a.run/`);
  }
  getProductsById(id) {
    return axios.get(`https://bookstorebe-66ez5bhl.b4a.run/`);
  }
  getWishList() {
    return axios.get(`https://bookstorebe-66ez5bhl.b4a.run/`);
  }
  getCart() {
    return axios.get(`https://bookstorebe-66ez5bhl.b4a.run/`);
  }
  getOrders() {
    return axios.get(`https://bookstorebe-66ez5bhl.b4a.run/`);
  }
}

export default BookDataService;
