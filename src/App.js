import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Nav from "./Navbar/Nav";
import Result from "./Result/Result";
import requests from "./request";

function App() {
  const [selectedOption, setSelectedOption] = useState([
    requests.fetchTrending,
  ]);
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
