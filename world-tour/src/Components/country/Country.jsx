import { useState } from 'react';
import './country.css'
export default function Country({country, handleVisitedCountries}){
    // console.log(country)
    const {name, flags, area, population, cca3} = country;
   
    const[visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return(
        <div className= {`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited? 'purple':'black'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p><small>Area: {area}</small></p>
            <p><small>Population: {population}</small></p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=> handleVisitedCountries(country)}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    )               
}