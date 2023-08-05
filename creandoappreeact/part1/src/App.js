import { useState } from 'react';
import './App.css';


const Button =({click, text}) => <button onClick={click} >{text}</button>;

const contadornousado = () => {
  return <h1>Contador no usado todavía</h1>
}

function App() {

const [left, updateleft] = useState(0)
const [right, updateright] = useState(0)



const clickl = () => updateleft(left + 1)

const clickr = () => updateright(right + 1)

const clicktr = () => updatetodo({
  ...todo,
  right : todo.right + 1,
  
})

const clicktl = () => updatetodo({
  ...todo,
   left: todo.left + 1,

})


const [todo, updatetodo] = useState({
  right: 0,
  left: 0
})
const total = todo.left + todo.right
const ispar = total % 2 === 0

const reset = () => {updatetodo({
  left: 0,
  right: 0
})


}

  return (
    <div className="App">
      <p></p>
      <Button click={clicktl} text='left'></Button>
      <p>{todo.left}</p>
      <Button click={clicktr} text='right'></Button>
      <p>{todo.right}</p>  
      <Button click={reset} text='reset'></Button>
      {total === 0
      ? contadornousado()
      : <h1>el total es {total}</h1>  
      }
      <p>{ispar ? 'total par' : 'total impar'}</p>
    </div>
  );
}

export default App;
