import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer_container">
        <div>
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
        </div>
        <div className="links_container">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
