import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 24.84,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        humidity: 47,
        weather: "Haze",
    });

    let updateInfo= (result) => {
        setWeatherInfo(result);
    }

    return(
        <div>
            <h2>Weather App by Neeraj</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}