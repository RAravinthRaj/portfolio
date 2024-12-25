import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import Projects from "./Pages/Projects";
import ContactPage from './Pages/ContactPage'
import BlogPage from "./Pages/BlogPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/service" element={<SkillsPage/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
