import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
function BlogsContent({ data }) {
  return (
    <>
      <Container fluid>
        <Row>
          {data.map((content) => {
            return (
              <Col md="auto" key={content.id}>
                <Link to={`/blog/${content.char_id}`}>
                  <Card style={{ width: "25rem" }}>
                    <Card.Body>
                      <Card.Title>{content.name}</Card.Title>
                      <Card.Img variant="top" src={content.img} alt="First slide" />
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default BlogsContent;
