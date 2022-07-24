import React, { useEffect, useState } from "react";
import BlogsContent from "./BlogsContent";
import { BASE_URL } from "../../constants/api";
import Search from "./Search";

// breaking bad api: `https://www.breakingbadapi.com/api/characters?name=${query}` search funker med den.
//`https://www.breakingbadapi.com/api/characters?name=${query}`
//finn riktig endpoints for wp`apien for å funke med search, funksjonnene funker som de skal men endpoint`e for query er feil med wp.
function Blogs() {
  const [query, setQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + `?name=${query}`;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);

        const results = await response.json();
        console.log(results);
        setBlogs(results);
      } catch (err) {
        console.log(err, "Funka ikkee");
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [query]);

  if (loading) {
    return <h1>Loading.....</h1>;
  }
  if (error) {
    return <p>Something went to shhit</p>;
  }

  return (
    <>
      <div>
        <Search getQuery={(q) => setQuery(q)} />
      </div>
      <BlogsContent data={blogs} />
    </>
  );
}

export default Blogs;
