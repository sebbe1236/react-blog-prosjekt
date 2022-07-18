import "./sass/main.scss";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home/Home";
import Blogs from "./components/pages/Blogs/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBlog from "./components/pages/Blog/SingleBlog";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
