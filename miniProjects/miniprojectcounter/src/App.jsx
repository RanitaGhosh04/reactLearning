import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [incdec, setIncdec] = useState(1)

  const inc = () => {
    setCount(count+incdec)
  }

  const dec = () => {
    setCount(count-incdec)
  }
  

  return (
    <>
      <input type="text"
      value={incdec}
      onChange={(e)=>setIncdec(Number(e.target.value))}
      />
      <h1>{count}</h1>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
    </>
  )
}

export default App
