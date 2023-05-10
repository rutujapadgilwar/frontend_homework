import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Houses from "./components/Houses/Houses";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar />
      <h1>Exercise 03 - React</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Search" element={<Search />} />
          <Route exact path="/Houses" element={<Houses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
