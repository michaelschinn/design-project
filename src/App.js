import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "../src/pages/Home";
import Portfolio from "../src/pages/Portfolio";
import Blog from "../src/pages/Blog";
import PostWeek1 from "./pages/posts/Week_1";
import Contact from "../src/pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />}>
          <Route path="week_1" element={<PostWeek1 />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
