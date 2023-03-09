import hotBg from "./assest/hot.jpg";
import coldBg from "./assest/cold.jpg";
import Description from "./component/Description";
import { useEffect, useState } from "react";
import getFormatData from "./weatherService.js";

function App() {
  const [city, setCity] = useState("pune");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [bg, setbg] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormatData(city, unit);
      setWeather(data);

      const threshold = unit === "metric" ? 20 : 60;
      if (data.temp <= threshold) {
        setbg(coldBg);
      } else {
        setbg(hotBg);
      }
    };
    fetchWeatherData();
  }, [unit, city]);

  const handleUnit = (e) => {
    const button = e.currentTarget;
    const currResult = button.innerText.slice(1);
    // console.log(currResult);
    const isCel = currResult === "C";
    button.innerText = isCel ? "°F" : "°C";
    setUnit(isCel ? "metric" : "imperial");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };
  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {/* If weather is empty it won't load the below container  */}
        {/* By Default we are showing Pune City data */}
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                type="text"
                placeholder="Enter City and Hit Enter"
                onKeyDown={handleEnter}
              />
              <button onClick={(e) => handleUnit(e)}>°F</button>
            </div>
            <div className="section section__temperature">
              <div className="icon">
                <h3>
                  {weather.name},{weather.country}
                </h3>
                <img src={weather.iconURL} alt="" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temprature">
                <h1>
                  {weather.temp.toFixed()}°{unit === "metric" ? "C" : "F"}
                </h1>
              </div>
            </div>
            {/*Bottom Description Section */}
            <Description weather={weather} units={unit} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
