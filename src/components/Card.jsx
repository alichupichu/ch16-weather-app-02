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
        <div className="description" id="todayDescriptionRoot">
          Light Snow
        </div>
      </div>
    );
  }
}

export default Card;
