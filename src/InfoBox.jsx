import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
    function convertKelvinToCelsius(kelvin) {
        return (kelvin - 273.15).toFixed(2); // Convert Kelvin to Celsius and round to 2 decimal places
    }

    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
  
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://media.istockphoto.com/id/1127448496/photo/winter-storm-warning-sign-with-snowfall-and-stormy-background.jpg?s=2048x2048&w=is&k=20&c=KrlqAZqTP8xiGZevodBMOqNMqDhlwCRYQl74WpGf2dw=";
    const RAIN_URL="https://media.istockphoto.com/id/1007640192/photo/two-paper-boats-in-monsoon-in-water-puddle.jpg?s=2048x2048&w=is&k=20&c=VVKoQzD8FQvWaIaN-Z6SdFEcS7itXl2Ap5c3V-vTwuA=";
    return(
       <div className="InfoBox">
        {/* <h1>Weather Info-{info.weather}</h1> */}
        <Card className='card' sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL: info.temp>15? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80? <ThunderstormIcon/>: info.temp>15?  <WbSunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature={convertKelvinToCelsius(info.temp)}&deg;C</p>
          <p> Humidity={info.humidity}</p>
          <p> Min Temp={convertKelvinToCelsius(info.tempMin)}&deg;C</p>
          <p> max Temp={convertKelvinToCelsius(info.tempMax)}&deg;C</p>
          <p> The weather can be described as <i>{info.weather}</i> and feels like {convertKelvinToCelsius(info.feelsLike)}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
       </div>
    )
}