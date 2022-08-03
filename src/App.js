import "./sass/main.scss";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home/Home";
import Blogs from "./components/pages/Blogs/Blogs";
import SingleBlog from "./components/pages/Blog/SingleBlog";
import Contact from "./components/pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
