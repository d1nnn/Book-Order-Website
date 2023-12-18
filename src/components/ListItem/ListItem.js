import React, { useEffect, useState } from "react";
import BookDataService from "../../services/BookDataService";

const ListItem = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [id, setId] = useState(props.id2);
  const [cartId, setCardId] = useState(props.cartId);

  useEffect(() => {
    retrieveProducts(props.id2);
    setCartItem(props.id2);
    setId(props.id2);
  }, [cartId]);

  const retrieveProducts = (cartId) => {
    BookDataService.getProductsById(cartId)
      .then((res) => {
        console.log(res.data);
        setCartItem(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const delCarts = (id) => {
    console.log(id);
    BookDataService.delCarts(id)
      .then(() => {
        console.log("da del");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <tbody>
      <tr key={cartItem._id}>
        <td>{cartItem._id}</td>
        <td>{cartItem.name}</td>
        <td>{cartItem.price}</td>
        <td>
          <img className="wlimg" src={cartItem.imageUrl} />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              delCarts(cartId);
            }}
          >
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ListItem;
