import React from "react";
import FormattedDate from "../Components/FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

function WeatherInfo({ weatherData, unit, setUnit }) {
  let flagUrl = `https://countryflagsapi.com/svg/${weatherData.country}`;

  return (
    <div className="WeatherInfo">
      <h1>
        {weatherData.city} <img src={flagUrl} width="80" height="60" />
      </h1>
      <ul>
        <li>
          <FormattedDate date={weatherData.date} />
        </li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="d-flex">
              <WeatherIcon code={weatherData.icon} size={62} />
            </div>
            <div className="d-flex">
              <WeatherTemperature
                celsius={weatherData.temperature}
                unit={unit}
                setUnit={setUnit}
                fahrenheit={(weatherData.temperature * 9) / 5 + 32}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
