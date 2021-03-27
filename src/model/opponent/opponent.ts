import { OpponentDeck } from '../deck/opponent-deck'

export interface Opponent {
  playerId: number
  hand: OpponentDeck
}
