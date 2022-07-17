import React from "react";
import Card from "react-bootstrap/Card";
function BlogsContent({ data }) {
  return (
    <>
      {data.map((content) => {
        return (
          <Card key={content.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{content.title.rendered}</Card.Title>
              <Card.Img variant="top" src={content._embedded["wp:featuredmedia"]["0"].source_url} alt="First slide" />
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default BlogsContent;
