import React, { useEffect, useMemo, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { Outlet, useParams } from "react-router-dom";
import "./Authors.css";
import Loading from "../../components/Loading/Loading";

const Authors = (props) => {
  const params = useParams();
  //   console.log(params.id);
  const [author, setAuthor] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAuthor(params.id);
  }, [params.id]);

  const getAuthor = (id) => {
    setLoading(true);
    BookDataService.getAuthorsById(id)
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {loading && <Loading />}
      {author && (
        <div className="author">
          <div className="author_left">
            <img src={`${author.imageUrl}`}></img>
          </div>
          <div className="author_content">
            <h1>{author.name}</h1>

            <h2>{author.authorOf}</h2>

            <p dangerouslySetInnerHTML={{ __html: author.biography }} />
            <p>Categories: {author.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Authors;
