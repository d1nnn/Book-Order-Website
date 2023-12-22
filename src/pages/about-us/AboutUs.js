import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div>
      <h1>Overview</h1>
      <hr />
      <div className="container">
        <div className="content-flex">
          <h2>BaBook Publishing Plc.</h2>
          <img src={require("../../assets/intro.jpg")} />
          <p>
            BaBook book selling website is a website specializing in providing
            the newest and hottest books on the market. We always continuously
            update new books, best-selling books, promotional books,... to bring
            customers diverse and rich choices. The Babook website is designed
            with a friendly, easy-to-use interface.
            <br></br>Products are classified into categories and genres to help
            customers easily find the products they need. In addition, we also
            provide a lot of useful information about books, such as content
            summaries, reviews,... to help customers have more information
            before purchasing.
            <br />
            We are committed to providing customers with quality products at
            reasonable prices. We also offer many attractive promotions and
            incentives so customers can shop economically.
            <br></br>
            At Babook, we are a crowd of book lovers, from those who are
            passionate about reading in their spare time to those who dream of
            building a vibrant reading community. We believe that books are not
            only a source of inspiration but also a source of positive energy.
          </p>
        </div>
        <hr />
        <div className="content-flex">
          <h2>Vision</h2>
          <p>
            We believe that books are the door to a new world, a source of
            encouragement and an endless source of inspiration. Our vision is
            not just to build an online bookstore but to create a vibrant
            reading community, where everyone has the opportunity to discover,
            share and connect through every book page.<br></br> Becoming the
            leading reputable book selling website in Vietnam, bringing
            customers great shopping experiences.
          </p>
          <img src={require("../../assets/3benefit.webp")} />
        </div>
        <hr />
        <div className="content-flex">
          <h2>Mission</h2>
          <img src={require("../../assets/book-banner.jpg")} />
          <p>
            Contributing to the development of Vietnamese reading culture,
            helping people easily access knowledge.
            <br></br>Our mission is simple: To create an online space where
            people can easily discover, share and immerse themselves in the
            world of each book. We are committed to bringing you not only
            excellent books but also a special and unforgettable experience.
          </p>
        </div>
        <hr />
        <div className="content-block">
          <h2>Core values</h2>
          <p>
            <ol>
              <li>
                Quality: We always put product quality first, ensuring to bring
                customers the best products.
              </li>
              <li>
                Price: We are committed to providing products with the most
                reasonable and competitive prices on the market.
              </li>
              <li>
                Service: We provide dedicated, thoughtful customer service,
                helping customers have great shopping experiences.
              </li>
            </ol>
          </p>
        </div>
        <hr />
        <div className="content-block">
          <h2>Staff</h2>
          <p>
            BaBook's staff are young, enthusiastic people who are passionate
            about books. We always do our best to bring customers great shopping
            experiences. Boasting a team of passionate people with diversity and
            deep knowledge of culture and art. We always try to update and
            select the best works to bring you a memorable reading experience.
          </p>
        </div>
        <hr />
        <div className="content-block">
          <h2>Contact</h2>
          <p>
            We always appreciate your feedback. If you have any questions,
            comments or simply want to chat about books, please contact us. Our
            support team is always willing to listen.
            <br></br> If you have any questions or need assistance, please
            contact us with the following information:
            <ol>
              <li>Hotline: 090 238 3524</li>
              <li>Email: babook@gmail.com</li>
              <li>Website: babook.com.vn</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
