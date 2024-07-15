import { useState } from 'react'
const Form =require('./Form')
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Form/>
    </>
  )
}

export default App
