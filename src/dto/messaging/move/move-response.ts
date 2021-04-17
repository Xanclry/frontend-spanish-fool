import { MoveType } from './move-type'
import { Card } from '../../../model/card/card'
import { Player } from '../../../model/player/player'

export interface MoveResponse {
  owner: Player
  type: MoveType
  payload?: Card[]
  takeFromDeck: number
  isMoveFinished: boolean
  isStackDiscarded: boolean
  isGameFinished: boolean
}
