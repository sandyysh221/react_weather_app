import React from "react";
import FormattedDate from "../Components/FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

function WeatherInfo({ weatherData }) {
  return (
    <div className="WeatherInfo">
      <h1>{weatherData.city}</h1>
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
              <WeatherIcon code={weatherData.icon} />
            </div>
            <div className="d-flex">
              <WeatherTemperature celsius={weatherData.temperature} />
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
