import alius from '/src/assets/Monsters/alius.png'
import xexex from '/src/assets/Monsters/xexex.png'
import tenpai from '/src/assets/Monsters/tenpai.png'
import mokey from '/src/assets/Monsters/mokey.png'
import knight from '/src/assets/Monsters/knight.png'
import serene from '/src/assets/Monsters/serene.png'
import handcuffs from '/src/assets/Monsters/handcuff.png'
import lyrilusc from '/src/assets/Monsters/lyrilusc.png'
import creator from '/src/assets/Monsters/creator.png'
import ojama from '/src/assets/Monsters/ojama.png'
import duston from '/src/assets/Monsters/duston.png'
import retro from '/src/assets/Monsters/retro.png'
import paladin from '/src/assets/Monsters/paladin.png'
import evigishki from '/src/assets/Monsters/evigishki.png'
import ophiel from '/src/assets/Monsters/ophiel.png'
import archfiend from '/src/assets/Monsters/archfiend.png'
import libromancer from '/src/assets/Monsters/libromancer.png'
import shinobaron from '/src/assets/Monsters/shinobaron.png'
import dogmatika from '/src/assets/Monsters/dogmatika.png'
import buerillabaisse from '/src/assets/Monsters/buerillabaisse.png'


import light from '/src/assets/Attributes/light.png'
import dark from '/src/assets/Attributes/dark.png'
import fire from '/src/assets/Attributes/fire.png'
import water from '/src/assets/Attributes/water.png'
import earth from '/src/assets/Attributes/earth.png'
import wind from '/src/assets/Attributes/wind.png'

const data = [
    {   
        cardType: 'normal',
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
        cardType: 'normal',
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
        cardType: 'normal',
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
        cardType: 'normal',
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
        cardType: 'normal',
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
        cardType: 'normal',
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
        cardType: 'normal',
        name: 'Handcuffs Dragon',
        attribute: wind,
        rank: 5,
        type: 'Dragon',
        effect: `When this card is destroyed by battle with an attacking monster your opponent controls and 
        is sent to the Graveyard, you can equip this card to that monster. 
        The equipped monster loses 1800 ATK. When it is destroyed and this card is sent to the Graveyard, you can Special Summon this card.`,
        source: handcuffs,
        atk: 1400,
        def: 1200
    },
    {
        cardType: 'normal',
        name: 'Lyrilusc - Turquoise Warbler',
        attribute: wind,
        rank: 1,
        type: 'Winged Beast',
        effect: `If you control no monsters, you can Special Summon this card (from your hand). 
        If this card is Special Summoned from the hand: You can Special Summon 1 "Lyrilusc" monster from your hand or Graveyard. 
        You can only use this effect of "Lyrilusc - Turquoise Warbler" once per turn.`,
        source: lyrilusc,
        atk: 100,
        def: 100
    },
    {
        cardType: 'normal',
        name: 'The Creator Incarnate',
        attribute: light,
        rank: 4,
        type: 'Warrior',
        effect: `You can Tribute this card; Special Summon 1 "The Creator" from your hand.`,
        source: creator,
        atk: 1600,
        def: 1500
    },
    {
        cardType: 'normal',
        name: 'Ojama Blue',
        attribute: light,
        rank: 2,
        type: 'Beast',
        effect: `When this card is destroyed by battle and sent to the GY: You can add 2 "Ojama" cards from your Deck to your hand.`,
        source: ojama,
        atk: 0,
        def: 1000
    },
    {
        cardType: 'normal',
        name: 'Blue Duston',
        attribute: water,
        rank: 1,
        type: 'Fiend',
        effect: `Cannot be used as a Fusion, Synchro, or Xyz Material for a Summon.
         While this card is face-up on the field, it cannot be Tributed. 
         When this card on the field is destroyed: Banish 1 random card from its controller's hand, face-down, until the Standby Phase of the next turn. 
         You can only control 1 face-up "Blue Duston".`,
        source: duston,
        atk: 0,
        def: 1000
    },
    {
        cardType: 'normal',
        name: 'Red-Eyes Retro Dragon',
        attribute: dark,
        rank: 4,
        type: 'Dragon',
        effect: `If a Level 7 or lower "Red-Eyes" monster(s) you control is destroyed by your opponent's attack or card effect and sent to your GY, 
        while this card is in your hand: You can Special Summon this card in Defense Position, and if you do, 
        Special Summon as many of those destroyed monsters as possible in the same position they were in when destroyed. 
        You can Tribute this card; you can Normal Summon 1 "Red-Eyes" monster during your Main Phase this turn in addition to your Normal Summon/Set. 
        (You can only gain this effect once per turn.)`,
        source: retro,
        atk: 1700,
        def: 1600
    },
    {
        cardType: 'ritual',
        name: 'Paladin of Dark Dragon',
        attribute: dark,
        rank: 4,
        type: 'Dragon / Ritual',
        effect: `You can Ritual Summon this card with "Dark Dragon Ritual". 
        At the start of the Damage Step, if this card attacks a Defense Position monster: Destroy that monster. 
        You can Tribute this card; Special Summon 1 "Red-Eyes" monster from your hand or Deck, except "Red-Eyes B. Chick". 
        You can only use this effect of "Paladin of Dark Dragon" once per turn.`,
        source: paladin,
        atk: 1900,
        def: 1200
    },
    {
        cardType: 'ritual',
        name: 'Evigishki Gustkraken',
        attribute: water,
        rank: 6,
        type: 'Acqua / Ritual',
        effect: `You can Ritual Summon this card with any "Gishki" Ritual Spell Card. 
        When this card is Ritual Summoned: Look at up to 2 random cards in your opponent's hand, then shuffle 1 of them into the Deck.`,
        source: evigishki,
        atk: 2400,
        def: 1000
    },
    {
        cardType: 'ritual',
        name: 'Megalith Ophiel',
        attribute: earth,
        rank: 4,
        type: 'Dragon / Ritual',
        effect: `You can Ritual Summon this card with a "Megalith" card. 
        If this card is Ritual Summoned: You can add 1 "Megalith" monster from your Deck to your hand, except "Megalith Ophiel". 
        During your Main Phase: You can activate this effect; Ritual Summon 1 Ritual Monster from your hand, by Tributing monsters from your hand or field, 
        including this card on your field, whose total Levels equal or exceed the Level of the Ritual Monster. 
        You can only use this effect of "Megalith Ophiel" once per turn.`,
        source: ophiel,
        atk: 1600,
        def: 2500
    },
    {
        cardType: 'ritual',
        name: 'Archfiend\'s Awakening',
        attribute: dark,
        rank: 6,
        type: 'Fiend / Ritual',
        effect: `You can Ritual Summon this card with "Contract with the Abyss". 
        This card's name becomes "Summoned Skull" on the field, but is still treated as an "Archfiend" card. 
        Cannot be destroyed by battle, except by battle with a Ritual Monster, and cannot be destroyed by monster effects, except those of Ritual Monsters. 
        If this Ritual Summoned card you control is sent to your GY by an opponent's card: You can Special Summon 1 "Summoned Skull" from your hand, Deck, or GY.`,
        source: archfiend,
        atk: 2500,
        def: 1200
    },
    {
        cardType: 'ritual',
        name: 'Libromancer Fireburst',
        attribute: fire,
        rank: 7,
        type: 'Cyberse / Ritual',
        effect: `You can Ritual Summon this card with a "Libromancer" card. 
        If this card was Ritual Summoned by using a monster(s) on the field, 
        it cannot be destroyed by battle, also any battle damage it inflicts to your opponent is doubled. 
        This card can make up to 2 attacks on monsters during each Battle Phase. 
        When a monster declares an attack: You can banish 1 "Libromancer" Ritual Monster from your GY; this card gains 200 ATK.`,
        source: libromancer,
        atk: 2800,
        def: 2800
    },
    {
        cardType: 'ritual',
        name: 'Shinobaron Shade Peacock',
        attribute: wind,
        rank: 4,
        type: 'Winged Beast / Ritual',
        effect: `You can Ritual Summon this card with "Shinobird's Calling". 
        This card's name becomes "Shinobaron Peacock" while in the hand or on the field. 
        You can Tribute this Ritual Summoned card; add 1 Spirit monster and 1 Ritual Spell from your Deck to your hand. 
        You can only use this effect of "Shinobaron Shade Peacock" once per turn. 
        Once per turn, during the Standby Phase of the next turn after this card was banished: Special Summon this banished card. 
        Once per turn, during the End Phase, if this card was Special Summoned this turn: Return this card to the hand.`,
        source: shinobaron,
        atk: 2000,
        def: 1500
    },
    {
        cardType: 'ritual',
        name: 'White Relic of Dogmatika',
        attribute: light,
        rank: 4,
        type: 'Spellcaster / Ritual',
        effect: `You can Ritual Summon this card with "Dogmatikamacabre". 
        If this card is Ritual Summoned: You can target 2 face-up monsters on the field; make 1 of those monsters gain ATK equal to the other monster's ATK. 
        Level 8 or higher "Dogmatika" monsters you control cannot be destroyed by battle. 
        If a monster(s) is Special Summoned from your opponent's Extra Deck (except during the Damage Step): 
        You can look at your opponent's Extra Deck and send 1 monster from it to the GY. 
        You can only use this effect of "White Relic of Dogmatika" once per turn.`,
        source: dogmatika,
        atk: 500,
        def: 2500
    },
    {
        cardType: 'ritual',
        name: 'Buerillabaisse de Nouvelles',
        attribute: dark,
        rank: 1,
        type: 'Beast-Warrior / Ritual',
        effect: `You can Ritual Summon this card with a "Recipe" card. 
        If this card is Special Summoned: You can excavate the top 5 cards of your Deck, 
        and if you do, you can add 1 excavated "Nouvelles" card to your hand, also shuffle the rest into the Deck. 
        When a card or effect is activated that targets this card on the field, or when this card is targeted for an attack (Quick Effect): 
        You can Tribute this card and 1 Attack Position monster on either field, and if you do, 
        Special Summon 1 Level 2 or 3 "Nouvelles" Ritual Monster from your hand or Deck. 
        You can only use each effect of "Buerillabaisse de Nouvelles" once per turn.`,
        source: buerillabaisse,
        atk: 400,
        def: 1850
    }

]

export default data