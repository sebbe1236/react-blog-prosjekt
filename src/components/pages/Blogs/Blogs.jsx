import React, { useEffect, useState } from "react";
import BlogsContent from "./BlogsContent";
import { BASE_URL } from "../../constants/api";
import Heading from "../../layout/Header";

// breaking bad api: `https://www.breakingbadapi.com/api/characters?name=${query}` search funker med den.
//`https://www.breakingbadapi.com/api/characters?name=${query}`

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const url = BASE_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(url);

        const results = await response.json();

        setBlogs(results);
      } catch (err) {
        console.log(err, "Funka ikkee");
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    setSearchResults(blogs.filter((slug) => slug["slug"].toLowerCase().includes(query)));
  }, [query, blogs]);

  if (loading) {
    return <h1>Loading.....</h1>;
  }
  if (error) {
    return <p>Something went to shhit</p>;
  }

  return (
    <>
      <Heading heading="Blogs" />
      <div className="searchbar_container">
        <input
          type="text"
          placeholder={"Search blogs"}
          onChange={(event) => setQuery(event.target.value.toLowerCase())}
          value={query}
        />
      </div>
      <BlogsContent data={searchResults} />
    </>
  );
}

export default Blogs;
