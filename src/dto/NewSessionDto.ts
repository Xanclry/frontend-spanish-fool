import { Player } from '../model/player/player'

export interface NewSessionDto {
  owner: Player
  name: string
}
