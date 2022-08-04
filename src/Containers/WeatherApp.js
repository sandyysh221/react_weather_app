import SearchEngine from "../Components/SearchEngine";
import "./WeatherApp.css";
import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "../Components/WeatherInfo";
import WeatherForecast from "../Components/WeatherForecast";
import { BsSearch } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

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
      city: response.data.name,
      country: response.data.sys.country,
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
          <div className="row search-section">
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
              <div className="media-btn">
                <button
                  type="submit"
                  value="Search"
                  className="btn w-40 location-btn"
                >
                  <BsSearch />
                </button>
                <button
                  className="btn w-40 location-btn"
                  type="submit"
                  onClick={currentPosition}
                >
                  <BiCurrentLocation />
                </button>
              </div>
            </div>
          </div>
        </form>
        <WeatherInfo weatherData={weatherData} unit={unit} setUnit={setUnit} />
        <hr />
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
