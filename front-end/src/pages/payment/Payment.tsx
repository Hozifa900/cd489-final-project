import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { service, orderServices } from "../../services";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { interfaces } from "../../store";
import { Modal } from "react-bootstrap";
import "./Payment.css";
import { useState } from "react";
import { actionType } from "../../store";
export default function Payment() {
  const cart: any = useSelector<interfaces.IState>((state) => state.cart);
  const user: any = useSelector<interfaces.IState>(
    (state): interfaces.IUser => {
      return state.user;
    }
  );
  const total: number = cart.reduce(
    (init: number, cart: any) => init + cart.price * cart.quantity,
    0
  );

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => setShow(false);
  const navigate = useNavigate();

  function onApprove(data: any) {
    return fetch(`http://localhost:3007/api/orders/${data.orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((orderData) => {
        const name = orderData.payer.name.given_name;
        setMessage(
          `The payment transaction completed by ${name}, Thank you ^_^`
        );
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);

        // make new order after payment in the database
        orderServices
          .addOrder({
            status: "Pending",
            orderItems: cart,
            user: user,
          })
          .then(() => {
            setMessage(
              `Your order saved in our database. you will get your shipping in 3-7 days, Thank you ^_^`
            );
            setShow(true);
            setTimeout(() => {
              setShow(false);
              // delete the shopping cart then navigate to the main page
              dispatch({ type: actionType.CLEAR_CART });
              navigate("/");
            }, 3000);
          })
          .catch(() => {
            setTimeout(() => {
              setMessage(
                `The payment collected. But something went wrong while we storing your order. We will contact you throw your payment info. We will be happy if you call as on 3479863996, Thank you ^_^`
              );
              setShow(true);
            }, 3100);
          });

        console.log("this is order data: ", orderData);
      })
      .catch(() => {
        window.location.href = "/";
        alert("Something wrong, try again!");
      });
  }
  return (
    <div className="payment">
      <PayPalScriptProvider
        options={{
          clientId:
            "AUDvcZt2qyvBQgzCN6RXDtnkH-4bj8tNxAY-i5xgGPZh59_P6dzViYmWyXNYQj-JEVWEHFu0QrMY1fMe",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container style={{ width: "70%" }}>
          <Row>
            <Col xs={12} md={4}>
              <Card style={{ width: "100%" }}>
                <Card.Header>
                  <b>Order summary:</b>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Shipping to:{" "}
                    {user.street +
                      ", " +
                      user.city +
                      ", " +
                      user.state +
                      " " +
                      user.zip}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="pay-card-flex">
                      <span>Shipping & handling:</span>
                      <span>$0.00</span>
                    </span>
                    <span className="pay-card-flex">
                      <span>Total before tax:</span>
                      <span>{`$${total}.00`}</span>
                    </span>
                    <span className="pay-card-flex">
                      <span>Estimated tax to be collected:</span>
                      <span>$0.00</span>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="pay-card-flex">
                      <span>
                        <b>Order total:</b>
                      </span>
                      <span>
                        <b>{`$${total}.00`}</b>
                      </span>
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <PayPalButtons
                createOrder={() => service.createOrder(cart)}
                onApprove={onApprove}
              />
            </Col>
          </Row>
        </Container>
      </PayPalScriptProvider>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{message}</Modal.Body>
      </Modal>
    </div>
  );
}
