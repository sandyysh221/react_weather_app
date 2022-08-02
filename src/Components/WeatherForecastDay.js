import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecastDay({ dayForecast }) {
  function maxTemperature() {
    let temperature = Math.round(dayForecast.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(dayForecast.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(dayForecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={dayForecast.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}

export default WeatherForecastDay;
