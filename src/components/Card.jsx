import React, { Component } from "react";
import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import Spinner from "./Spinner";

class Card extends Component {
  //state = {  }
  render() {
    return (
      <div className="weather-card section" id="cardBackground">
        <CardTop />
        <CardBottom />
      </div>
    );
  }
}

export default Card;
