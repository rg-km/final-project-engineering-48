import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default function DetailArticle(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/article/category"
    );
    setProduct(response.data.data);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Row style={{ backgroundColor: "gray", padding: "10px" }}>
              <Col md={4}>
                <img
                  className="img-fluid"
                  src="https://www.pngall.com/wp-content/uploads/2016/03/Book-PNG.png"
                />
              </Col>
              <Col md={4}>
                <h4>Programing</h4>
                <h6>@jungjamal</h6>
              </Col>
              <hr className="mt-3"></hr>
            </Row>
          </Col>
          <Col md={8}>
            <Container style={{ backgroundColor: "gray", padding: "10px" }}>
              <h1 className="mb-3">Chapter 1: Whats is Programing</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum

                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
