import { Card } from '../model/card/card'
import { Suits } from '../model/card/suit'
import { Ranks } from '../model/card/ranks'

export const getRandomCard = () => {
  const newCard: Card = {
    suit: Suits[Math.floor(Math.random() * Suits.length)],
    rank: Ranks[Math.floor(Math.random() * Ranks.length)],
  }
  return newCard
}

export const getCardId = (card: Card) => {
  // return `${card.suit.name} ${card.rank.name}`
  return JSON.stringify(card)
}
