import React, { useState } from "react";
import { use } from "react";
import Country from "../Country/Country";
import './countries.css'
const Countries = ({ CountriesPromise }) => {
  const countries = use(CountriesPromise);
  const countriesData = countries.countries;
  const[visitedCountry,setVisitedCountry]=useState([])
  const [visitedFlag,setVisitedFlag]=useState([])
  const handleVisitedCountries=((country)=>{
      const newVisitedCountry=[...visitedCountry,country]
      setVisitedCountry(newVisitedCountry)
  })
  const handleFlag=((flags)=>{
    const newVisitedFlag=[...visitedFlag,flags]
    setVisitedFlag(newVisitedFlag)
  })
//  const visitedCount=
//   console.log(countriesData);
  return (
    <div>
      <h1>In the Countries:{countriesData.length}</h1>
      <h2>Total Visited Country: {visitedCountry.length}</h2>
      <h2>Visited Flag:{visitedFlag.length}</h2>
      <ol>
        {
          visitedCountry.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)
        }
      </ol>
      
      <div className="flags">
        {
          
          visitedFlag.map((flag,index)=><img key={index} src={flag} alt="" />)
        }
      </div>
      <div className="countries">
        {countriesData.map((country) => (
        <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleFlag={handleFlag}></Country>
      ))}
      </div>
      
    </div>
  );
};

export default Countries;
