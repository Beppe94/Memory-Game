import rankIcon from '/src/assets/rank.png'

function Card({name, attribute, rank, source, type, effect, atk, def}) {

    return (
        <div className='card'>
            <div className='cardName'>
                <p>{name}</p>
                <img src={attribute}/>
            </div>
            <div className='attributes'>
                {Array.from({length: rank}, (_, index) => (
                    <img key={index} src={rankIcon} />
                ))}
            </div>
            <div className='image'>
                <img src={source}/>
            </div>
            <div className='info'>
                <p>[ {type} / Effect ]</p>
                <p>{effect}</p>
                <div className='strength'>
                    <p>ATK/ {atk}</p>
                    <p>DEF/ {def}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;