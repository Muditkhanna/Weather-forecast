import React from "react";
import { useWeather } from "../context/weather";

const Card=(props)=>{
const cxtweather=useWeather();

    return(
        <div className="card">
            <img src={cxtweather?.data?.current?.condition?.icon} />
            <h2>{cxtweather?.data?.current?.temp_c}°C</h2>
             <h2>{cxtweather?.data?.current?.temp_f}°F</h2>
             <h2>Air Quality (PM 2.5): {cxtweather?.data?.current?.air_quality?.pm2_5}</h2>
            <h5>{cxtweather?.data?.location?.name},{cxtweather?.data?.location?.country}</h5>
        </div>
    )
}
export default Card;