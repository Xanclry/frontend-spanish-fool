import { PlayerState } from './player-state'
import { Card } from '../../card/card'

export interface GameState {
  playerStates: PlayerState[]
  discardedCardsAmount: number
  cardStack: Card[]
  deck: Card[]
}
