import React from "react";
import { useWeather } from "../context/weather";
import { useContext } from "react";
const Input=()=>{
    const cxtweather=useWeather()
    console.log(cxtweather)
    return(
        <input 
        className="input-field"
        placeholder="search city"
        value={cxtweather.city}
        onChange={(e)=>cxtweather.setcity(e.target.value)}
        />
    )
}
export default Input;