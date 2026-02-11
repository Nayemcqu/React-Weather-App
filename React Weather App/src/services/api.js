import axios from 'axios';
const weatherUrl='https://api.openweathermap.org/data/2.5'
const currentWeatherurl=`${weatherUrl}/weather`
const currentForeccastUrl=`${weatherUrl}/forecast`
export const weatherIconUrl='https://openweathermap.org/img/wn/10d@2x.png'
const apiKey=import.meta.env.VITE_API_KEY;
export const fethcWeatherByCoords=async({geoData})=>{

if(!geoData?.latitude || !geoData?.longitude) return null;
const params={
    lat:geoData.latitude,
    lon:geoData.longitude, 
    units:'metric',
    appid: apiKey,
    }
 const [current,forecast]=await Promise.all([
    axios.get(currentWeatherurl,{ params}),
     axios.get(currentForeccastUrl,{ params})
    
    ]);


return {currentWeather:current.data,forecast:forecast.data};
}

export const fethcWeatherByCity=async({searchQuery})=>{

if(!searchQuery) return ;

const params={
 q:searchQuery,
    units:'metric',
    appid: apiKey,
    }

 const [current,forecast]=await Promise.all([
    axios.get(currentWeatherurl,{ params}),
     axios.get(currentForeccastUrl,{ params})
    
    ]);

console.log(forecast.data);
return {currentWeather:current.data,forecast:forecast.data};

}