import Home from "./pages/home/Home";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
