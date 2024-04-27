import COMING_SOON from "../../assets/coming-soon.json";
import { useEffect } from "react";
import { getOrders } from "../../services/orderService";
import Lottie from "lottie-react";
import "./Order.css";
export default function Order() {
  useEffect(() => {
    getOrders().then((data): any => {
      console.log(data, "hozifa");
    });
  }, []);
  return (
    <div className="order-page">
      <h6 className="order-page-text">
        This feature is not available now contact:{" "}
        <a href="mailto: hozifa.dev@gmail.com">hozifa.dev@gmail.com</a> for
        tracking the order
      </h6>
      <Lottie className="coming-soon" animationData={COMING_SOON} />
    </div>
  );
}
