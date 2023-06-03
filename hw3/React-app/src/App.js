import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Houses from "./components/Houses/Houses";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://thronesapi.com/api/v2/Characters");
        const data = response.data;
        setCharacters(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar />
      <h1>Exercise 03 - React</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Search" element={<Search characters={characters} />} />
          <Route exact path="/Houses" element={<Houses characters={characters} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
