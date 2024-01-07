import elementalNeos from '/src/assets/Monsters/ElementalHeroNeosAlius.png'
import light from '/src/assets/Attributes/Light.png'

const data = {
    cards: {
        name: 'Elemental Hero Neos Alius',
        attribute: light,
        rank: 4,
        type: 'Monster',
        effect:`This card is treated as a Normal Monster while face-up on the field or in the GY.
        While this card is a Normal Monster on the field, you can Normal Summon it to have it become an Effect Monster with this effect. 
        ● This card\'s name becomes "Elemental HERO Neos" while on the field.`,
        source: elementalNeos,
        atk: 1900,
        def: 1300
    },

}

export default data