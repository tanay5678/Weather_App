const API_KEY = "148ed0c3b37f7097ab7e51a4e529ad07";

const makeIcon = (id) => `https://openweathermap.org/img/wn/${id}.png`;

const getFormatData = async (city, units = "metrics") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  // Fethcing the data here
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  // we have only taken required data from the response
  const {
    weather,
    main: { feels_like, pressure, temp, temp_max, temp_min, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIcon(icon),
    feels_like,
    pressure,
    temp,
    temp_max,
    temp_min,
    speed,
    country,
    name,
    humidity,
  };
};

export default getFormatData;
