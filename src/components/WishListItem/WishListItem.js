import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";

const WishListItem = (props) => {
  const [wishList, setWishList] = useState([]);
  const [prodId, setProdId] = useState();

  useEffect(() => {
    retrieveWishList(props.id);
    setWishList(props.id);
  }, []);

  const retrieveWishList = (id) => {
    BookDataService.getProductsById(id)
      .then((res) => {
        console.log(res);
        setWishList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const postCarts = (id) => {
    var data = {
      product: id,
    };
    BookDataService.postCarts(data);
    console.log(data);
  };

  return (
    <tbody>
      <tr key={wishList._id}>
        <td>{wishList.name}</td>
        <td>{wishList.category}</td>
        <td>
          <img className="wlimg" src={wishList.imageUrl} />
        </td>
        <td>{wishList.price}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              postCarts(id);
            }}
          >
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default WishListItem;
