import SearchEngine from "../Components/SearchEngine";
import "./WeatherApp.css";
import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "../Components/WeatherInfo";
import WeatherForecast from "../Components/WeatherForecast";

function WeatherApp({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  function searchCity() {
    const apiKey = "d8426e0d7454e83e722791e94527aed3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function findLocation(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;

    let apiKey = "d8426e0d7454e83e722791e94527aed3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function currentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
              <button
                className="btn btn-primary w-100"
                type="submit"
                onClick={currentPosition}
              >
                Current Location
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo weatherData={weatherData} unit={unit} setUnit={setUnit} />
        <WeatherForecast
          coordinates={weatherData.coordinates}
          unit={unit}
          setUnit={setUnit}
        />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}

export default WeatherApp;
