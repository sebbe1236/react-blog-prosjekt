import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

function SingleBlog() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const url = BASE_URL;

  useEffect(() => {
    const singleFetch = async () => {
      try {
        const response = await axios.get(`https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts/${id}?_embed`);
        const result = response.data;
        console.log(result);

        setBlog(result);
      } catch (error) {
        console.log(error.message);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    singleFetch();
  }, []);

  if (loading) {
    return <p>LOadinng....</p>;
  }
  if (error) {
    return <p>Fu wp api</p>;
  }

  return (
    <>
      <Container className="container-lg text-center">
        <Col>
          <h2>{blog.title.rendered}</h2>

          <Image fluid src={blog._embedded["wp:featuredmedia"]["0"].source_url} alt="test" />
          <h4>{blog.slug}</h4>
          <p>{blog.content.rendered}</p>
        </Col>
      </Container>
    </>
  );
}

export default SingleBlog;
