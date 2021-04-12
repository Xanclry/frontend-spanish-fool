import { Card } from '../model/card/card'
import { Suits } from '../model/card/suit'
import { Ranks } from '../model/card/ranks'

const CARD_ARRAY: Card[] = []
for (const suit of Suits) {
  for (const rank of Ranks) {
    CARD_ARRAY.push({ suit, rank } as Card)
  }
}
CARD_ARRAY.sort(() => Math.random() - 0.5)
let iterator = 0

export const getRandomCard = () => {
  // const newCard: Card = {
  //   suit: Suits[Math.floor(Math.random() * Suits.length)],
  //   rank: Ranks[Math.floor(Math.random() * Ranks.length)],
  // }
  // return newCard
  if (iterator === CARD_ARRAY.length) {
    iterator = 0
  } else {
    iterator += 1
  }
  return CARD_ARRAY[iterator]
}

export const getCardId = (card: Card) => {
  return JSON.stringify(card)
}
