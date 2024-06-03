import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ui from './components/ui/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Ui/>
    </>
  )
}

export default App
