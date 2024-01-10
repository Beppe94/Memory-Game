import { useState, useEffect } from 'react'
import './App.css'
import data from './data';
import Nav from './nav'
import Display from './display';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardSet, setCardset] = useState(data);
  const [checkWin, setCheckWin] = useState([]);

  function shuffleArray() {
    //console.log(cardSet.length);
    const shuffled = cardSet.slice().sort(() => Math.random() - .5);

    setCardset(shuffled)
  }

  function shuffleOnClick(e) {
    const card = e.target.closest('.ritual, .card')

    const { key } = card.dataset
    
    gameScore(key);
    
    setTimeout(() => {
      shuffleArray()
    }, 200);
  }

  function gameScore(cardName) {
    
    if(!checkWin.includes(cardName)) {
      setCheckWin(prev => [...prev, cardName])
      setCurrentScore(currentScore +1)
    } else {
      setCurrentScore(0)
      setCheckWin([])
      if(bestScore < currentScore) {
        setBestScore(currentScore)
      }
    }
  }
  
  useEffect(() => {
    shuffleArray()
  }, [])

  return (
    <div>
      <Nav 
      currentScore={currentScore}
      bestScore={bestScore}
      />
      <Display 
      data={cardSet}
      onClick={shuffleOnClick}
      />
    </div>
  )
}

export default App
