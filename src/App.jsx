import { useState } from "react";
import reactLogo from "./assets/react.svg";
import * as bootstrap from "bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.scss";
import Home from "./routes/Home";
import Form from "./routes/Form";
import Posts from "./routes/Posts";
import Navbar from "./components/Home/Navbar";
// import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
