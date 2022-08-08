import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../layout/Header";
import { Link } from "react-router-dom";
function ArticlesContent({ data }) {
  return (
    <>
      <Container>
        <Row>
          <Heading heading="Some of the blogs" />
          {data.map((article) => {
            return (
              <Col key={article.id}>
                <Link to={`/blog/${article.id}`} className="link">
                  <div>
                    <h3>{article.title.rendered}</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos iusto recusandae
                      error. Enim, odio? Numquam, minus veritatis asperiores vero fugit aperiam accusamus fuga veniam
                      reprehenderit explicabo consequatur unde maiores!
                    </p>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ArticlesContent;
