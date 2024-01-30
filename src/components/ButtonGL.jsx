import React, { Component } from "react";

class ButtonGL extends Component {
  //state = {  }
  render() {
    return (
      <>
        <button className="geolocation-button" id="geolocationButton">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
          >
            <g>
              <path d="M49.6,87.1v-5c17.6,0,32-14.3,32-32h5C86.6,70.5,70,87.1,49.6,87.1z" />
              <path d="M49.6,87.1c-20.4,0-37-16.6-37-37h5c0,17.6,14.3,32,32,32V87.1z" />
              <path d="M86.6,50.1h-5c0-17.6-14.3-32-32-32v-5C70,13.1,86.6,29.7,86.6,50.1z" />
              <path d="M17.6,50.1h-5c0-20.4,16.6-37,37-37v5C32,18.1,17.6,32.5,17.6,50.1z" />
              <rect x="47.1" y="89.4" width="5" height="9.7" />
              <rect x="47.1" y="10.8" width="5" height="19.4" />
              <rect x="47.1" y="1.1" width="5" height="9.7" />
              <rect x="47.1" y="70" width="5" height="19.4" />
              <rect x="10.3" y="47.6" width="19.4" height="5" />
              <rect x="69.4" y="47.6" width="19.4" height="5" />
              <rect x="0.6" y="47.6" width="9.7" height="5" />
              <rect x="88.8" y="47.6" width="9.7" height="5" />
            </g>
          </svg>
        </button>
      </>
    );
  }
}

export default ButtonGL;
