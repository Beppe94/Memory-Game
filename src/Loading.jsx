import { useState, useEffect } from 'react';

import alexis from './assets/Characters/alexis.png'
import joey from './assets/Characters/joey.png'
import kaiba from './assets/Characters/kaiba.png'
import yugi from './assets/Characters/yugi.png'

function Loading({onClick}) {
    const [charImage, setCharImage] = useState([alexis, joey, kaiba, yugi])

    useEffect(() => {
        const chars = document.querySelectorAll('.character');

        chars.forEach((char, index) => {
            setTimeout(() => {
                char.style.opacity = '1';
            }, 1000 * (index +1));
        })
    })

    return (
        <div className='loading'>
            <div className='characters'>
                {charImage.map((char, index) => (
                    <div>
                        <img className='character' key={index} src={char} />
                    </div>
                ))}
            </div>
            <button onClick={onClick}>Play</button>
        </div>
    )
}

export default Loading;