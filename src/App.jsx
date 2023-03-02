import { useState } from 'react'
import LocationSearch from './components/locationSearch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Fairbnb</h1>
      <h2>A place to get last minute travel deals at a fair price!</h2>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <LocationSearch />
        <p>
          Click to find your next adventure.
        </p>
      </div>
      <p>
        Search for the location you want to travel to
      </p>
    </div>
  )
}

export default App
