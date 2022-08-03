import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecastDay({ dayForecast, unit, setUnit }) {
  function maxCelsiusTemperature() {
    let temperature = Math.round(dayForecast.temp.max);
    return `${temperature}°`;
  }

  function minCelsiusTemperature() {
    let temperature = Math.round(dayForecast.temp.min);
    return `${temperature}°`;
  }

  function maxFahrenheitTemperature() {
    let fahrenheitTemperature = (dayForecast.temp.max * 9) / 5 + 32;
    let temperature = Math.round(fahrenheitTemperature);
    return `${temperature}°`;
  }

  function minFahrenheitTemperature() {
    let fahrenheitTemperature = (dayForecast.temp.min * 9) / 5 + 32;
    let temperature = Math.round(fahrenheitTemperature);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(dayForecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherForecastDay">
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={dayForecast.weather[0].icon} size={36} />
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">
            {maxCelsiusTemperature()}
          </span>
          <span className="WeatherForecast-temperature-min">
            {minCelsiusTemperature()}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherForecastDay">
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={dayForecast.weather[0].icon} size={36} />
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">
            {maxFahrenheitTemperature()}
          </span>
          <span className="WeatherForecast-temperature-min">
            {minFahrenheitTemperature()}
          </span>
        </div>
      </div>
    );
  }
}

export default WeatherForecastDay;
