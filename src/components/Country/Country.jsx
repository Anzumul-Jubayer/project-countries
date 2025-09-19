import React, { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries,handleFlag}) => {
    
    const [visited,setVisited]=useState(false)
    const handleVisited=(()=>{
        // first way
        if(visited){
            setVisited(false)
        }else{

            setVisited(true)
            
        }
        // second way
        // setVisited(visited?false:true)
        // third way
        // setVisited(!visited)
        handleVisitedCountries(country)
    })
    return (
        <div className={`country ${visited &&'visited-country'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <p>Area: {country.area.area} {country.area.area>300000?"(Big Country)":"(Small Country)"}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>{visited?'Visited':'Not Visited'}</button>
            <button onClick={()=>handleFlag(country.flags.flags.png)}>Visited Country Flag</button>
        </div>
    );
};

export default Country;

