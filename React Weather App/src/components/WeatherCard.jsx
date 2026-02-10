import {formatDate} from '../utils/dataFormatter'
export function WeatherCard({data}){
    const {name,main,weather,sys}=data;
return(
<div className="flex flex-col items-center mb-5">
<h2 className="text-3xl font-semibold mb-2"> Current Weather for: {name},{sys.country}</h2>
<h3 className="text-sm "> 
  {formatDate()}  
</h3>
<p className="text-2xl font-bold">{Math.round(main.temp)}&deg; C</p>
<p>{weather[0].description}</p>
</div>

);

}