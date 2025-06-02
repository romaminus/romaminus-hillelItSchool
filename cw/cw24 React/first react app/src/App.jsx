// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button';
import Image from './components/Image';

function App() {
  const count = 100;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        <Image src={viteLogo} alt="Vite logo"></Image>
        </a>
        <a href="https://react.dev" target="_blank">
        <Image src={reactLogo} alt="React logo"></Image>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          count is {count}
        </p>
      </div>
      <Button text="Click This Button" src="http://google.com"></Button>
      <Button text="I'm a button"></Button>
    </>
  )
}

export default App
