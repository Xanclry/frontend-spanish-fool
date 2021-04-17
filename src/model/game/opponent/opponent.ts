import { OpponentDeck } from '../deck/opponent-deck'

export interface Opponent {
  playerUid: string
  hand: OpponentDeck
}
