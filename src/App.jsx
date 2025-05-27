// App.jsx
import "./App.css";
import SplitScreen from "./SplitScreen";
import ContactPage from "./ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplitScreen />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
