import { useState } from 'react'
import reactLogo from './assets/react.svg'
import main from './assets/tropical_main.png'
import './App.css'
import { Image } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <Image
        src={main}
        alt="main page background"
      ></Image>
      </div>
      <h1>Fairbnb</h1>
      <h2>A place to get last minute travel deals at a fair price!</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Click to find your next adventure.
        </p>
      </div>
      <p className="extra-info">
        Search for the location you want to travel to
      </p>
    </div>
  )
}

export default App
