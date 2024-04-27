import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { interfaces, actionType } from "../../store";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { statistics } from "../../services";

import "./Header.css";
import cart from "../../assets/trolley.png";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts: any = useSelector<interfaces.IState>((state) => state.cart);
  let count: number = 0;
  if (carts) {
    count = carts.length;
  }

  useEffect(() => {
    let cart, user;
    const cashedCart = localStorage.getItem("cart");
    const cashedUser = localStorage.getItem("blues-user");

    if (cashedCart != null) {
      cart = JSON.parse(cashedCart);
      dispatch({ type: actionType.REPLACE_CART, payload: cart });
    }
    if (cashedUser != null) {
      user = JSON.parse(cashedUser);
      dispatch({ type: actionType.REPLACE_USER, payload: user });
    }

    statistics.addWbsiteViewStatistics("view");
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      fixed="top"
      className="bg-body-tertiary header"
    >
      <Container fluid>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Blues-Hog-Original
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link
              style={{ marginTop: "5px" }}
              onClick={() => navigate("/order")}
            >
              Order
            </Nav.Link>
            <Nav.Link
              className="header-cart-container"
              onClick={() => navigate("/cart")}
            >
              <span style={{ marginTop: "-15px" }}>Cart</span>
              <img src={cart} className="header-cart" />
              <span
                className="cart-count"
                id="counter"
                //name="counter"
              >
                {count}
              </span>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
