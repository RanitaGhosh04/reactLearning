// import { useReducer } from 'react'
// import './App.css'

// const reducer = (state,action) => {
//   switch(action.type){
//     case 'INCREMENT':
//       return {count: state.count+1}

//       case 'DECREMENT':
//       return {count: state.count-1}

//       case 'RESET':
//       return {count: 0}
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer,{
//     count:0
//   })

//   const increment = () => {
//     dispatch({type: 'INCREMENT'})
//   }

//   const decrement = () => {
//     dispatch({type: 'DECREMENT'})
//   }

//   const reset = () => {
//     dispatch({type: 'RESET'})
//   }

//   return (
//     <>
//       <h1>{state.count}</h1>
//       <button onClick={increment}>INCREMENT</button>
//       <button onClick={decrement}>DECREMENT</button>
//       <button onClick={reset}>RESET</button>
//     </>
//   )
// }

// export default App


import { useReducer, useState } from 'react'
import './App.css'

const reducer = (state,action) => {
  switch(action.type){
    case 'INCREMENT':
      return {...state,count: state.count+action.payload}

      case 'DECREMENT':
      return {...state,count: state.count-action.payload}

      case 'RESET':
      return {...state,count: 0}
  }
}

function App() {

  const [incdecBy, setIncdecBy] = useState(1)
  const [state, dispatch] = useReducer(reducer,{
    count:0
  })

  const increment = () => {
    dispatch({type: 'INCREMENT',payload:incdecBy})
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT',payload:incdecBy})
  }

  const reset = () => {
    dispatch({type: 'RESET'})
  }

  return (
    <>
      <input type="text" 
      placeholder='incrementBy/decrementBy'
      value={incdecBy}
      onChange={(e)=>{setIncdecBy(Number(e.target.value))}}
      />
      <h1>{state.count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </>
  )
}

export default App
