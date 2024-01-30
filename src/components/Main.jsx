import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Card from "./Card";

class Main extends Component {
  //state = {};
  render() {
    return (
      <div>
        <h1 className="sub-header">Weather App</h1>
        <SearchBox />
        <Card />
      </div>
    );
  }
}

export default Main;
