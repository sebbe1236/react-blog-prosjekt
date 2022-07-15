import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
function Articles() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
        <Row>
          <Col>
            <h1>Tenerife</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi voluptates laudantium
              laboriosam ipsum cum iusto obcaecati vel pariatur harum maiores saepe numquam maxime accusamus, aspernatur
              voluptatem doloremque dolorem facere.
            </p>
          </Col>
          <Col>
            <h1>Granca trip</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi voluptates laudantium
              laboriosam ipsum cum iusto obcaecati vel pariatur harum maiores saepe numquam maxime accusamus, aspernatur
              voluptatem doloremque dolorem facere.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>If you want to see more of my trips checkout the blogs page!</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Articles;
