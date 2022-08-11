import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
/**
 * Source used to find a solution for displaying a message if no search result found: https://www.kindacode.com/article/how-to-create-a-filter-search-list-in-react/
 *
 */
function BlogsContent({ data }) {
  return (
    <>
      <Container className="text-center container-md">
        <div className="blogs_container">
          {data && data.length > 0 ? (
            data.map((content) => (
              <Col key={content.id} className="m-3 p-5 link">
                <Link to={`/blog/${content.id}`}>
                  <h4>{content.title.rendered}</h4>
                  <img
                    className="w-100"
                    src={content._embedded["wp:featuredmedia"]["0"].source_url}
                    alt="First slide"
                  />
                </Link>
              </Col>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
        </div>
      </Container>
    </>
  );
}

export default BlogsContent;
