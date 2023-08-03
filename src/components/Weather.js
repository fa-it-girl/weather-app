import { useState } from 'react';
import ShowWeather from './ShowWeather';
import './Weather.css';

const Weather = () => {
  const password = process.env.APIKEY
  console.log(password)
  const [input, setInput] = useState({
    city: '',
    country: ''
  });
  const [weather, setWeather] = useState({
    data: null,
    error: null
  });

  const onChangeHandler = (event) => {
    event.preventDefault();
    setInput({ ...input, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  async function weatherData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.city},${input.country}&appid=46f8ad14ba378a305515d515de827964`
    );
    const data = await response.json();

    if (response.ok) {
      setWeather({ data: data, error: null });
    } else {
      setWeather({ data: null, error: 'City not found' });
    }
  }

  const clickHandler = async (event) => {
    event.preventDefault();
    await weatherData();
  };

  return (
    <>
      <div className="weather">
        <h1 className="name">My Weather app</h1>
        <form>
          <input type="text" name="city" placeholder="City" onChange={onChangeHandler} />
          <button type="submit" onClick={clickHandler}>
            Search
          </button>
        </form>
        {weather.error ? (
          <div className="error-message">{weather.error}</div>
        ) : (
          weather.data && <ShowWeather data={weather.data} />
        )}
      </div>
    </>
  );
};

export default Weather;
