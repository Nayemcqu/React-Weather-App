import { formatShortDate } from "../utils/dataFormatter";
import { weatherIconUrl } from "../services/api";
import { useEffect, useState } from "react";
export function Forecast({data}){
const [mdScreen,setMdScreen]=useState();
useEffect(()=>{
function checkScreen() {
setMdScreen(window.innerWidth>=768);
    
}


checkScreen();

window.addEventListener("resize",checkScreen);
return ()=>{
window.removeEventListener('resize',checkScreen);
}

},[]);

 
    return (

    <div className="bg-zinc-300/30 p-10 text-base rounded shadow-2xl/45 backdrop-blur-2xl relative">
  <h2 className="sticky top-6 text-center font-bold text-white text-3xl uppercase z-30 pointer-events-none">
    Forecast
  </h2>

  <div className="overflow-hidden w-full">
    <div className={`flex md:flex-row flex-col gap-6 flex-nowrap ${mdScreen ? "animate-marquee":""}  w-max py-8`}>
      {[...data.list.slice(0, 10), ...data.list.slice(0, 10)].map((item, index) => (
        <div
          key={index}
          className="px-6 py-8 text-center text-white bg-gray-700
          backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/30
          w-[220px] shrink-0"
        >
          <p className="text-lg font-semibold">{formatShortDate(item.dt)}</p>
          <div className="flex items-center justify-center">
            <img src={weatherIconUrl} />
          </div>
          <p className="text-2xl font-bold">{Math.round(item.main.temp)}&deg;C</p>
          <p>Weather: {item.weather[0].description}</p>
          <div className="font-light">{Math.round(item.wind.speed)} m/s</div>
        </div>
      ))}
    </div>
  </div>
</div>


    );


}