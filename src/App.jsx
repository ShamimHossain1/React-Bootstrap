import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App text-center mt-5">
         <h1 className='bg-danger text-white py-5'>Hello Bootstrap</h1>
    </div>
  )
}

export default App
