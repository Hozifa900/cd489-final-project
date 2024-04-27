import { interfaces } from "../store";
import axios from "axios";

export function createOrder(cart: interfaces.ICartItem[]) {
  return fetch("http://localhost:3007/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // use the "body" param to optionally pass additional order information
    // like product ids and quantities
    body: JSON.stringify({
      cart: cart,
    }),
  })
    .then((response) => response.json())
    .then((order) => order.id)
    .catch((e) => {
      console.log("errrror", e.message);
    });
}

export function onApprove(data: any) {
  return axios.post(`http://localhost:3007/api/orders/${data.orderID}/capture`);
  // return fetch(`http://localhost:8888/api/orders/${data.orderID}/capture`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   //   body: JSON.stringify({
  //   //     orderID: data.orderID,
  //   //   }),
  // })
  //   .then((response) => response.json())
  //   .then((orderData) => {
  //     const name = orderData.payer.name.given_name;

  //     alert(`Transaction completed by ${name}`);

  //     console.log("this is order data: ", orderData);
  //   }).catch(e=>{
  //     window.location.href = '/';
  //     alert("Something wrong, try again!")
  //   });
}
