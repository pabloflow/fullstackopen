import './App.css';
import React, {useEffect, useState} from 'react';




function App() {

  const [ Countries, setCountries ] = useState([])
  const [weather, setweather] = useState([])
  const [ Filter, setFilter] = useState('')
  const [Query, setQuery] = useState("")

  useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then( (json) => {
        setCountries(json)
      })
    },[])

    
    useEffect(() => {
      // Obtenemos el país seleccionado de la lista filtrada
      const selectedCountry = Countries.find((country) =>
        country.name.common.toLowerCase().includes(Filter.toLowerCase())
      );
  
      if (selectedCountry) {
        setQuery(selectedCountry.capital); // Llamamos a weat con la capital del país seleccionado
      } 
    }, [Filter]);
    
    useEffect(() => {

      //if (Countries.filter(filtrado).length === 1){
        //console.log(Countries.filter(filtrado))
        fetch(`http://localhost:5000/weather?query=${Query}`)
        .then((response) => response.json())
        .then((json) => {
          setweather(json);
          console.log(json);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      

      
    }, [Query]);
    
    



  // useEffect(() => {
  //   fetch("http://api.weatherstack.com/current",{params})
  //   .then((response) => response.json())
  //   .then((json) => {
  //     setweather(json)
  //     console.log(json)
  //   })
  // },[])


  
  

 
  const handlefilter = (event) => {
    setFilter(event.target.value)
  }
  const handleClick = (names) => {
    setFilter(names)
    

  }
  
  

  const filtrado = (elemento) => {
    // if (elemento.name.common === ''){
    //   return true
    // }
   
    if (elemento.name.common.toLowerCase().includes(Filter.toLocaleLowerCase())){
      return true
    }
    else{
      return false
    }

  }

  return (
    <div>
      <h2>Countries</h2>
    <div >
      find countries: <input value={Filter} onChange={handlefilter}></input>
      </div>
      <ul> 
        { Countries.filter(filtrado).length > 10
        ? <p>Make your selection more specific</p> 
        :
        Countries.filter(filtrado).length === 1
        ? (Countries.filter(filtrado)
          .map(country => (
          <li key={country.name.common}><h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <h4>Languages</h4>
          <p>{Object.values(country.languages).join(", ")}</p>            
         
          { country.borders ?
          <div>
           <h4>Borders</h4>
          <ul>
            {country.borders.map(lang => (
              <li key={lang}>{lang}</li>
            ))}
             </ul>
             </div>
            : <h4>No borders</h4>
            }
          <div>
          <img src={country.flags.png} alt={country.flags.alt}></img>
         </div>
         {/* <button onClick={() => weat(country.capital)}>Get Weather</button> */}
         <h3>Weather in {country.capital}</h3>  
          {weather.current
            ?(<div>
              <strong>{weather.current ? `temperature: ${weather.current.temperature}ºC` : "Loading..."}</strong><br></br>
              {weather.current.weather_icons
              ? <img src={weather.current.weather_icons}></img>
              :"not icon"
              }
              <br></br>
              <strong>Wind: </strong><p>{weather.current.wind_speed} km/h at {weather.current.wind_dir} direction</p> 
              </div>


            )
            :"loading"
            
            }
        
          </li>)))
        :
        Countries
        .filter(filtrado)
        .map(country => (
          <li key={country.name.common}>{country.name.common}  <button onClick={() => handleClick(country.name.common)} >show</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
