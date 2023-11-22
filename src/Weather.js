import React, { useState } from "react";

function Weather(props) {
  const [weather, upweather] = useState("Sunny");
  const up = () => {
    upweather("Cloudy");
  };
  return (
    <div>
      <h1>City : {props.name}</h1>
      <h1>Weather : {weather}</h1>
      <button onClick={up}>refresh weather</button>
    </div>
  );
}

export default Weather;