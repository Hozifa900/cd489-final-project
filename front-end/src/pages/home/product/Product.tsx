import { Container, Row } from "react-bootstrap";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import img4 from "../../../assets/4.png";
import img5 from "../../../assets/5.png";
import img6 from "../../../assets/6.png";
import "./Product.css";
import ProductItem from "./productItem/ProductItem";

export default function Product() {
  const products = [
    { img: img1, name: "Smoky Mountain", price: 30, productId: 1 },
    { img: img2, name: "Original BBQ", price: 30, productId: 2 },
    { img: img3, name: "Tennessee Red", price: 30, productId: 3 },
    { img: img4, name: "Champion's Blend", price: 30, productId: 4 },
    { img: img5, name: "Honey Mustard", price: 30, productId: 5 },
    { img: img6, name: "Raspberry Chipotle", price: 30, productId: 6 },
  ];
  return (
    <Container className="product" id="product">
      <Row>
        {products.map((item, index) => (
          <ProductItem key={index} {...item} />
        ))}
      </Row>
    </Container>
  );
}
