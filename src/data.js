import alius from '/src/assets/Monsters/alius.png'
import xexex from '/src/assets/Monsters/xexex.png'
import light from '/src/assets/Attributes/light.png'
import dark from '/src/assets/Attributes/dark.png'

const data = [
    {
        name: 'Elemental Hero Neos Alius',
        attribute: light,
        rank: 4,
        type: 'Warrior / Gemini',
        effect:`This card is treated as a Normal Monster while face-up on the field or in the GY.
        While this card is a Normal Monster on the field, you can Normal Summon it to have it become an Effect Monster with this effect. 
        ● This card\'s name becomes "Elemental HERO Neos" while on the field.`,
        source: alius,
        atk: 1900,
        def: 1300
    },
    {
        name: 'King of Destruction - Xexex',
        attribute: dark,
        rank: 10,
        type: 'Fiend',
        effect:`This card cannot be Special Summoned. 
        This card must be Tribute Summoned by Tributing 3 Fiend-Type monsters on your side of the field. 
        If this card attacks your opponent's Life Points directly and makes them 0, the controller of this card wins the Match.`,
        source: xexex,
        atk: 3000,
        def: 2500
    }

]

export default data