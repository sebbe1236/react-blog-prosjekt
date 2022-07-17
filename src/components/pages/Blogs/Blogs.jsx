import React, { useEffect, useState } from "react";
import BlogsContent from "./BlogsContent";
import { BASE_URL } from "../../constants/api";

function Blogs() {
  const [query, setQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const url = BASE_URL;
  // query url kode : url + `?q=${query}`
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(url);

        const results = await response.json();
        console.log(results);
        setBlogs(results);
      } catch (err) {
        console.log(err, "Funka ikkee");
      }
    };
    fetchBlogs();
  }, [query]);

  return (
    <>
      <div>
        <input className="search" placeholder="search blogs" onChange={(e) => setQuery(e.target.value)} />
      </div>
      <BlogsContent data={blogs} />
    </>
  );
}

export default Blogs;
