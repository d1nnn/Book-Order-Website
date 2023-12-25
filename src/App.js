import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import PromotionContent from "./components/Promotion/promotion-content";
import AboutUs from "./pages/about-us/AboutUs";
import Authors from "./pages/authors/Authors";
import AuthorsList from "./pages/authorsList/AuthorsList";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import Page404 from "./pages/page404/Page404";
import Products from "./pages/products/Products";
import ProductsList from "./pages/productsList/ProductsList";
import Promotions from "./pages/promotions/Promotions";
import User from "./pages/user/User";
import WishList from "./pages/wishlist/WishList";
import BookDataService from "./services/BookDataService";

export const Context = React.createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const handleLogout = () => {
    BookDataService.logOut();
    setCurrentUser(undefined);
  };
  return (
    <Context.Provider value={[currentUser, setCurrentUser]}>
      <div>
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/promotions/:id" element={<PromotionContent />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/authors" element={<AuthorsList />} />
          <Route path="/authors/:id" element={<Authors />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Page404 />} />
          <Route path="loading" element={<Loading />} />
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
