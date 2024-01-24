import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/weather';

function App() {
  const cxtweather=useWeather();
  console.log(cxtweather)
  return (
    <div className="App">
     <h1>Weather Forecast</h1>
      <Input/>
     <Button onClick={cxtweather.fetchData} value="Search"/> 
     <Card/>
     <Button value="Refresh"/>
    </div>
  );
}

export default App;
