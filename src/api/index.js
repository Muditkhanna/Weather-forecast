const baseURL="https://api.weatherapi.com/v1/current.json?key=77fa2b51b4224ff29e8154144242401";

export const getWeatherDataforCity=async(city)=>{
 const resp= await fetch(`${baseURL}&q=${city}&aqi=yes`);
 return resp.json();
};