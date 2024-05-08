import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <h1 className="text-2xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
