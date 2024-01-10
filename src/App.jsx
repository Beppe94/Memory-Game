import { useState, useEffect } from 'react'
import './App.css'
import data from './data';
import Nav from './Nav'
import Display from './Display';
import Loading from './Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
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

  function startGame() {
    setIsLoading(false)
  }

  return (
    <div>
      <Display 
      currentScore={currentScore}
      bestScore={bestScore}
      data={cardSet}
      onClick={shuffleOnClick}
      startGame={startGame}
      isLoading={isLoading}
      />
    </div>
  )
}

export default App
