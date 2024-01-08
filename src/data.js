import alius from '/src/assets/Monsters/alius.png'
import xexex from '/src/assets/Monsters/xexex.png'
import tenpai from '/src/assets/Monsters/tenpai.png'
import mokey from '/src/assets/Monsters/mokey.png'
import knight from '/src/assets/Monsters/knight.png'
import serene from '/src/assets/Monsters/serene.png'
import handcuffs from '/src/assets/Monsters/handcuff.png'


import light from '/src/assets/Attributes/light.png'
import dark from '/src/assets/Attributes/dark.png'
import fire from '/src/assets/Attributes/fire.png'
import water from '/src/assets/Attributes/water.png'
import earth from '/src/assets/Attributes/earth.png'
import wind from '/src/assets/Attributes/wind.png'

const data = [
    {
        name: 'Elemental Hero Neos Alius',
        attribute: light,
        rank: 4,
        type: 'Warrior / Gemini',
        effect:`This card is treated as a Normal Monster while face-up on the field or in the GY.
        While this card is a Normal Monster on the field, you can Normal Summon it to have it become an Effect Monster with this effect. 
        This card\'s name becomes "Elemental HERO Neos" while on the field.`,
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
    },
    {
        name: 'Tenpai Dragon Baidora',
        attribute: fire,
        rank: 3,
        type: 'Dragon',
        effect:`If this card is Normal or Special Summoned: You can take 1 "Sangen" Spell/Trap from your Deck, and either add it to your hand or Set it. 
        You can only use this effect of "Tenpai Dragon Baidora" once per turn. 
        You take no battle damage from battles involving your FIRE Dragon monsters. 
        Once per turn, during the Battle Phase, you can (Quick Effect): Immediately after this effect resolves, Synchro Summon using this card you control.`,
        source: tenpai,
        atk: 1700,
        def: 1000
    },,
    {
        name: 'Mokey Mokey Adrift',
        attribute: light,
        rank: 1,
        type: 'Fairy',
        effect:`This card's name becomes "Mokey Mokey" and is treated as a Normal Monster while face-up on the field or in the GY. 
        You can discard this card; add 1 "Mokey Mokey" card from your Deck to your hand, except "Mokey Mokey Adrift"`,
        source: mokey,
        atk: 300,
        def: 100
    },
    {
        name: 'Ice Knight',
        attribute: water,
        rank: 4,
        type: 'Acqua',
        effect:`Gains 400 ATK for each Aqua monster you control. 
        Once per turn: You can activate this effect; you can Normal Summon 1 WATER monster during your Main Phase this turn, 
        in addition to your Normal Summon/Set (you can only gain this effect once per turn), 
        also you cannot Normal or Special Summon monsters for the rest of this turn, except WATER monsters.`,
        source: knight,
        atk: 1300,
        def: 1200
    },
    {
        name: 'Serene Psychic Witch',
        attribute: earth,
        rank: 3,
        type: 'Psychic',
        effect: `When this card on the field is destroyed and sent to the Graveyard: 
        You can banish 1 Psychic-Type monster with 2000 or less ATK from your Deck. 
        During the next Standby Phase, if this card stays in the Graveyard: Special Summon the monster banished by this card's effect.`,
        source: serene,
        atk: 1400,
        def: 1200
    },
    {
        name: 'Handcuffs Dragon',
        attribute: wind,
        rank: 5,
        type: 'Dragon',
        effect: `When this card is destroyed by battle with an attacking monster your opponent controls and is sent to the Graveyard, you can equip this card to that monster. 
        The equipped monster loses 1800 ATK. When it is destroyed and this card is sent to the Graveyard, you can Special Summon this card.`,
        source: handcuffs,
        atk: 1400,
        def: 1200
    }   

]

export default data