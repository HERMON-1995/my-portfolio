import React from "react";
import "./index.css"
import HomePage from "./routes/HomePage";
import ProjectsPage from "./routes/ProjectsPage";
import ContactPage from "./routes/ContactPage";
import AboutPage from "./routes/AboutPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/Projects" element={<ProjectsPage />}/>
      <Route path="/About" element={<AboutPage />}/>
      <Route path="/Contact" element={<ContactPage />}/>
    </Routes>
    </>
  );
}

export default App;
