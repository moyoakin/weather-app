import './App.css';
import { useState, useEffect } from 'react'
import { Weather } from './components/weather/weather.component';

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [apiCall,setApiCall] = useState(0);


  useEffect(() => {
    //console.log(apiCall);
    const getData = async (city) => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=923e008ac844c2822903bbf10236be0e`);
      const weatherData = await response.json();
      setWeather(weatherData);
      //console.log(weather);
    } 
    getData(city);
  }, [apiCall]);


  



  function changeCity(event) {
    setCity(event.target.value);
    
  }

  const handleChange = (apiCall) => setApiCall(apiCall++);

  

  return (
    <div className="App">
      <div className="app-body">
      <input type="text" value={city} placeholder="Enter City" onChange={changeCity} ></input>
      <br/>
      <button onClick={handleChange}>Get Weather</button>
      <Weather weather={weather} />
      
      </div>
      
      


    </div>
  );
}

export default App;
