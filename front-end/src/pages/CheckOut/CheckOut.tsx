import { Col, Container, Row, Button, InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EMPTY_CATR from "../../assets/empty.json";
import Lottie from "lottie-react";
import { interfaces } from "../../store";
import { useForm } from "react-hook-form";
import { statistics } from "../../services";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem/CartItem";
import "./CheckOut.css";

export default function CheckOut() {
  const navigate = useNavigate();
  const cartItems: any = useSelector<interfaces.IState>((state) => state.cart);

  const user: any = useSelector<interfaces.IState>((state) => state.user);
  //const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    statistics.addWbsiteViewStatistics("proceed-to-checkout");
    if (cartItems.length > 0) {
      dispatch({ type: "ADD_USER", payload: data });
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/pay");
    } else {
      alert("Please add item to cart first!");
    }
  };

  return (
    <div id="cart">
      <Container>
        <h3>
          Shopping Cart: <i>Free shipping special for you [3-7 days]</i>
        </h3>
        <hr />
        <Row>
          <Col xs={12} md={8} style={{ marginBottom: "50px" }}>
            {cartItems.length != 0 ? (
              cartItems.map((item: any, index: number) => {
                return (
                  <Col key={item.id} xs={12} md={12}>
                    <CartItem key={index} {...item} />
                  </Col>
                );
              })
            ) : (
              <div className="empty-cart-container">
                <Lottie className="empty-cart" animationData={EMPTY_CATR} />
              </div>
            )}
            <div className="cart-total">
              <span
                style={{
                  float: "right",
                  padding: "0px 20px",
                  fontSize: "large",
                }}
              >
                {cartItems.length != 0
                  ? "Total Price: $" +
                    cartItems.reduce(
                      (a: any, c: any) => a + c.price * c.quantity,
                      0
                    ) +
                    ".00"
                  : ""}
              </span>
            </div>
          </Col>
          <Col xs={12} md={4} style={{ marginBottom: "50px" }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" style={{ width: "90px" }}>
                  Name:
                </InputGroup.Text>
                <Form.Control
                  placeholder="full-name"
                  defaultValue={user?.name}
                  {...register("name", { required: true })}
                />
              </InputGroup>
              {errors.name && (
                <span className="error">This field is required *</span>
              )}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" style={{ width: "90px" }}>
                  Email:
                </InputGroup.Text>
                <Form.Control
                  placeholder="email@gmail.com"
                  defaultValue={user?.email}
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i, // Regular expression for email validation
                  })}
                />
              </InputGroup>
              {errors.email && (
                <span className="error">
                  This field is required email field
                </span>
              )}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" style={{ width: "90px" }}>
                  Phone: +1
                </InputGroup.Text>
                <Form.Control
                  placeholder="(012) 345-6789"
                  defaultValue={user?.phone}
                  {...register("phone", {
                    required: true,
                  })}
                />
              </InputGroup>
              {errors.phone && (
                <span className="error">This field is required *</span>
              )}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" style={{ width: "90px" }}>
                  Street:
                </InputGroup.Text>
                <Form.Control
                  placeholder="street"
                  defaultValue={user?.street}
                  {...register("street", {
                    required: true,
                  })}
                />
              </InputGroup>
              {errors.street && (
                <span className="error">This field is required *</span>
              )}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" style={{ width: "90px" }}>
                  State:
                </InputGroup.Text>
                <Form.Control
                  placeholder="state"
                  defaultValue={user?.state}
                  {...register("state", {
                    required: true,
                  })}
                />
              </InputGroup>
              {errors.state && (
                <span className="error">This field is required *</span>
              )}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" style={{ width: "90px" }}>
                  City:
                </InputGroup.Text>
                <Form.Control
                  placeholder="city"
                  defaultValue={user?.city}
                  {...register("city", {
                    required: true,
                  })}
                />
              </InputGroup>
              {errors.city && (
                <span className="error">This field is required *</span>
              )}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" style={{ width: "90px" }}>
                  ZIP:
                </InputGroup.Text>
                <Form.Control
                  placeholder="zip code"
                  defaultValue={user?.zip}
                  {...register("zip", {
                    required: true,
                  })}
                />
              </InputGroup>
              {errors.zip && (
                <span className="error">This field is required *</span>
              )}
              <div className="next-back-button">
                <Button
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                  }}
                  variant="success"
                  // onClick={handleSubmit}
                  type="submit"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
