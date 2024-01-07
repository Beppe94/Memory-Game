import Card from './card';

function Display({data}) {

    
    return (
        <div className='main'>
            {data.map((card, index) => (
                <Card 
                name = {card.name}
                attribute = {card.attribute}
                source = {card.source}
                rank = {card.rank}
                type = {card.type}
                effect = {card.effect}
                atk = {card.atk}
                def = {card.def}
                />
            ))}
        </div>
    )
}

export default Display;