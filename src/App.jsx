import { useState, useEffect } from 'react'
import './App.css'
import data from './data';
import Nav from './nav'
import Display from './display';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardSet, setCardset] = useState(data)

  function shuffleArray() {
    const shuffled = cardSet.slice().sort(() => Math.random() - .5);

    setCardset(shuffled)
  }

  function shuffleOnClick(e) {
    const card = e.target.closest('.card');
    const {key} = card.dataset
    console.log(key);
    shuffleArray()
  }

  useEffect(() => {
    shuffleArray()
  }, [])

  return (
    <div>
      <Nav />
      <Display 
      data={cardSet}
      onClick={shuffleOnClick}
      />
    </div>
  )
}

export default App
