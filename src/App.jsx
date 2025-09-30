import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import WebDevLearning from "./pages/WebDevLearning";
import WebConsultant from "./pages/WebConsultant";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/webdevlearning" element={<WebDevLearning />} />
        <Route path="/program/webconsultant" element={<WebConsultant />} />
      </Routes>
    </Router>);
};

export default App;
