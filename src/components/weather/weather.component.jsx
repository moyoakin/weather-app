import React from 'react';
import './weather.style.css';

export const Weather = (props) => {
    //console.log(weather);
    //const {cod, main, name,message} = weather;
    if(props.weather.cod !== 200){
        return(
            <h1>{props.weather.message}</h1>
        )
    }

    return(
        <div>
            <h2>{props.weather.name}</h2>
            <h2>{props.weather.main.temp}</h2>
            
        </div>
    )
}

