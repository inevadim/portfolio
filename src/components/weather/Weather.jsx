import { useState } from 'react';
import styles from './Weather.module.scss';
import axios from 'axios';

export const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d340ddd7f500656b21b6a44403c2b480`;
  const searchLocation = event => {
    if (event.key === 'Enter') {
      axios.get(url).then(response => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.weatherWrapper}>
        <div className={styles.nameApp}>Weather</div>
        <div className={styles.inputApp}>
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder="Enter Location..."
            onKeyDown={searchLocation}
          />
        </div>
        {data.name ? <div className={styles.city}>City: {data.name}</div> : null}
        {data.main ? (
          <div className={styles.temp}>
            Temp: {(((data.main.temp.toFixed() - 32) * 5) / 9).toFixed()} °C
          </div>
        ) : null}
        {data.wind ? <div className={styles.winds}>Wind speed: {data.wind.speed} m/s</div> : null}
        {data.weather ? (
          <div className={styles.weather}>Weather: {data.weather[0].main}</div>
        ) : null}
      </div>
    </div>
  );
};
