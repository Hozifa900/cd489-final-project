import { Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { statistics } from "../../../../services";
import cart from "../../../../assets/cart.png";
import { scrollToCart } from "../../../../helper/scrolling";

export default function ProductItem({ img, name, price, productId }: any) {
  const dispatch = useDispatch();

  const addToCar = () => {
    statistics.addWbsiteViewStatistics("add-to-cart");
    scrollToCart();
    dispatch({
      type: "ADD_TO_CART",
      payload: { id: productId, name, price, quantity: 1, img },
    });
  };
  return (
    <Col xs={6} md={2}>
      <div className="product-container">
        <img src={img} className="product-img" />
        <h5 className="product-title">{name}</h5>
        <Button className="product-button" variant="success" onClick={addToCar}>
          Add to
          <img src={cart} style={{ width: "20px", margin: "5px" }} />
        </Button>
      </div>
    </Col>
  );
}
