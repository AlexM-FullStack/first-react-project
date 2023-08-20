import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('')
  const [count, setCount] = useState(0)

  async function getAdvice() {
    const result = await fetch('https://api.adviceslip.com/advice')
    const data = await result.json()
    setAdvice(data.slip.advice)
    setCount(c => c + 1)
  }

  useEffect(function() {
    getAdvice()
  }, [])

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count}/>
    </div>
  );
}

const Message = (props) => {
  return (
    <p>You have received <strong>{props.count}</strong> pieces of advice...</p>
  )
}

export default App;
