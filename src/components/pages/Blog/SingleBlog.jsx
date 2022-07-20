import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
        const response = await axios.get(`https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts/${id}`);

        const data = response.data;
        console.log(data);
        setBlog(data);
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
      <Container>
        <div>
          <h3>{blog.title.rendered}</h3>
          <p>{blog.content.rendered}</p>
        </div>
      </Container>
      ;
    </>
  );
}

export default SingleBlog;
