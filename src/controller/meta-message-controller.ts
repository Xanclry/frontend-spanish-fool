import { MetaMessageDto } from '../dto/messaging/meta/meta-message-dto'
import { Player } from '../model/player/player'
import { opponentsDecksActions } from '../state/table/opponents-deck/opponentsDecksSlice'
import { PlayerStatusChanging } from '../dto/messaging/meta/player-status-changing'

export class MetaMessageController {
  processMetaMessage = (metaMessage: MetaMessageDto, player: Player | null, dispatch: any) => {
    console.log('META MESSAGE : ', metaMessage)
    if (metaMessage.action.toString() === PlayerStatusChanging[PlayerStatusChanging.JOIN]) {
      dispatch(opponentsDecksActions.addOpponent(metaMessage.playerUid))
    }
    if (metaMessage.action.toString() === PlayerStatusChanging[PlayerStatusChanging.LEAVE]) {
      dispatch(opponentsDecksActions.deleteOpponent(metaMessage.playerUid))
    }
  }
}
