import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Card from "./Card";

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Weather App</h1>
        <SearchBox />
        <Card />
      </>
    );
  }
}

export default Main;
