import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votos, setVotos] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  })
  const [masvotada, setMasvotada] = useState()
  
  const selectrandom = () => {
      setSelected(Math.round(Math.random() * 5))
}
  const votar = () => {
    setVotos({...votos, 
      [selected]: votos[selected] + 1
    })

  }
  const masvot = () => {
    let maxnumber = 0
    let keynum = 0
    for (let num in votos){
      if (votos[num] > maxnumber){
        maxnumber = votos[num]
        keynum = num
      }
    }
    return keynum

  }

  return (
    <div>
      {props.anecdotes[selected]}<br/>
      <p>the anecdote {selected} has {votos[selected]}</p>   
      <button onClick={selectrandom}>random</button>
      <button onClick={votar}>vote</button>
      <p>La anecdote mas votada es: {masvot()} </p>
      <p>{props.anecdotes[masvot()]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)