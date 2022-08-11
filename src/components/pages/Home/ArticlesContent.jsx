import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../layout/Header";
import { Link } from "react-router-dom";
function ArticlesContent({ data }) {
  return (
    <>
      <Container fluid>
        <Row>
          <Heading heading="Some of the blogs" />
          {data.map((article) => {
            return (
              <Col key={article.id}>
                <Link to={`/blog/${article.id}`} className="link">
                  <h3>{article.title.rendered}</h3>{" "}
                </Link>
                <p>
                  Lorem, ipsum dolor sit amen consectetur adipisicing elis. Except pianissimos inst recusance error.
                  Esim, odiv? Nummular, minus verity's asperity's vers fugit Priam accusers fug venine reprehended
                  explicated consectetur nuder maigret!
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ArticlesContent;
