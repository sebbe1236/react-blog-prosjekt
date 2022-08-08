import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import ArticlesContent from "./ArticlesContent";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setArticles(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loadiing....</p>;
  }
  if (error) {
    return <p>An error occured</p>;
  }
  return (
    <>
      <ArticlesContent data={articles} />
    </>
  );
}

export default Articles;
