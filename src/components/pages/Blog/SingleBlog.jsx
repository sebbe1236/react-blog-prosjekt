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
        const response = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
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
      <Container>
        <div>
          <h1>{blog.name}</h1>
        </div>
      </Container>
    </>
  );
}

export default SingleBlog;
