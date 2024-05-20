import React, { useState } from 'react'
import './WeatherApp.css'
import cloudy_icon from "../Assets/cloudy.png";
import raining_icon from "../Assets/raining.png";
import sunny_icon from "../Assets/sunny.png";
import thunder_icon from "../Assets/thunder.png";
import search_icon from "../Assets/search_icon.png";

export const WeatherApp = () => {
    let api_key ="193c52e4a72f175abba0db1060b42581"
    // const[icon,setIcon] =useState(cloudy_icon);
    const search = async()=>
    {
        const element =document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0
        }
    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity =document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-speed");
    const location =document.getElementsByClassName("weather-location");
    const temp =document.getElementsByClassName("weather-temp");
    humidity[0].innerHTML=data.main.humidity +"%";
    location[0].innerHTML=data.name;
    wind[0].innerHTML=data.wind.speed;
    temp[0].innerHTML=data.main.temp+" °C ";
    // if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    // {

    // }
    }

  return (
    <>
    <div className='cointainer'>
    <div className="top-bar">
        <input type='text' className='cityInput' placeholder='search' />
        <div className='search-icon' onClick={()=>{search()}}>
            <img src={search_icon} alt=''/>
        </div>
</div>
<div className='weather-image'>
    <img src={cloudy_icon} alt='cloudy'/>
    </div>
    <div className='weather-temp'>24 °C</div>
    
    <div className='weather-location'>London</div>
 <div className="data-cointainer">
    <div className="element">
        <img src="{humidity_icon}" alt='' className='icon' />
        <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="humidity-text">humidity</div>
        </div>
        <div className="data">
            <div className="wind-speed">25</div>
            <div className="humidity-text">kmph</div>
        </div>
        </div>
        

  
        </div> </div>
    </>
  )
}
