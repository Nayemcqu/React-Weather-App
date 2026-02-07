import { useState,useEffect } from "react"

export default function useGeoLocation(){
const [isloading,setIsLoading]=useState(true);
const [error,setError]=useState(null);
const [data,setdata]=useState({});
 
useEffect(()=>{

const  onsucces=(e)=>{
setIsLoading(false);
    setError(null);
    setdata(e.coords);
}

const onError=(e)=>{
setError(e);
setIsLoading(false);

}

navigator.geolocation.getCurrentPosition(onsucces,onError);

},[])

return { isloading, error, data };

}