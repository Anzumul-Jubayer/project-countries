import React from 'react';
import './Country.css'
const Country = ({country}) => {
    // console.log(country)
    const handleVisited=(()=>{
        console.log('clicked')
    })
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <p>Area: {country.area.area} {country.area.area>300000?"(Big Country)":"(Small Country)"}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>Visited</button>
        </div>
    );
};

export default Country;

