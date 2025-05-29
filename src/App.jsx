// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import SplitScreen from "./SplitScreen";
import ContactPage from "./ContactPage";
import About from "./About";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SplitScreen />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
