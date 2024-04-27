import { Button, Col, Container, Row } from "react-bootstrap";
import { scrollToProduct } from "../../../helper/scrolling";
import { statistics } from "../../../services";
import "./Second.css";
export default function Second() {
  const handleStatistics = () => {
    scrollToProduct();
    statistics.addWbsiteViewStatistics("order-now");
  };
  return (
    <div className="second">
      <Container>
        <Row>
          <Col xs={12} md={6}></Col>
          <Col xs={12} md={6} className="second-col-two">
            <br />
            <br />
            <br />
            <Button
              variant="success"
              className="second-button"
              onClick={handleStatistics}
            >
              Order Now
            </Button>
            <p className="second-text">
              Conveniently shop for Blues Hog products directly from our website
              and have them delivered straight to your doorstep. Choose from a
              variety of sizes and flavors to suit your preferences and needs.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
