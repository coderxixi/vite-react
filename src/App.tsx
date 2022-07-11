import { useState } from 'react'
import About from "./page/about/index"
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <About/>
  </>
  )
}

export default App
