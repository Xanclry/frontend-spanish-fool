import { GameApi } from '../api/game-api'
import { Card } from '../model/card/card'
import { cardStackActions } from '../state/table/card-stack/cardStackSlice'
import { playerDeckActions } from '../state/table/player-deck/playerDeckSlice'
import { DraggableLocation } from 'react-beautiful-dnd'
import { Player } from '../model/player/player'
import { getCardDto } from '../utils/card-dto-utils'
import { Move } from '../dto/messaging/move/move'
import { MoveType } from '../dto/messaging/move/move-type'

export class MoveController {
  gameApi: GameApi

  constructor(gameApi: GameApi) {
    this.gameApi = gameApi
  }

  public processMove = (
    dispatch: any,
    source: DraggableLocation,
    destination: DraggableLocation | undefined,
    card: Card,
    sessionId: number,
    player: Player | null
  ) => {
    if (!player) return
    if (!destination) return
    const sourceId = source.droppableId
    const destinationId = destination.droppableId

    if (sourceId === destinationId) return
    // this.handToStackMove([card], dispatch, sessionId, player)
    // dispatch(cardStackActions.addCardsToStack([card]))
    if (sourceId === 'player-hand') {
      this.handToStackMove(card, dispatch, sessionId, player)
      // dispatch(playerDeckActions.removeCard(card))
      return
    }
    this.chestToStackMove(card, source.index, sourceId, dispatch, sessionId, player)
    // if (source.index === 2) {
    //   dispatch(playerDeckActions.deleteTopCard(+source.droppableId))
    // } else {
    //   dispatch(playerDeckActions.deleteChest(+source.droppableId))
    // }
  }

  private chestToStackMove = (
    card: Card,
    index: number,
    droppableId: string,
    dispatch: any,
    sessionId: number,
    player: Player
  ) => {
    dispatch(cardStackActions.addCardsToStack([card]))
    // bottom index = 1
    // top index = 2
    if (index === 2) {
      dispatch(playerDeckActions.deleteTopCard(+droppableId))
    } else {
      dispatch(playerDeckActions.deleteChest(+droppableId))
    }
  }

  private handToStackMove = (card: Card, dispatch: any, sessionId: number, player: Player) => {
    dispatch(cardStackActions.addCardsToStack([card]))
    dispatch(playerDeckActions.removeCard(card))
    const move: Move = { owner: player, type: MoveType.HAND_TO_STACK, payload: [getCardDto(card)] }
    this.gameApi.sendMove(sessionId, move)
  }
}
