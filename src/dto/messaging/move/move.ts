import { Player } from '../../../model/player/player'
import { MoveType } from './move-type'
import { CardDto } from '../../card-dto'

export interface Move {
  owner: Player
  type: MoveType
  payload?: CardDto[]
}
