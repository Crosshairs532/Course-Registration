/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Courses from './component/courses/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Courses></Courses>
    </>
  )
}

export default App
