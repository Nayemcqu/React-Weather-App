import { useQuery } from "@tanstack/react-query";
import { fethcWeatherByCoords } from "../services/api";
export function useFetchWeather({geoData}){

    const {data,isLoading,error}=useQuery({

queryKey:['Weather',geoData],

queryFn:()=>fethcWeatherByCoords({geoData}),


    });
return {data,error,isLoading}

}