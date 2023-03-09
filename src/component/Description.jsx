import React from "react";
import "./des.css";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Description = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "Min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "Max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "Feels Like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "Pressure",
      data: weather.pressure,
      unit: "hpa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "Humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "Wind Speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];
  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icons">
            {icon}
            <small>{title}</small>
          </div>
          <h2>
            {data} {unit}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Description;
