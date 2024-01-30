import React, { Component } from "react";

class CardBottom extends Component {
  //state = {  }
  render() {
    return (
      <div class="card-bottom">
        <div className="max-min-temp">
          <div className="max-caption">High</div>
          <div className="max-temp" id="todayTempMaxRoot">
            0°C
          </div>
          <div className="min-caption">Low</div>
          <div className="min-temp" id="todayTempMinRoot">
            -4°C
          </div>
        </div>
        <div className="description" id="todayDescriptionRoot">
          Light Snow
        </div>
      </div>
    );
  }
}

export default CardBottom;
