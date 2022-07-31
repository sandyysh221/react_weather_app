import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: inline-block;
  text-align: left;
`;

function SearchEngine() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8426e0d7454e83e722791e94527aed3&units=metric
    `;
    axios.get(url).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showForecast(response) {
    setLoaed(true);
    return setForecast(
      <>
        <h3>Forecast in {city}</h3>
        <List>
          <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
          <li>Description: {response.data.weather[0].description}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="{response.data.weather[0].description}"
            />
          </li>
        </List>
      </>
    );
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            className="form-control"
            type="search"
            placeholder="Enter a city..."
            autoFocus={true}
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="SearchEngine">
        {form}
        <p>{forecast}</p>
      </div>
    );
  } else {
    return form;
  }
}

export default SearchEngine;
