import { Card } from '../../card/card'
import { ChestPair } from '../chest/chest-pair'
import { Player } from '../../player/player'

export interface PlayerState {
  player: Player
  handCard: Card[]
  chestItems: ChestPair[]
}
