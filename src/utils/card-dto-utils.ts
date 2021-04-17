import { Card } from '../model/card/card'
import { CardDto } from '../dto/card-dto'

export const getCardDto = (card: Card): CardDto => {
  return {
    rank: card.rank.name,
    suit: card.suit.name,
  }
}
