import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
    { name: 'Penyisi Gomez', number: '96-72-6646758' }
  ]) 
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