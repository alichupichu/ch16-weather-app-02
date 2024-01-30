import React, { Component } from "react";

class Icon extends Component {
  //state = {  }
  render() {
    return (
      <img
        src="https://openweathermap.org/img/wn/13d@2x.png"
        alt=""
        className="icon"
        id="weatherIconRoot"
        //style="display: none"
      />
    );
  }
}

export default Icon;
