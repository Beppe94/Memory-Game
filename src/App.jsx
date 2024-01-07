import { useState, useEffect } from 'react'
import './App.css'
import data from './data';
import Nav from './nav'
import Display from './display';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardSet, setCardset] = useState(data)

  return (
    <div>
      <Nav />
      <Display 
      data={cardSet}
      />
    </div>
  )
}

export default App
