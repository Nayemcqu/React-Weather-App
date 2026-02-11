import { useQuery } from "@tanstack/react-query";
import { fethcWeatherByCoords } from "../services/api";
import { fethcWeatherByCity } from "../services/api";
export function useFetchWeather({geoData,searchQuery}){
if(searchQuery){
    geoData="";
}
    const {data,isLoading,error}=useQuery({

queryKey:['Weather',geoData || searchQuery],

queryFn:()=>searchQuery ? fethcWeatherByCity({searchQuery}) :
fethcWeatherByCoords({geoData}),
retry: 1,
refetchOnWindowFocus: false,

enabled:((!!geoData?.latitude && !! geoData.longitude) || !!searchQuery),
staleTime:60*60*1000,
cacheTime:60*60*1000,

    });
return {data,error,isLoading}

}