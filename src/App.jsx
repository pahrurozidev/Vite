import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={'Route /'} />
        <Route path='/dashboard' element={'Route /dashboard'} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
