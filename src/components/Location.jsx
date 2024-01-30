import React, { Component } from "react";
import Card from "./Card";
import Spinner from "./Spinner";

class Location extends Component {
  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=e135612bb4f8e46add41bdebe1c186ab`
    );
    this.setState({ weather: data });
  }

  render() {
    console.log(this.state);
    return this.state.weather ? (
      <Card weather={this.state.weather} />
    ) : (
      <Spinner />
    );
  }
}

export default Location;
