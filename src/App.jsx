
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import SplitScreen from "./SplitScreen";
import ContactPage from "./ContactPage";
import About from "./About";


export default function App() {
  return <SplitScreen />;
}
