import { Player } from '../model/player/player'
import { MoveResponse } from '../dto/messaging/move/move-response'

export class MoveResponseController {
  public processMoveResponse = (moveResponse: MoveResponse, currentPlayer: Player | null) => {
    if (!currentPlayer) return
    console.log('MOVE RESPONSE: ', moveResponse)
    if (moveResponse.owner.uid === currentPlayer.uid) return
    // if (moveResponse.)
  }
}
