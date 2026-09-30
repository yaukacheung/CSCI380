import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="container">
      <div className="profile-card">
        <img src={reactLogo} alt="Profile" className="profile-img" />
        <h1>John Doe</h1>
        <p className="title">Web Developer</p>
        <p>College Station, TX</p>
        
        <div className="socials">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:email@example.com">Email</a>
        </div>

        <div className="counter">
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="count-input"
          />
          <div className="buttons">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
