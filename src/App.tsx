import { useState } from 'react'

import Layout from './page/layout/layout'

import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
  <>
  <Layout/>
  </>
  )
}

export default App
