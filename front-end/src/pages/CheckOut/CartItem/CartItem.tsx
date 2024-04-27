import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import minus from "../../../assets/minus.png";
import plus from "../../../assets/plus.png";
import "./CartItem.css";

export default function CartItem({ id, name, price, img, quantity }: any) {
  const dispatch = useDispatch();
  const handleMinus = () => {
    if (quantity === 1) handleRemove();
    else
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: id, value: quantity - 1 },
      });
  };
  const handlePlus = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: id, value: quantity + 1 },
    });
  };
  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
  return (
    <>
      <div className="cart-item">
        <img className="cart-item-image" src={img} alt="" />

        <div className="cart-item-info">
          <div className="cart-item-name">{name}</div>
          <div className="cart-item-price">Price: {price * quantity}</div>
          <div className="cart-item-qty">Qty: {quantity}</div>
        </div>
        <div className="cart-item-action">
          <div className="cart-item-icon-quan-container">
            <img
              className="cart-item-icon"
              src={minus}
              alt=""
              id="minus"
              onClick={handleMinus}
            />
            <span id="incrementCounter" className="cart-item-quantity">
              {quantity}
            </span>
            <img
              className="cart-item-icon"
              src={plus}
              alt=""
              id="plus"
              onClick={handlePlus}
            />
          </div>
          <Button
            className="cart-item-remove"
            style={{ padding: "2px 7px", borderRadius: "15px" }}
            variant="success"
            onClick={handleRemove}
          >
            Remove
          </Button>
        </div>
      </div>
    </>
  );
}
