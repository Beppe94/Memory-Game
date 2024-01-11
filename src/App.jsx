import { useState, useEffect } from 'react'
import './App.css'
import data from './data';
import Display from './Display';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardSet, setCardset] = useState(data);
  const [checkWin, setCheckWin] = useState([]);
  const [mounted, setMounted] = useState(false);

  function shuffleArray() {
    const shuffled = cardSet.slice().sort(() => Math.random() - .5);

    setCardset(shuffled);
  }

  function shuffleOnClick(e) {
    const card = e.target.closest('.ritual, .card');

    const { key } = card.dataset
    
    gameScore(key);
    
    setTimeout(() => {
      shuffleArray();
    }, 300);
  }

  function gameScore(cardName) {
    if(!checkWin.includes(cardName)) {
      setCheckWin(prev => [...prev, cardName]);
      setCurrentScore(currentScore +1);
    } else {
      setCurrentScore(0);
      setCheckWin([]);
      if(bestScore < currentScore) {
        setBestScore(currentScore);
      }
    }
  }
  
  useEffect(() => {
    shuffleArray();
  }, [])

  function startGame() {
    setIsLoading(false);
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
