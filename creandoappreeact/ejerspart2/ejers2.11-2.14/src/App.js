import React, { useState } from 'react'
import axios from 'axios'



const App = ({agenda}) => {
  const [ persons, setPersons ] = useState(
    agenda
  ) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  const filtrado = (elemento) => {
    if(elemento.name === ''){
      return true
    }
    if(elemento.name.toLowerCase().startsWith(newFilter)){
      return true
    } 
    else{
       return false
    }   
   
  }

  const handleChange = (event) => {

    //console.log(event.target.value)
    setNewName(event.target.value)

       
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const handleSubmit = (event)  => {
    event.preventDefault()
    const addPerson = {
      name: newName,
      number: newNumber
    } 
    let same = false
    
    persons.forEach(person => {
      if(person.name === newName) {
        console.log("iguales")
        same = true 
      }
          
    });
    setNewName("")
    setNewNumber("")
    if(same){
      alert(`${newName} es alto maricón y no puede estar dos veces`)
      return
    }
    
    setPersons(persons.concat(addPerson))
    
    

 }

  return (
    <div>
     <h2>  Phonebook</h2>
     <div>
      filter shown with: <input value={newFilter} onChange={handleFilter}/>
     </div>
      <form onSubmit={handleSubmit}>
        <div>
            name: <input  value={newName} onChange={handleChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber}></input>
        </div>
        <div>
          <button type="submit"  >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
        .filter(filtrado)
        .map(person =>(
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>     
      {/* <div>debug: {newName}</div>  */}
    </div>
  )
}

export default App