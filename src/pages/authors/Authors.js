import React, { useState, useEffect } from "react";
import "./Authors.css";
import { NavLink } from "react-router-dom";
import BookDataService from "../../services/BookDataService";
const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    retrieveAuthors();
  }, []);
  const retrieveAuthors = () => {
    BookDataService.getAllAuthors()
      .then((res) => {
        // console.log(res.data);
        setAuthors(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(authors);
  return (
    <div>
      <section className="sanpham">
        <div className="sanpham_left" id="spl">
          {authors.map((author, i) => {
            return (
              <div className="sanpham_item">
                <NavLink to={`detail/${author._id}`}>
                  <img src={`${author.imageUrl}`} alt="" />
                  <p>{author.name}</p>
                  <p>Category: {author.category}</p>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Authors;
