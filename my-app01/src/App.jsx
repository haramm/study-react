import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        안녕하세요 React를 배웁니다.
      </div>
      <div>
        hello world
      </div>
    </>
  )
}

export default App
