import { useContext,createContext,useState} from "react";
import { getWeatherDataforCity } from "../api";
const WeatherContext=createContext(null);

export const useWeather=()=>{
    return useContext(WeatherContext);
} 

export const WeatherProvider=(props)=>{
    
    const [data,setdata]=useState(null);
    const [city,setcity]=useState(null);
 
    const fetchData=async()=>{
     const resp=await getWeatherDataforCity(city);
     setdata(resp);
    }
    return(
        <WeatherContext.Provider value={{setcity,city,data,fetchData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}