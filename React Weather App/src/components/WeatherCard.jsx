import { weatherIconUrl } from '../services/api';
import {formatDate} from '../utils/dataFormatter'
export function WeatherCard({data}){
    const {name,main,weather,sys,wind}=data;
return(
<div className="flex flex-col items-center mb-5">
<h2 className="text-3xl font-semibold mb-2"> {name},{sys.country}</h2>
<h3 className="text-sm "> 
  {formatDate()}  
</h3>
<h3 className='mt-2 mb-4 font-semibold'>Current Weather </h3>
<div className='flex items-center justify-center mb-4'>
<img src={weatherIconUrl} alt={weather.description} />
<span className='text-4xl font-bold pr-6'>{Math.round(main.temp)}<sup>&deg;C</sup></span>
<div className=''>
    <span className='block font-semibold'>{weather[0].main}</span>
        <span className='block text-sm'> Fells Like {Math.round(main.feels_like)}<sup>&deg;C</sup></span>
</div >
</div>

<div className='flex justify-between text-sm w-full max-w-md text-center items-center'>
<div>  
wind <br/>
{Math.round(wind.speed)}
</div>
<div>  
Humidity <br/>
{Math.round(main.humidity)}
</div>
<div>  
Pressure <br/>
{Math.round(main.pressure)}
</div>
</div>  

</div>

);

}