import { useState, useEffect } from 'react'
import './App.css'
import data from './data';
import Nav from './nav'
import Card from './card';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardSet, setCardset] = useState(data.cards)

  return (
    <div>
      <Nav />
      <Card 
      data={cardSet}
      />
    </div>
  )
}

export default App
