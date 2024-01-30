import React, { Component } from "react";
import Button from "./Button";
import ButtonGL from "./ButtonGL";

class SearchBox extends Component {
  //state = {  }
  render() {
    return (
      <>
        <div className="location-search">
          <input
            type="text"
            placeholder="Enter a city"
            id="citySearchInput"
            className="search-input"
          />
          <Button />
          <ButtonGL />
        </div>
      </>
    );
  }
}

export default SearchBox;
