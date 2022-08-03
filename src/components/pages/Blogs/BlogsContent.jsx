import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function BlogsContent({ data }) {
  return (
    <>
      <Container className="text-center container-md">
        <div className="blogs_container">
          {data.map((content) => {
            return (
              <Col key={content.id} className="m-3 p-5">
                <Link to={`/blog/${content.id}`}>
                  <h4>{content.title.rendered}</h4>
                  <img
                    className="w-100"
                    src={content._embedded["wp:featuredmedia"]["0"].source_url}
                    alt="First slide"
                  />
                </Link>
              </Col>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default BlogsContent;
