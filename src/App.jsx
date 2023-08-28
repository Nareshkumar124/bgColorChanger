import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');
  const chageColor = (color) => {
    return function () {
      setColor(color)
    }
  }

  return (
    <div className='screen' style={{ backgroundColor: color }}>
      <div className='bar'>
        <div className='bar-inside'>
          <button className='btn' style={{ backgroundColor: "green" }} onClick={chageColor("green")}>Green</button>
          <button className='btn' style={{ backgroundColor: "red" }} onClick={chageColor("red")}>Red</button>
          <button className='btn' style={{ backgroundColor: "blue", color: "white" }} onClick={chageColor("blue")}>Blue</button>
          <button className='btn' style={{ backgroundColor: "yellow" }} onClick={() => {
            setColor("yellow")
          }}>Yellow</button>
          <button className='btn' style={{ backgroundColor: "black", color: "white" }} onClick={() => {
            setColor("black")
          }}>Black</button>
          <button className='btn' style={{ backgroundColor: "white" }} onClick={() => {
            setColor("white")
          }}>white</button>
          <button className='btn' style={{ backgroundColor: "olive" }} onClick={() => {
            setColor("olive")
          }}>Olive</button>
        </div>
      </div>
    </div>
  )


}

export default App
