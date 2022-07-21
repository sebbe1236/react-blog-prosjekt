import React, { useEffect, useState } from "react";
import BlogsContent from "./BlogsContent";
import { BASE_URL } from "../../constants/api";
import Search from "./Search";
// query url kode : url + `?q=${query}`
//Poteennsuelt legg til /posts?_embed&?q=${query} som url for å få search til å funnke
//Prøv med strapi api iløpet av uka evenntuelt
//teste denn hher evt: https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
//kildde brukt nå:https://www.youtube.com/watch?v=MY6ZZIn93V8&t=1214s&ab_channel=LamaDev

function Blogs() {
  const [query, setQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + `&?=${query}`;

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
