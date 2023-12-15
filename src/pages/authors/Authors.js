import React, { useEffect, useMemo, useState } from "react";
import BookDataService from "../../services/BookDataService";
import { Outlet, useParams } from "react-router-dom";

const Authors = (props) => {
  const params = useParams();
  //   console.log(params.id);
  const [author, setAuthor] = useState();

  useEffect(() => {
    getAuthor(params.id);
  }, [params.id]);

  const getAuthor = (id) => {
    BookDataService.getAuthorsById(id)
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {author && (
        <div>
          <img src={`${author.imageUrl}`}></img>
          <p>{author.name}</p>
          <p>{author.authorOf}</p>
          <div dangerouslySetInnerHTML={{ __html: author.biography }} />
          <p>{author.category}</p>
        </div>
      )}
    </div>
  );
};

export default Authors;
