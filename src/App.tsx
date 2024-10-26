

import './App.css'
import { useCountStore } from './store/usecount'



function App() {

  const {count,increment,reset,decrement} =useCountStore((state)=>state)


  return (
   <>
   <button onClick={decrement}>-</button>
   <p>{count}</p>
   <button onClick={increment}>+</button>
   <button onClick={reset} >reset</button>
  </>
  )
}

export default App
