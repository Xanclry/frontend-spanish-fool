import { PlayerStatusChanging } from './player-status-changing'

export interface MetaMessageDto {
  action: PlayerStatusChanging
  playerUid: string
}
