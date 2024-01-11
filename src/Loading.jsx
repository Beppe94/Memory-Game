import { useState, useEffect } from 'react';

import alexis from './assets/Characters/alexis.png'
import joey from './assets/Characters/joey.png'
import kaiba from './assets/Characters/kaiba.png'
import yugi from './assets/Characters/yugi.png'
import title from './assets/title.png'

function Loading({onClick}) {
    const [charImage, setCharImage] = useState([alexis, yugi, kaiba, joey])

    useEffect(() => {
        const chars = document.querySelectorAll('.character');
        const titleImg = document.querySelector('.title');
    
        setTimeout(() => {
            titleImg.style.opacity = '1';
        }, 500);

        chars.forEach((char, index) => {
            setTimeout(() => {      
                char.style.opacity = '1';
            }, 1200 * (index +1));
        })
    })

    return (
        <div className='loading'>
            <div className='background'></div>
            <img className='title' src={title} alt="yugioh" />
            <div className='characters'>
                {charImage.map((char, index) => (
                    <div className='characterContainer'>
                        <img className='character' key={index} src={char} />
                    </div>
                ))}
            </div>
            <button onClick={onClick}>Play</button>
        </div>
    )
}

export default Loading;