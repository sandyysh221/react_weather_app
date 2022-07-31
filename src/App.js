import "./App.css";
import Footer from "./Components/Footer";
import WeatherApp from "./Containers/WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp defaultCity="Toronto" />
      <Footer />
    </div>
  );
}

export default App;
