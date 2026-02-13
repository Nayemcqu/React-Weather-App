import { useState,useEffect } from "react";
import { useFetchWeather } from "../hooks/useFetchWeather";
import  useGeoLocation  from "../hooks/useGeoLocation";
import { WeatherCard } from "./WeatherCard";
import { Forecast } from "./Forecast";
import { Button } from "../ui/Button";

export default function Weather(){

 const [smScreen,setSmScreen]=useState();   

useEffect(()=>{
function checkScreen() {
setSmScreen(window.innerWidth<=450);
    
}


checkScreen();

window.addEventListener("resize",checkScreen);
return ()=>{
window.removeEventListener('resize',checkScreen);
}

},[]);


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
<section className="overflow-x-hidden container mx-auto   flex justify-center items-center flex-col">


<div className="bg-white px-2 py-2 sm:px-8 sm:py-4 mb-10 mt-10 shadow-2xl rounded-3xl backdrop-blur-lg opacity-90">

<div>
<form onSubmit={handleSearch}>
<input type="text"
 placeholder="Enter City Name"
value={city}
onChange={(e)=>setCity(e.target.value)}
 className="p-2 border border-gray-300  shadow-2xl rounded-4xl px-2 py-1
sm:px-6 sm:py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"/> 

<Button type="submit"  size={smScreen ? "sm":"md" }>Search </Button>
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