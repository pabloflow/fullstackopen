import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({funcion, texto}) => <button onClick={funcion}>{texto}</button>



const Statistics = ({good, neutral, bad,clickg, clickn, clickb, total}) => {
  const isrecopilated = total === 0
  return (<div>
    <h1>give feedback</h1>
    <Button funcion={clickg} texto={'good'}/>
    <Button funcion={clickn} texto={'neutral'}/>
    <Button funcion={clickb} texto={'bad'}/>
    <h1>statistics</h1>
    {isrecopilated 
    ? 'no feedback given yet'  
    :<p>good {good}<br />
    neutral {neutral}<br />
    bad {bad}<br />
    all {total}<br />
    average {(good + (-1*bad)) /(total)} <br/>
    positive {good / total * 100}%
    </p>
     }
   
  </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickg = () => setGood(good + 1)
  const clickn = () => setNeutral(neutral + 1)
  const clickb = () => setBad(bad + 1)
  const total = good + bad + neutral
  return (
    Statistics({good ,neutral, bad, clickg, clickn, clickb, total})
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)