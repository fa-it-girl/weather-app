import './Weather.css'
const ShowWeather = (props) => {
  const { data } = props;

  return(
    <>
     <div className="description">
      <div>
              <img src='https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-8.png'></img>
      </div>
      <div>
        <h1>{data.name} , {data.sys.country}</h1>
      <h3>{data.weather[0].description}</h3>

      <h3>Wind: {data.wind.speed} km/h</h3>
      <h3>Humidity: {data.main.humidity}</h3>
      <h3>Temperatura: {Math.floor(data.main.temp - 273.15)} °C</h3>
    <span >
      time: {new Date().toLocaleTimeString()}
    </span>
      </div>

     </div>
    </>
  )
};

export default ShowWeather;
