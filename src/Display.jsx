import Card from './card';
import Loading from './Loading';

function Display({data, onClick, isLoading, startGame}) {

    
    return (
        <div className='main'>
            {isLoading ? (
                <Loading onClick={startGame} />
             ) : (
                <div className='cardsDisplayed'>
                    {data.map((card, index) => (
                        index < 10 && (
                            <Card 
                                onClick={onClick}
                                card={card.cardType}
                                name = {card.name}
                                attribute = {card.attribute}
                                source = {card.source}
                                rank = {card.rank}
                                type = {card.type}
                                effect = {card.effect}
                                atk = {card.atk}
                                def = {card.def}
                            />  
                        )
                    ))}
                </div>
            )}
        </div>
    )
}

export default Display;