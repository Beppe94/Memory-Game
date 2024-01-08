import rankIcon from '/src/assets/rank.png'

function Card({card, name, attribute, rank, source, type, effect, atk, def, onClick}) {

    return (
        <div className={card === 'normal' ? 'card' : 'ritual'} onClick={onClick} data-key={name}>
            {console.log(card)}
            <div className='cardName'>
                <p>{name}</p>
                <img src={attribute}/>
            </div>
            <div className='cardRank'>
                {Array.from({length: rank}, (_, index) => (
                    <img key={index} src={rankIcon} />
                ))}
            </div>
            <div className='cardImage'>
                <img src={source}/>
            </div>
            <div className='cardInfo'>
                <p>[ {type} / Effect ]</p>
                <p>{effect}</p>
            </div>
            <div className='border'></div>
            <div className='cardStrength'>
                <p>ATK/ {atk}</p>
                <p>DEF/ {def}</p>
            </div>
        </div>
    )
}

export default Card;