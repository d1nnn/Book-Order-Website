import React, { useState, useEffect } from "react";
import "./Authors.css";
import { NavLink } from "react-router-dom";
import BookDataService from "../../services/BookDataService";
import Loading from "../../components/Loading/Loading";
const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    retrieveAuthors();
  }, []);
  const retrieveAuthors = () => {
    setLoading(true);
    BookDataService.getAllAuthors()
      .then((res) => {
        // console.log(res.data);
        setAuthors(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(authors);
  return (
    <div>
      {loading && <Loading />}
      <section className="sanpham">
        <div className="sanpham_left" id="spl">
          {authors.map((author, i) => {
            return (
              <div key={i} className="sanpham_item">
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
