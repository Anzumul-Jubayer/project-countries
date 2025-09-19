import React from "react";
import { use } from "react";
import Country from "../Country/Country";
import './countries.css'
const Countries = ({ CountriesPromise }) => {
  const countries = use(CountriesPromise);
  const countriesData = countries.countries;
//   console.log(countriesData);
  return (
    <div>
      <h1>In the Countries:{countriesData.length}</h1>
      <div className="countries">
        {countriesData.map((country) => (
        <Country key={country.cca3.cca3} country={country}></Country>
      ))}
      </div>
      
    </div>
  );
};

export default Countries;
