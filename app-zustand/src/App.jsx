import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseCounterStore from './store/UseCounterStore'
import ButtonComp from './ButtonComp'

function App() {
  const {count} = UseCounterStore();

  return (
    <>
      <div>
          <p>카운트 : {count}</p>
      </div>
      <div>
          <ButtonComp/>
      </div>
    </>
  )
}

export default App
