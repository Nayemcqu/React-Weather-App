import { useState } from "react";
import { useFetchWeather } from "../hooks/useFetchWeather";
import  useGeoLocation  from "../hooks/useGeoLocation";
import { WeatherCard } from "./WeatherCard";
import { Forecast } from "./Forecast";

export default function Weather(){

const {isloading,error,data:geoData}=useGeoLocation();

const [city,setCity]=useState('');

const [searchQuery,setSearchQuery]=useState('');
const {data,error:apiError,isloading:apiLoading}=useFetchWeather({geoData,searchQuery});


if(isloading){
    return <p className=" text-center text-blue text-lg font-semibold">loading...</p>
}

if(error){
    return <p className="text-red-500 text-lg font-semibold">Error:{error.message}</p>
}

const {currentWeather,forecast}=data || {};

const handleSearch=(e)=>{
e.preventDefault();
if(city.trim()){
    console.log('city=',city);
setSearchQuery(city.trim());    
}
setCity("");
}

return(
<section className="overflow-x-hidden container mx-auto  flex justify-center items-center flex-col">


<div className="bg-white px-8 py-4 mb-10 mt-10 shadow-2xl rounded-3xl backdrop-blur-lg opacity-90">

<div>
<form onSubmit={handleSearch}>
<input type="text"
 placeholder="Enter City Name"
value={city}
onChange={(e)=>setCity(e.target.value)}
 className="p-2 border border-gray-300  shadow-2xl rounded-4xl 
px-6 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"/> 

<button type="submit" className="ml-4  border-2 border-blue-300  bg-blue-500 px-8 py-2 rounded-full cursor-pointer shadow-xl hover:bg-blue-400 text-white transition-all focus:outline-none">Search </button>
</form>
</div>
</div>

{data && <WeatherCard data={currentWeather} /> }
    {apiError && <p className="text-center text-2xl text-red-500 font-bold">{apiError?.message || "An Unexpected Error occured"}</p>}
        {error && <p  classname="text-center text-2xl text-red-500 font-bold">{error?.message || "An Unexpected Error occured"}</p>}

{forecast && <Forecast data={forecast}/>}


</section>

);



}