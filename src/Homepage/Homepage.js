import React, { useState } from "react";
import Header from "../Header/Header";
import Nav from "../Navbar/Nav";
import Result from "../Result/Result";
import requests from "../request";

function Homepage() {
  const [selectedOption, setSelectedOption] = useState([
    requests.fetchTrending,
  ]);
  return (
    <div className="homepage">
      <Header activeIcon={"Home"} />
      <Nav setSelectedOption={setSelectedOption} />
      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default Homepage;
