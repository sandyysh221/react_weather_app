import SearchEngine from "../Components/SearchEngine";
import "./WeatherApp.css";

function WeatherApp() {
  return (
    <div className="WeatherApp">
      <SearchEngine />
      <h1>Edinburgh</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">18</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Preciptation: 5%</li>
            <li>Humidity: 62%</li>
            <li>Wind: 9 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
