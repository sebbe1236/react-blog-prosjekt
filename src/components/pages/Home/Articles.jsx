import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
function Articles() {
  return (
    <>
      <Container>
        <div className="articles_container">
          <Row>
            <Col>
              <h3>Tenerife</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi voluptates laudantium
                laboriosam ipsum cum iusto obcaecati vel pariatur harum maiores saepe numquam maxime accusamus,
                aspernatur voluptatem doloremque dolorem facere.
              </p>
            </Col>
            <Col>
              <h3>Granca trip</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi voluptates laudantium
                laboriosam ipsum cum iusto obcaecati vel pariatur harum maiores saepe numquam maxime accusamus,
                aspernatur voluptatem doloremque dolorem facere.
              </p>
            </Col>
          </Row>
          <Row className="p-3">
            <Col>
              <h4>Some quick background!</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi voluptates laudantium
                laboriosam ipsum cum iusto obcaecati vel pariatur harum maiores saepe numquam maxime accusamus,
                aspernatur voluptatem doloremque dolorem facere.
              </p>
            </Col>
            <Col>
              <h4>Some quick background!</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi voluptates laudantium
                laboriosam ipsum cum iusto obcaecati vel pariatur harum maiores saepe numquam maxime accusamus,
                aspernatur voluptatem doloremque dolorem facere.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Articles;
