import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SayHi } from './components/SayHi'
import Button from './components/Button'

function App() {
  return (
    <>
      <SayHi msg='Hello from props'></SayHi>
      <SayHi >Hi from props.children</SayHi>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button text='first btn'></Button>
      <Button text='second link btn' src='#'></Button>
      <Button text='third btn'></Button>
    </>
  )
}

export default App
