import { useFetchWeather } from "../hooks/useFetchWeather";
import  useGeoLocation  from "../hooks/useGeoLocation";

export default function Weather(){

const {isloading,error,data:geoData}=useGeoLocation();
const {data,error:apiError,isloading:apiLoading}=useFetchWeather({geoData});

if(isloading){
    return <p className=" text-center text-blue text-lg font-semibold">loading...</p>
}

if(error){
    return <p className="text-red-500 text-lg font-semibold">Error:{error.message}</p>
}

return(
<div className="w-fit bg-gradient-to-b from-blue-400 to-indigo-600 shadow-lg rounded-lg p-6 mt-10 mx-auto">
<h2 className="text-3xl font-bold text-gray-800">Your Coordinates: </h2>

</div>

);



}