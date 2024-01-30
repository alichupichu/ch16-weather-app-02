import React, { Component } from "react";

class CardTop extends Component {
  //state = {  }
  render() {
    return (
      <div className="card-top">
        <h2 className="city" id="todayCityRoot">
          Weather in Paris
        </h2>
        <h1 className="temp" id="todayTempRoot">
          -1°C
        </h1>
      </div>
    );
  }
}

export default CardTop;
